import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import config from '../configs/config';

export function CustomDropdown({label = '', data = []}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(null);
    return(
        <View style={{marginBottom: 20}}>
            <View style={styles.container}>
                <Text style={{fontSize: 14, color: '#c4c4c4', marginHorizontal: 15}}>{label}</Text>
            </View>
            <DropDownPicker open={isOpen} setOpen={setIsOpen} items={data} placeholder={'Chọn ' + label}
                value={selectedValue} setValue={setSelectedValue}
                itemStyle = {{justifyContent: 'flex-start'}} 
                style = {[styles.border]}
                dropDownContainerStyle = {[{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderColor: '#fff'}]}
                listMode='MODAL'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingTop: 10,
        flexDirection: 'column'
    },
    border: {
        borderTopLeftRadius: 0, borderTopRightRadius: 0,
        borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
        borderColor: '#fff', paddingLeft: 15
    }
});