import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions,
    TextInput
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function SecondSignupScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='1/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container, {flexDirection: 'column', justifyContent: 'space-between'}]}>
                <View>
                    <Text style={styles.title}>Cung cấp số điện thoại</Text>
                    <Text style={styles.subtitle}>Số điện thoại này cũng sẽ được dùng để làm thông tin đăng nhập của bạn sau này. Vui lòng nhập số điện thoại chính chủ của bạn.</Text>
                    <TextInput style={styles.input} placeholder='Nhập số điện thoại' placeholderTextColor='#c4c4c4'/>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThirdSignup')}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Tiếp tục</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: config.secondary
    },
    title: {
        fontSize: 17, fontWeight: '700', color: '#fff',
        marginHorizontal: 20, marginTop: 20
    },
    subtitle: {
        color: '#fff',
        marginHorizontal: 20, marginTop: 10, marginBottom: 20
    },
    button: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    },
    input: {
        backgroundColor: '#fff', borderRadius: 15, fontSize: 16,
        textAlign: 'center', height: 46, marginHorizontal: 20
    }
})