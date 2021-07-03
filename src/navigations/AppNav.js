import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import config from '../configs/config';
import { TransferScreen } from '../views/TransferScreen';
const Stacks = createStackNavigator();

export function AppNav() {
    return(
        <Stacks.Navigator screenOptions = {{
            headerStyle: {
                backgroundColor: config.primary,
            },
            headerTintColor: '#fff'
        }}>
            <Stacks.Screen name = 'Transfer' component = { TransferScreen } options = {{title: 'Chuyển tiền'}}/>
        </Stacks.Navigator>
    )
}