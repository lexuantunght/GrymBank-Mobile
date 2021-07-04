import React from 'react';
import {
    View, Text, Image, SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import config from '../configs/config';

export function CustomHeader({title = '', subTitle = '', showRightButton = true, showLeftButton = true, onRightClick, onLeftClick}) {
    return(
        <View style={{backgroundColor: config.primary}}>
            <SafeAreaView style={styles.header}>
                {showLeftButton ?
                <TouchableOpacity style={styles.headerButton} onPress={onLeftClick}>
                    <Image source={require('../assets/icons/left-arrow.png')} style={[styles.icon, { marginLeft: 5 }]} resizeMode='contain'/>
                    <Text style={[styles.text]}>Back</Text>
                </TouchableOpacity> : null}
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={styles.text}>{title}</Text>
                    {subTitle != '' ? <Text style={styles.subtitle}>{subTitle}</Text> : null}
                </View>
                {showRightButton ?
                <TouchableOpacity style={styles.headerButton} onPress={onRightClick}>
                    <Text style={[styles.text]}>Home</Text>
                    <Image source={require('../assets/icons/home.png')} style={[styles.icon, {marginLeft: 6, marginRight: 5}]} resizeMode='contain'/>
                </TouchableOpacity> : null}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 64, backgroundColor: config.primary,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    headerButton: {
        flexDirection: 'row', alignItems: 'center'
    },
    text: {
        color: '#fff', fontSize: 17
    },
    subtitle: {
        color: '#fff', fontSize: 13
    },
    icon: {
        width: 22, height: 22, tintColor: '#fff'
    }
});