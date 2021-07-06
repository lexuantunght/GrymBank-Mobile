import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView,TextInput, Image, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

export function TransferScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Chuyển tiền' showLeftButton={false} showRightButton={false}/>
            <SafeAreaView style={styles.container}>               
                <View style={styles.note}>
                    <Text style={styles.title}>Danh sách thụ hưởng đã lưu</Text>
                    <View style={{flexDirection: 'row', paddingTop: 16, paddingBottom: 16}}> 
                        <Text style={styles.text}> Tìm kiếm: </Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.card}> 
                        <Image style={styles.image} source={require('../assets/icons/face.png')}/>
                        <View style={{direction: 'ltr', flex: 1, alignItems: 'flex-end'}} >
                            <Text style={styles.textInf}>Nguyễn Văn A</Text>
                            <Text style={styles.textInf}>325623156315</Text>
                        </View>
                    </View>       
                    <View style={styles.card}> 
                        <Image style={styles.image} source={require('../assets/icons/face.png')}/>
                        <View style={{direction: 'ltr', flex: 1, alignItems: 'flex-end'}} >
                            <Text style={styles.textInf}>Nguyễn Văn B</Text>
                            <Text style={styles.textInf}>325623156315</Text>
                        </View>
                    </View>                    
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransferMethod')}>
                    <Text style={styles.title}>Người thụ hưởng mới</Text>
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
    },
    note: {
        backgroundColor: config.primary, padding: 20, paddingTop: 12, marginHorizontal: 16,
        borderRadius: 15, marginVertical: 10,
    },
    text: {
        color: '#fff', fontSize: 18, textAlign: 'center', justifyContent: 'center', 
        alignItems: 'center', alignSelf: 'center',
    },
    input: {
        backgroundColor: '#fff', borderRadius: 16, fontSize: 16,
        textAlign: 'center', justifyContent: 'center', alignItems: 'center',
        flex: 1, height: 40, marginLeft: 16
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
    },
    button: {
        padding: 10, borderRadius: 15, height: 60, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 1.2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    }
})