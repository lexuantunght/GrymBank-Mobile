import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { CustomInput } from '../components/CustomInput';
import config from '../configs/config';

export function ConfirmCardScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='2/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <View>
                        <Text style={styles.title}>Thông tin cá nhân</Text>
                        <Text style={styles.subtitle}>Vui lòng chọn xác nhận thông tin cá nhân</Text>
                    </View>
                    <View style={{marginHorizontal: 20}}>
                        <CustomInput label = 'Tên' readOnly = {true} value='Lê Anh Tuấn'/>
                        <CustomInput label = 'CMND' readOnly = {true} value='123456789'/>
                        <CustomInput label = 'Ngày cấp' readOnly = {true} value='01/07/2016'/>
                        <CustomInput label = 'Tỉnh/thành phố' readOnly = {true} value='Thanh Hoá'/>
                        <CustomInput label = 'Quận/huyện' readOnly = {true} value='Bố Trạch'/>
                        <CustomInput label = 'Phường/xã' readOnly = {true} value='Hoà Trạch'/>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfirmFace')}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>Xác nhận</Text>
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