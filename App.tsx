import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageScreen } from './src/language/LanguageScreen';
import { ConditionScreen } from './src/condition/CondtionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondStyles} from './src/components/ScreenStyle';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {

    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false}} name="Language" component={LanguageScreen} />
                    <Stack.Screen options={{
                        headerTitle : (props) => <View style = {SecondStyles.headTitle}/>,
                    }} name="Condition" component={ConditionScreen} />
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