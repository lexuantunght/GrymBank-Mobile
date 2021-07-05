import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { CustomDropdown } from '../components/CustomDropdown';
import config from '../configs/config';

const provinces = [
    {
        value: 1,
        label: 'Hà Nội'
    },
    {
        value: 2,
        label: 'TP.HCM'
    },
    {
        value: 3,
        label: 'Đà Nẵng'
    },
    {
        value: '4',
        label: 'Quảng Bình'
    }
];

const branches = [
    {
        value: 1,
        label: 'Chi nhánh A'
    },
    {
        value: 2,
        label: 'Chi nhánh B'
    },
    {
        value: 3,
        label: 'Chi nhánh C'
    }
];

export function BranchConfirmScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='5/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container, {justifyContent: 'space-between'}]}>
                <View>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Chi nhánh xác thực thông tin</Text>
                    <Text style={styles.subtitle}>Bạn cần ra chi nhánh gần nhất xác thực thông tin, để tài khoản được mở một cách hoàn chỉnh.</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                    <CustomDropdown label='Tỉnh/thành phố' data={provinces}/>
                    <CustomDropdown label='Chi nhánh' data={branches}/>
                </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TotalConfirm')}>
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