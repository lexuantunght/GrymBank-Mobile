import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { RNCamera } from 'react-native-camera';
import config from '../configs/config';

export function ConfirmFaceScreen({navigation}) {
    const camera = React.useRef();
    const [photoUri, setPhotoUri] = React.useState(null);
    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: false };
            const data = await camera.current.takePictureAsync(options);
            setPhotoUri(data.uri);
        }
    };
    return(
        <View style={styles.container}>
            <CustomHeader title='Tạo tài khoản' subTitle='2/7' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
            <SafeAreaView style={styles.container}>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.title}>Xác nhận khuôn mặt</Text>
                    <Text style={styles.subtitle}>Vui lòng nhìn thẳng chính diện vào camera</Text>
                </View>
                <View style={{height: Dimensions.get('screen').height * 2 / 5, width: Dimensions.get('screen').height * 2 / 5, alignSelf: 'center', borderRadius: Dimensions.get('screen').height / 5, overflow: 'hidden'}}>
                    {!photoUri ? 
                    <RNCamera
                        ref={camera}
                        style={{flex: 1}}
                        type={RNCamera.Constants.Type.front}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                    />
                    :
                    <Image source={{uri: photoUri}} style={{flex: 1}} resizeMode='contain'/>}
                </View>
                <View style={{marginVertical: 20}}/>
                {!photoUri ? 
                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Chụp</Text>
                </TouchableOpacity>
                :
                <View style={{flexDirection: 'row', width: Dimensions.get('screen').width - 80, alignSelf: 'center', marginVertical: 20}}>
                    <TouchableOpacity style={styles.retake} onPress={() => setPhotoUri(null)}>
                        <Text style={{fontWeight: '700'}}>Chụp lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.next} onPress={() => navigation.navigate('LoginInfo')}>
                        <Text style={{fontWeight: '700', color: '#fff'}}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
                }
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
    },
    retake: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: '#fff',
        justifyContent: 'center', alignItems: 'center', flex: 2, marginRight: 10
    },
    next: {
        padding: 10, borderRadius: 15, height: 46, backgroundColor: config.tintColor,
        justifyContent: 'center', alignItems: 'center', flex: 3
    }
});