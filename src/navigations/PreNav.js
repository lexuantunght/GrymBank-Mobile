import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import config from '../configs/config';
import { FirstSignupScreen } from '../views/FirstSignupScreen';
import { LoginScreen } from '../views/LoginScreen';
import { FaceLoginScreen } from '../views/FaceLoginScreen';
import { SecondSignupScreen } from '../views/SecondSignupScreen';
import { ThirdSignupScreen } from '../views/ThirdSignupScreen';
import { FrontCardScreen } from '../views/FrontCardScreen';
import { BackCardScreen } from '../views/BackCardScreen';
import { ConfirmCardScreen } from '../views/ConfirmCardScreen';
import { ConfirmFaceScreen } from '../views/ConfirmFaceScreen';
import { LoginInfoScreen } from '../views/LoginInfoScreen';
import { ServiceInfoScreen } from '../views/ServiceInfoScreen';
import { BranchConfirmScreen } from '../views/BranchConfirmScreen';
import { TotalConfirmScreen } from '../views/TotalConfirmScreen';
import { OTPConfirmScreen } from '../views/OTPConfirmScreen';
import { SuccessRegisterScreen } from '../views/SuccessRegisterScreen';

const Stacks = createStackNavigator();

export function PreNav({onLoginSuccess}) {
    return(
        <Stacks.Navigator screenOptions = {{
            headerStyle: {
                backgroundColor: config.primary,
            },
            headerTintColor: '#fff',
            headerShown: false
        }}>
            <Stacks.Screen name='Login'>
                {({navigation}) => <LoginScreen navigation={navigation} onLoginSuccess={onLoginSuccess}/>}
            </Stacks.Screen>
            <Stacks.Screen name='FaceLogin'>
                {({navigation}) => <FaceLoginScreen navigation={navigation} onLoginSuccess={onLoginSuccess}/>}
            </Stacks.Screen>
            <Stacks.Screen name='FirstSignup' component={ FirstSignupScreen }/>
            <Stacks.Screen name='SecondSignup' component={ SecondSignupScreen }/>
            <Stacks.Screen name='ThirdSignup' component={ ThirdSignupScreen }/>
            <Stacks.Screen name='FrontCard' component={ FrontCardScreen }/>
            <Stacks.Screen name='BackCard' component={ BackCardScreen }/>
            <Stacks.Screen name='ConfirmCard' component={ ConfirmCardScreen }/>
            <Stacks.Screen name='ConfirmFace' component={ ConfirmFaceScreen }/>
            <Stacks.Screen name='LoginInfo' component={ LoginInfoScreen }/>
            <Stacks.Screen name='ServiceInfo' component={ ServiceInfoScreen }/>
            <Stacks.Screen name='BranchConfirm' component={ BranchConfirmScreen }/>
            <Stacks.Screen name='TotalConfirm' component={ TotalConfirmScreen }/>
            <Stacks.Screen name='OTPConfirm' component={ OTPConfirmScreen }/>
            <Stacks.Screen name='SuccessRegister' component={ SuccessRegisterScreen }/>
        </Stacks.Navigator>
    )
}