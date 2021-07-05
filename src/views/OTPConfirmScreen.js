import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function OTPConfirmScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='7/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container]}>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Nhập mã xác thực OTP</Text>
                    <Text style={styles.subtitle}>Một mã xác thực đã được gửi đến số điện thoại đã đăng ký</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                    <TextInput style={styles.input} placeholder='Nhập OTP' placeholderTextColor='#c4c4c4'/>
                    <TouchableOpacity>
                        <Text style={{fontSize: 17, fontWeight: '700', color: '#fff', textAlign: 'center', marginTop: 20, marginBottom: 40}}>GỬI LẠI MÃ</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtitle}>Mã xác thực chỉ có hiệu lực trong 2 phút. Vui lòng không cung cấp mã xác thực cho bất kỳ ai và mục đích nào khác</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SuccessRegister')}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Hoàn thành</Text>
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
        textAlign: 'center', height: 46
    }
});