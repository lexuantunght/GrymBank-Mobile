import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import config from '../configs/config';
import { TransferScreen } from '../views/TransferScreen';
import {TransferMethodScreen} from '../views/TransferMethodScreen';
const Stacks = createStackNavigator();

export function AppNav() {
    return(
        <Stacks.Navigator screenOptions = {{
            headerStyle: {
                backgroundColor: config.primary,
            },
            headerTintColor: '#fff',
            headerShown: false
        }}>
            <Stacks.Screen name='Transfer' component = {TransferScreen}/>
            <Stacks.Screen name = 'TransferMethod' component = { TransferMethodScreen }/>
        </Stacks.Navigator>
    )
}