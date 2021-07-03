import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function FirstSignupScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='1/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.title}>Lưu ý khi mở tài khoản</Text>
                    <View style={styles.note}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>Lợi ích</Text>
                        <Text style={styles.item}>- Giao dịch mọi lúc mọi nơi chỉ cần có Internet mà không cần tới ngân hàng hay ra cây ATM.</Text>
                        <Text style={styles.item}>- Dễ dàng quản lý chi tiêu, thu, chi qua tài khoản mọi lúc mọi nơi.</Text>
                        <Text style={styles.item}>- Cho phép khách hàng đăng ký vay vốn, mở thẻ tín dụng trực tuyến mà không cần phải ra ngân hàng.</Text>
                    </View>
                    <View style={styles.note}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>Các bước tạo tài khoản</Text>
                        <Text style={styles.item}>- Lần lượt nhập các thông tin cần thiết theo hướng dẫn</Text>
                        <Text style={styles.item}>- Nhập mã OTP xác nhận để hoàn tất đăng kí </Text>
                    </View>
                    <View style={styles.note}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>Lưu ý</Text>
                        <Text style={styles.item}>- Cẩn trọng với máy tính nơi công cộng.</Text>
                        <Text style={styles.item}>- Luôn luôn bảo vệ kỹ mật khẩu.</Text>
                        <Text style={styles.item}>- Chỉ nên giao dịch với những website thanh toán uy tín.</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondSignup')}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>Tiếp tục</Text>
                    </TouchableOpacity>
                </ScrollView>
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
    note: {
        backgroundColor: config.primary, padding: 20, marginHorizontal: 20,
        borderRadius: 15, marginVertical: 10
    },
    item: {
        color: '#fff', marginVertical: 5
    },
    button: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    }
})