import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { CustomInput } from '../components/CustomInput';
import config from '../configs/config';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function TotalConfirmScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='6/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container]}>
                <ScrollView style={{flex: 1}}>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.title}>Xác nhận thông tin</Text>
                    <Text style={styles.subtitle}>Vui lòng xác nhận lại thông tin một lần nữa. Nếu có sai sót, vui lòng quay lại và nhập đúng thông tin</Text>
                </View>
                <Text style={[styles.subtitle, {fontWeight: '700'}]}>Thông tin cá nhân</Text>
                <View style={{marginHorizontal: 20, marginTop: 10}}>
                    <CustomInput label = 'Tên' value='Lê Anh Tuấn' readOnly={true}/>
                    <CustomInput label = 'CMND' value='123456789' readOnly={true}/>
                    <CustomInput label = 'Tỉnh/TP' value='TP.HCM' readOnly={true}/>
                    <CustomInput label = 'Quận/Huyện' value='Thủ Đức' readOnly={true}/>
                    <CustomInput label = 'Phường/Xã' value='Linh Trung' readOnly={true}/>
                </View>
                <Text style={[styles.subtitle, {fontWeight: '700'}]}>Thông tin đăng nhập</Text>
                <View style={{marginHorizontal: 20, marginTop: 10}}>
                    <CustomInput label = 'Tên đăng nhập' value='Tuanle207' readOnly={true}/>
                    <CustomInput label = 'Email đăng nhập' value='18521597@gm.uit.edu.vn' readOnly={true}/>
                </View>
                <Text style={[styles.subtitle, {fontWeight: '700'}]}>Thông tin đăng ký dịch vụ</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginHorizontal: 20}}>
                    <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}} isChecked={true} disabled={true}/>
                    <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>Mở tài khoản</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginHorizontal: 20}}>
                    <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}} isChecked={true} disabled={true}/>
                    <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>SMS banking</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginHorizontal: 20}}>
                    <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}} isChecked={true} disabled={true}/>
                    <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>EBanking ngân hàng điện tử</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTPConfirm')}>
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
    subtitle: {
        color: '#fff',
        marginHorizontal: 20, marginTop: 10, marginBottom: 20
    },
    button: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    }
});