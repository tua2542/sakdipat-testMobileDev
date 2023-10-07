import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageScreen } from './src/language/LanguageScreen';
import { ConditionScreen } from './src/condition/CondtionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SecondStyles} from './src/components/ScreenStyle';
import { AuthenticationScreen } from './src/authentication/AuthenticationScreen';
import { OTPScreen } from './src/OTP/OTPScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false}} name="Language" component={LanguageScreen} />
                    <Stack.Screen options={{
                        headerTitle : (props) => <View style = {SecondStyles.headTitle}/>,
                    }} name="Condition" component={ConditionScreen} />
                    <Stack.Screen  name="Authentication" component={AuthenticationScreen} />
                    <Stack.Screen   name="OTP" component={OTPScreen} />


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