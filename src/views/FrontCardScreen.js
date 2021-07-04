import React from 'react';
import {
    View, StyleSheet, SafeAreaView, Text, Dimensions, TouchableOpacity, Image
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function FrontCardScreen({navigation}) {
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
            <CustomHeader onLeftClick={() => navigation.goBack()} showRightButton={false}/>
            <SafeAreaView style={styles.container}>
                <View style={{alignItems: 'center', marginBottom: 40}}>
                    <Text style={styles.title}>Mặt trước</Text>
                    <Text style={{fontSize: 17, fontWeight: '700', color: '#fff'}}>CMND/CCCD</Text>
                </View>
                <View style={{height: Dimensions.get('screen').height * 2 / 5}}>
                    {!photoUri ? 
                    <RNCamera
                        ref={camera}
                        style={{flex: 1}}
                        type={RNCamera.Constants.Type.back}
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
                <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '700', color: '#fff', marginTop: 10}}>MẶT TRƯỚC</Text>
                <Text style={[styles.subtitle]}>Đặt mặt trước CMND vào khung hình và ấn chụp để tiếp tục</Text>
                {!photoUri ? 
                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Chụp</Text>
                </TouchableOpacity>
                :
                <View style={{flexDirection: 'row', width: Dimensions.get('screen').width - 80, alignSelf: 'center', marginVertical: 20}}>
                    <TouchableOpacity style={styles.retake} onPress={() => setPhotoUri(null)}>
                        <Text style={{fontWeight: '700'}}>Chụp lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.next} onPress={() => navigation.navigate('BackCard')}>
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
        marginHorizontal: 40, marginTop: 20, marginBottom: 20
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
})