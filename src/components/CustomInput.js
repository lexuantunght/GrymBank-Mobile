import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export function CustomInput({label = '', readOnly = false, security = false, value = ''}) {
    const [text, setText] = React.useState(value);
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 14, color: '#666666', marginBottom: 10}}>{label}</Text>
            <TextInput editable={!readOnly} secureTextEntry={security} style={{fontSize: 16, color: '#000'}} value = {text}
            onChangeText={text => setText(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15,
        flexDirection: 'column', marginBottom: 20
    }
});