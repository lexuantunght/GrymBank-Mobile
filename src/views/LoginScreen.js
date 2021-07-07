import React from 'react';
import { 
    View, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView,
    StyleSheet, Image
} from 'react-native';
import config from '../configs/config';

export function LoginScreen({navigation, onLoginSuccess}) {
    return(
        <View style = {styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex: 1}}>  
                    <View style={styles.main}>
                        <Image source={require('../assets/imgs/grymp.png')} style={styles.logo} resizeMode='contain'/>
                        <Text style={[styles.text, {alignSelf: 'center'}]}>Xin chào,</Text>
                        <Text style={[styles.text, {alignSelf: 'center'}]}>LÊ ANH TUẤN</Text>
                        <Text style={[styles.text, {marginVertical: 20}]}>Mật khẩu</Text>
                        <TextInput style={styles.input} secureTextEntry={true} placeholder='Nhập mật khẩu' placeholderTextColor='#c4c4c4'/>
                        <View style={{flexDirection: 'row', marginBottom: 30}}>
                            <TouchableOpacity style={styles.btnlogin} onPress={onLoginSuccess}>
                                <Text style={[styles.text, {fontWeight: '700'}]} >
                                    Đăng nhập
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnface} onPress={() => navigation.navigate('FaceLogin')}>
                                <Image source={require('../assets/icons/face.png')}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.btntext}>
                            <Text style={styles.text}>QUÊN MẬT KHẨU?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btntext}>
                            <Text style={styles.text}>ĐĂNG NHẬP BẰNG TÀI KHOẢN KHÁC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btntext} onPress={() => navigation.navigate('FirstSignup')}>
                            <Text style={styles.text}>TẠO TÀI KHOẢN MỚI</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/icons/location.png')} style={{marginRight: 5}}/>
                            <Text style={styles.text}>Tìm kiếm chi nhánh gần đây</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: config.secondary
    },
    main: {
        backgroundColor: config.primary, borderRadius: 15,
        marginHorizontal: 20, flex: 1, marginTop: 40, marginBottom: 60,
        padding: 20
    },
    logo: {
        width: 100, height: 100, alignSelf: 'center'
    },
    text: {
        color: '#fff', fontSize: 16
    },
    input: {
        backgroundColor: '#fff', borderRadius: 15, fontSize: 16,
        textAlign: 'center', height: 46
    },
    btnlogin: {
        backgroundColor: config.tintColor,
        padding: 10, flex: 1, height: 46, justifyContent: 'center', alignItems: 'center',
        borderRadius: 15, marginTop: 20
    },
    btnface: {
        backgroundColor: config.tintColor, width: 46, height: 46, marginTop: 20,
        borderRadius: 50, marginLeft: 20, justifyContent: 'center', alignItems: 'center'
    },
    btntext: {
        marginVertical: 10
    },
    footer: {
        backgroundColor: config.primary, height: 36, justifyContent: 'center',
        alignItems: 'center'
    }
})