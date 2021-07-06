import React from 'react';
import {
    View, Text, StyleSheet, SafeAreaView,TextInput, Image, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import { CustomHeader } from '../components/CustomHeader';
import config from '../configs/config';

var radio_props = [
    {label: 'Chuyển đến tài khoản ngân hàng', value: 0 },
    {label: 'Chuyển đến thẻ ATM', value: 1 }
  ];
export function TransferMethodScreen({navigation}) {
    return(
        <View style={styles.container}>
            <CustomHeader title='Chọn phương thức chuyển tiền' onLeftClick={() => navigation.goBack()} onRightClick={() => navigation.popToTop()}/>
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
    method: {
        backgroundColor: config.primary, padding: 20, paddingLeft: 36, marginHorizontal: 16,
        borderRadius: 15, marginVertical: 10,
    },
    button: {
        padding: 10, borderRadius: 15, height: 60, backgroundColor: config.tintColor,
        width: Dimensions.get('screen').width / 1.2, alignSelf: 'center',
        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20
    }
})