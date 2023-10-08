import React from 'react';
import { View, SafeAreaView, Text, Alert } from 'react-native';
import { SixthStyles } from '../components/screenstyle/PinScreenStyle';


const TextSeparator = () => <View style={SixthStyles.textSeparator} />;

export function PinCodeScreenConfirm({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={SixthStyles.container}>
            <View>
                <Text style={SixthStyles.textTwo}>
                    ยืนยันรหัส PIN CODE {"\n\n"}
                </Text>
                <TextSeparator />
            </View>
        </SafeAreaView>



    );

}