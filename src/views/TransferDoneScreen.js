import React from 'react';
import {
    View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function TransferDoneScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Thông báo' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color: '#fff',
                        marginHorizontal: 10, marginTop: 40, paddingBottom:10, 
                        alignSelf: 'center',}} >
                        Thành công!
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '500', color: '#fff',
                        marginHorizontal: 10, marginTop: 10, 
                        paddingBottom:10, alignSelf: 'center',}} >            
                        GIAO DỊCH THÀNH CÔNG
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                        marginHorizontal: 10, marginTop: 30, 
                        alignSelf: 'center',}} >            
                        Quý khách đã thực hiện chuyển
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                        marginHorizontal: 10, marginTop: 4, 
                        alignSelf: 'center',}} >            
                        thành công
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#fff',
                        marginHorizontal: 10, marginTop: 4, 
                        alignSelf: 'center',}} >            
                        5.000.000 VND cho Nguyen Van A
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                        marginHorizontal: 10, marginTop: 4, 
                        alignSelf: 'center',}} >            
                        số tài khoản
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#fff',
                        marginHorizontal: 10, marginTop: 4, 
                        paddingBottom: 40, alignSelf: 'center',}} >            
                        21536589438
                    </Text>
                                        
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransferInput')}>
                        <Text style={styles.title}>Tiếp tục giao dịch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transfer')}>
                        <Text style={styles.title}>Quay lại màn hình chính</Text>
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
    heading: {
        fontSize: 20, fontWeight: '500', color: '#fff',
        marginHorizontal: 20, marginTop: 20, paddingBottom:20, alignSelf: 'center',
    },
    title: {
        fontSize: 16, fontWeight: '700', color: '#fff'
    },
    info: {
        backgroundColor: config.primary, padding: 16, marginHorizontal: 20,
        borderRadius: 15, marginVertical: 10, paddingBottom: 24,
    },
    textInf: {
        fontSize: 16,
        alignItems: 'flex-end',
        padding: 4, 
        color: '#fff'
    },
    text: {
        color: '#fff', fontSize: 16, textAlign: 'center', justifyContent: 'center', 
        alignItems: 'center', alignSelf: 'center',
    },
    note: {
        fontSize: 16, direction: 'rtl', alignContent: 'flex-end', 
        padding: 4, color: '#fff', flex: 1, flexWrap: 'wrap'
    },
    inputOTP: {
        backgroundColor: '#fff', borderRadius: 16, fontSize: 16,
        textAlign: 'center', justifyContent: 'center', alignItems: 'center',
        height: 40, marginLeft: 20, flex: 1
    },
    button: {
        padding: 4, borderRadius: 15, height: 48, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 1.2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 10
    }
})