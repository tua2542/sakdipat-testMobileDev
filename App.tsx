import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageScreen } from './src/language/LanguageScreen';
import { ConditionScreen } from './src/condition/CondtionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SecondStyles } from './src/components/screenstyle/CondScreenStyle';
import { AuthenticationScreen } from './src/authentication/AuthenticationScreen';
import { OTPScreen } from './src/OTP/OTPScreen';
import { VerifyScreen } from './src/verify/VerifyScreen';
import { PinCodeScreen } from './src/pincode/PinCodeScreen';
import { PinCodeScreenConfirm } from './src/pincode/PinCodeScreenComfirm';
import { FPWScreen } from './src/forgotpassword/FPWScreen';
import { FPWScreenS } from './src/forgotpassword/FPWScreenS';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Language" component={LanguageScreen} />
                <Stack.Screen options={{
                    headerTitle: (props) => <View style={SecondStyles.headTitle} />,
                }} name="Condition" component={ConditionScreen} />
                <Stack.Screen name="Authentication" component={AuthenticationScreen} />
                <Stack.Screen name="OTP" component={OTPScreen} />
                <Stack.Screen name="Verify" component={VerifyScreen} />
                <Stack.Screen name="Pincode" component={PinCodeScreen} />
                <Stack.Screen name="PincodeConfirm" component={PinCodeScreenConfirm} />
                <Stack.Screen name="FPW" component={FPWScreen} />
                <Stack.Screen name="FPWS" component={FPWScreenS} />


            </Stack.Navigator>
        </NavigationContainer>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },

});
export default App;