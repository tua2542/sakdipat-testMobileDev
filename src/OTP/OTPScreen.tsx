import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { ForthStyles, } from '../components/screenstyle/OTPScreenStyle';
import { Button } from '../components/Buttons';

const ButtonSeparator = () => <View style={ForthStyles.separator} />;
const TextSeparator = () => <View style={ForthStyles.textSeparator} />;




export function OTPScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={ForthStyles.container}>
            <View>
            <Text style={ForthStyles.textEmoji}>☎️</Text>
            <Text style={ForthStyles.text}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
            <Text style={ForthStyles.textPhNumber}>082-XXX-8998</Text>
            <ButtonSeparator />
                <Button
                    text="ขอรหัส OTP"
                    onPress={() => navigation.push('Verify', {screen:"VerifyScreen"})}
                />
            <TextSeparator />
            <Text style={ForthStyles.subText}> กรณีเบอร์โทรศัพท์ถูกต้องติดต่อเบอร์ 02-XXX-XXXX</Text>
            </View>
        </SafeAreaView>



    );

}