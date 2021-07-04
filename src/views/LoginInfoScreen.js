import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { CustomInput } from '../components/CustomInput';
import config from '../configs/config';

export function LoginInfoScreen() {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='4/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container, {justifyContent: 'space-between'}]}>
                <View>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Thông tin đăng nhập</Text>
                    <Text style={styles.subtitle}>Vui lòng nhập thông tin dùng để đăng nhập</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                    <CustomInput label = 'Tên đăng nhập'/>
                    <CustomInput label = 'Email đăng nhập'/>
                </View>
                </View>
                <TouchableOpacity style={styles.button}>
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
    }
});