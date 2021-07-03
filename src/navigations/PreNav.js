import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import config from '../configs/config';
import { FirstSignupScreen } from '../views/FirstSignupScreen';
import { LoginScreen } from '../views/LoginScreen';
import { FaceLoginScreen } from '../views/FaceLoginScreen';
const Stacks = createStackNavigator();

export function PreNav({onLoginSuccess}) {
    return(
        <Stacks.Navigator screenOptions = {{
            headerStyle: {
                backgroundColor: config.primary,
            },
            headerTintColor: '#fff',
            headerShown: false
        }}>
            <Stacks.Screen name='Login'>
                {({navigation}) => <LoginScreen navigation={navigation} onLoginSuccess={onLoginSuccess}/>}
            </Stacks.Screen>
            <Stacks.Screen name='FaceLogin'>
                {({navigation}) => <FaceLoginScreen navigation={navigation} onLoginSuccess={onLoginSuccess}/>}
            </Stacks.Screen>
            <Stacks.Screen name='FirstSignup' 
            component={ FirstSignupScreen }/>
        </Stacks.Navigator>
    )
}