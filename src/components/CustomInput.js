import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export function CustomInput({label = '', readOnly = false, security = false, value = ''}) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 14, color: '#c4c4c4', marginBottom: 10}}>{label}</Text>
            <TextInput editable={!readOnly} secureTextEntry={security} style={{fontSize: 16}} value = {value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15,
        flexDirection: 'column', marginBottom: 20
    }
});