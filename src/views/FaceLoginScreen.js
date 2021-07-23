import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import { RNCamera } from 'react-native-camera';
import config from '../configs/config';

export function FaceLoginScreen({navigation, onLoginSuccess}) {
    const camera = React.useRef();
    const [photoUri, setPhotoUri] = React.useState(null);
    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: false };
            const data = await camera.current.takePictureAsync(options);
            setPhotoUri(data.uri);
        }
    };
    React.useEffect(() => {
      setTimeout(() => {
          takePicture();
      }, 3000);
    }, []);

    useEffect(() => {
    setTimeout(() => {
        onLoginSuccess();
    }, 6000);
    }, []);
    return(
        <View style={styles.container}>
            <CustomHeader title='Xác thực bằng khuôn mặt' onLeftClick={() => navigation.goBack()} showRightButton={false} />
            <SafeAreaView style={styles.container}> 
                <ScrollView style={{flex: 1}}> 
                    <View style={styles.info}>
                        <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                            marginHorizontal: 10, marginTop: 30, 
                            alignSelf: 'center',}} >            
                            Vui lòng nhìn thẳng camera để
                        </Text>
                        <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                            marginHorizontal: 10, marginBottom: 30,
                            alignSelf: 'center',}} >            
                            xác thực khuôn mặt của bạn
                        </Text>
                        <View style={styles.cam}>
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
                            <Image source={{uri: photoUri}} style={{flex: 1}} />}
                        </View>
                        <View style={{marginVertical: 20}}/>
                        {!photoUri ? 
                            <View>

                            </View>
                            :
                            <View >
                                <Image source={{uri: photoUri}} style={{flex: 1}}/>
                                <Text style={{fontSize: 18, fontWeight: '500', color: '#fff',
                                    marginHorizontal: 10, marginBottom: 30, 
                                    alignSelf: 'center',}} >            
                                    Xác thực thành công!
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                                    marginHorizontal: 10, 
                                    alignSelf: 'center',}} >            
                                    Bạn sẽ được tự động chuyển
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: '500', color: '#fff',
                                    marginHorizontal: 10,
                                    alignSelf: 'center',}} >            
                                    sang màn hình trang chủ!
                                </Text>
                            </View>                    
                        }
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
    heading: {
        fontSize: 20, fontWeight: '500', color: '#fff',
        marginHorizontal: 20, marginTop: 20, paddingBottom:20, alignSelf: 'center',
    },
    title: {
        fontSize: 16, fontWeight: '700', color: '#fff', paddingBottom: 8,
    },
    info: {
        backgroundColor: config.primary, padding: 16, marginHorizontal: 20,
        borderRadius: 15, marginVertical: 10, paddingBottom: 24,
    },
    cam: {
        height: Dimensions.get('screen').height * 2 / 6, 
        width: Dimensions.get('screen').height * 2 / 6, 
        alignSelf: 'center', borderRadius: Dimensions.get('screen').height / 6, 
        overflow: 'hidden'
    },
    image: {
        justifyContent: 'center', 
        alignItems: 'center', alignSelf: 'center',
    }
})