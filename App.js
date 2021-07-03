import 'react-native-gesture-handler';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { AppNav } from './src/navigations/AppNav';
import { PreNav } from './src/navigations/PreNav';
import { NavigationContainer } from '@react-navigation/native';

function MainApp() {
  return(
    <NavigationContainer>
      <AppNav/>
    </NavigationContainer>
  )
}

function PreApp({onLoginSuccess}) {
  return(
    <NavigationContainer>
      <PreNav onLoginSuccess={onLoginSuccess}/>
    </NavigationContainer>
  )
}

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 800,
        useNativeDriver: true
      },
    ).start();
  }, [authenticated]);

  return(
    <Animated.View style = {[styles.container, {opacity: fadeAnim}]}>
      {
        authenticated ? <MainApp/> 
        : <PreApp onLoginSuccess = {() => {
          fadeAnim.setValue(0);
          setAuthenticated(true);
        }}/>
      }
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;