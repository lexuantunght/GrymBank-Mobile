import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function ServiceInfoScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='4/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={[styles.container, {justifyContent: 'space-between'}]}>
                <View>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Thông tin đăng ký dịch vụ</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                        <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}}/>
                        <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>Mở tài khoản</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                        <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}}/>
                        <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>SMS banking</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                        <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}}/>
                        <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>EBanking ngân hàng điện tử</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                        <BouncyCheckbox disableText={true} textStyle={{color: '#fff'}} unfillColor='#fff' fillColor='transparent'
                        iconStyle={{borderColor: '#fff', borderRadius: 0}}/>
                        <Text style={{color: '#fff', marginLeft: 15, fontSize: 16}}>Thẻ ATM Active ...</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Các dịch vụ trên sẽ được tự động đăng kí sau khi tài khoản được mở thành công, bạn cũng sẻ phải chịu phì duy trì theo quy định của từng dịch vụ, </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BranchConfirm')}>
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
        marginHorizontal: 20, marginTop: 20, marginBottom: 20
    },
    subtitle: {
        color: '#fff',
        marginHorizontal: 20, marginTop: 40
    },
    button: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    }
});