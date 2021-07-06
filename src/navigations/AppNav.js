import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import config from '../configs/config';
import { TransferScreen } from '../views/TransferScreen';
import {TransferMethodScreen} from '../views/TransferMethodScreen';
import {TransferInputScreen} from '../views/TransferInputScreen';
import {TransferReviewScreen} from '../views/TransferReviewScreen';
import {TransferDoneScreen} from '../views/TransferDoneScreen';
import {TransferInputAvailableScreen} from '../views/TransferInputAvailableScreen';
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
            <Stacks.Screen name = 'TransferInput' component = { TransferInputScreen }/>
            <Stacks.Screen name = 'TransferInputAvailable' component = { TransferInputAvailableScreen }/>
            <Stacks.Screen name = 'TransferReview' component = { TransferReviewScreen }/>
            <Stacks.Screen name = 'TransferDone' component = { TransferDoneScreen }/>
        </Stacks.Navigator>
    )
}