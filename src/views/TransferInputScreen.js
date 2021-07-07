import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Picker, TextInput, Image, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import config from '../configs/config';

export function TransferInputScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Chuyển tiền' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>   
                <ScrollView style={{flex: 1}}>  
                    {/* Tài khoản nguồn         */}
                    <View style={styles.info}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Tài khoản nguồn: </Text>                        
                            <View style={{ borderRadius: 16, borderWidth: 0, overflow: "hidden", 
                                width: 180, height:40, backgroundColor: "#FFF",
                                textAlign: 'center', justifyContent: 'center', paddingLeft: 12 }}> 
                                <Picker
                                    mode="dropdown"
                                    onValueChange = {() => {}}
                                >
                                    <Picker.Item label="2181127" />
                                    <Picker.Item label="2153265425" />
                                </Picker>
                            </View>                        
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Họ tên người gửi: </Text>
                            <Text style={styles.textInf}>Nguyễn Thanh Tuấn</Text>
                        </View>     
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Số dư khả dụng:  </Text>
                            <Text style={styles.textInf}>8.000.000 VND</Text>
                        </View>               
                    </View>
                    {/* Tài khoản nhận */}
                    <View style={styles.info}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16}}> 
                            <Text style={styles.text}> NH TK thụ hưởng: </Text>
                            <View style={{ borderRadius: 16, borderWidth: 0, overflow: "hidden", 
                                width: 180, height:40, backgroundColor: "#FFF",
                                textAlign: 'center', justifyContent: 'center', paddingLeft: 12 }}> 
                                <Picker
                                    mode="dropdown"
                                    onValueChange = {() => {}}
                                >
                                <Picker.Item label="Vietcombank"/>
                                <Picker.Item label="GrympBank" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16}}> 
                            <Text style={styles.text}> TK thụ hưởng: </Text>
                            <TextInput style={styles.input}/>
                        </View>     
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 16}}> 
                            <Text style={styles.text}> Tên người hưởng:  </Text>
                            <TextInput style={{backgroundColor: '#fff', borderRadius: 16, fontSize: 16,
                                textAlign: 'center', justifyContent: 'center', alignItems: 'center',
                                height: 40, marginLeft: 12, width: 180}}
                            />
                        </View>               
                    </View>
                    {/* Số tiền và nội dung */}
                    <View style={styles.info}>                    
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16}}> 
                            <Text style={styles.text}> Số tiền: </Text>
                            <TextInput style={styles.input} placeholder='VND'  placeholderTextColor='#c4c4c4'/>
                        </View>     
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.text}> Nội dung:  </Text>
                            <TextInput style={styles.input}/>
                        </View>               
                    </View>
                    <View style={styles.saveInfo}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
                            <BouncyCheckbox disableText={true} size = {20} textStyle={{color: '#fff'}} unfillColor='transparent' fillColor='transparent'
                            iconStyle={{borderColor: '#fff', borderRadius: 0 }}/>
                            <Text style={styles.textSave} >Lưu thông tin người nhận</Text>
                        </View>             
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransferReview')}>
                        <Text style={styles.title}>Xác nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransferMethod')}>
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
    title: {
        fontSize: 17, fontWeight: '700', color: '#fff',
    },
    info: {
        backgroundColor: config.primary, padding: 12, marginHorizontal: 16,
        borderRadius: 15, marginVertical: 10,
    },
    text: {
        color: '#fff', fontSize: 16, textAlign: 'center', justifyContent: 'center', 
        alignItems: 'center', alignSelf: 'center',
    },
    input: {
        backgroundColor: '#fff', borderRadius: 16, fontSize: 16,
        textAlign: 'center', justifyContent: 'center', alignItems: 'center',
        height: 40, marginLeft: 16, width: 180
    },
    card: {
        backgroundColor: config.backColor,
        marginLeft: 20, marginBottom: 16,
        flexDirection: 'row',
        padding: 16, borderRadius: 8,
    },
    image: {
        justifyContent: 'center', 
        alignItems: 'center', alignSelf: 'center',
    },
    textInf: {
        fontSize: 16,
        alignItems: 'flex-end',
        padding: 4, 
        color: '#fff'
    },
    saveInfo: {
        alignItems: 'flex-end', paddingRight: 16, paddingTop: 4
    },
    textSave: {
        color: '#fff', fontSize: 16, textAlign: 'center', justifyContent: 'center', 
            alignItems: 'center', alignSelf: 'center', fontStyle: 'italic', marginLeft: 8,
    },
    button: {
        padding: 4, borderRadius: 15, height: 48, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 1.2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 10
    }
})