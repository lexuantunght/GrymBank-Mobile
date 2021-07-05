import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { CustomInput } from '../components/CustomInput';
import config from '../configs/config';

export function SuccessRegisterScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='7/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container]}>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Đăng ký thành công</Text>
                    <Text style={styles.title}>XIN CHÚC MỪNG</Text>
                </View>
                <Text style={styles.subtitle}>Vui lòng đăng nhập với tên đăng nhập hoặc số điện thoại của bạn. Mật khẩu sẽ được gửi qua SĐT của bạn trong giây lát.</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Quay lại màn hình đăng nhập</Text>
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
        marginHorizontal: 20, marginTop: 20, textAlign: 'center'
    },
    subtitle: {
        color: '#fff',
        marginHorizontal: 20, marginTop: 10, marginBottom: 20
    },
    button: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width * 4 / 5, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    }
});