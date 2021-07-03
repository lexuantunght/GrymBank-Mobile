import React from 'react';
import {
    View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function ThirdSignupScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='2/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Thông tin cá nhân</Text>
                    <Text style={styles.subtitle}>Vui lòng chọn 1 trong 2 giấy giờ dưới đây:</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FrontCard')}>
                    <Image source={require('../assets/icons/card.png')} style={{marginHorizontal: 20}}/>
                    <Text style={{fontWeight: '700', fontSize: 17}}>CMND/CCCD</Text>
                </TouchableOpacity>
                <Text style={{color: '#fff', textAlign: 'center', marginVertical: 10}}>hoặc</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/icons/passport.png')} style={{marginHorizontal: 20}}/>
                    <Text style={{fontWeight: '700', fontSize: 17}}>Hộ chiếu</Text>
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
        backgroundColor: '#fff', borderRadius: 15, height: 72,
        marginHorizontal: 20, padding: 10, flexDirection: 'row', alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})