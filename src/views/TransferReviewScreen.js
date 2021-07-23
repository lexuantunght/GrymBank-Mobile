import React from 'react';
import {
    View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function TransferReviewScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Xác nhận chuyển tiền' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.heading}>Xác nhận thông tin chuyển tiền</Text>
                    {/* Thông tin người chuyển */}
                    <View style={styles.info}>
                        <Text style={styles.title}>Thông tin người chuyển</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Tài khoản nguồn: </Text>
                            <Text style={styles.textInf}>2153265425</Text>
                        </View> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Họ tên người gửi: </Text>
                            <Text style={styles.textInf}>Nguyễn Thanh Tuấn</Text>
                        </View> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Số dư tài khoản: </Text>
                            <Text style={styles.textInf}>8.000.000 VND</Text>
                        </View>
                    </View>
                    {/* Thông tin người hưởng */}
                    <View style={styles.info}>
                        <Text style={styles.title}>Thông tin người hưởng</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> NH TK thụ hưởng: </Text>
                            <Text style={styles.textInf}>Vietcombank</Text>
                        </View>  
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> TK thụ hưởng: </Text>
                            <Text style={styles.textInf}>21536589438</Text>
                        </View> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Tên người hưởng: </Text>
                            <Text style={styles.textInf}>Nguyễn A</Text>
                        </View>
                    </View>
                    {/* Thông tin giao dịch */}
                    <View style={styles.info}>
                        <Text style={styles.title}>Thông tin giao dịch</Text> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Ngày giao dịch: </Text>
                            <Text style={styles.textInf}>10/07/2021</Text>
                        </View>  
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Số tiền: </Text>
                            <Text style={styles.textInf}>5.000.000 VND</Text>
                        </View> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Số tiền bằng chữ: </Text>
                            <Text style={styles.textInf}>Năm triệu đồng chẵn</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={{ color: '#fff', fontSize: 16, paddingTop: 4}}> Nội dung giao dịch: </Text>
                            <Text style={styles.note}> Nguyễn Thanh Tuấn chuyển tiền</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Phí giao dịch: </Text>
                            <Text style={styles.textInf}>11.100 VND</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> SĐT: </Text>
                            <Text style={styles.textInf}>0375475***</Text>
                        </View>           
                        <Text style={{color: '#fff', paddingTop: 16, paddingBottom: 16}}>Mã giao dịch (OTP) đã được gởi đến số điện thoại của quý khách!</Text>    
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                        <Text style={styles.text}> Mã OTP:  </Text>
                        <TextInput style={styles.inputOTP}/>
                    </View>                
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransferDone')}>
                        <Text style={styles.title}>Xác nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransferInput')}>
                        <Text style={styles.title}>Quay lại</Text>
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
        fontSize: 16, fontWeight: '700', color: '#fff',
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