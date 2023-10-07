import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { FirstStyles, ForthStyles, } from '../components/ScreenStyle';
import { Button } from '../components/ButtonsOTP';

const ButtonSeparator = () => <View style={ForthStyles.separator} />;
const TextSeparator = () => <View style={ForthStyles.textSeparator} />;




export function OTPScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={FirstStyles.container}>
            <View>
            <Text style={ForthStyles.textEmoji}>☎️</Text>
            <Text style={ForthStyles.text}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
            <Text style={ForthStyles.textPhNumber}>082-XXX-8998</Text>
            <ButtonSeparator />
                <Button
                    text="ขอรหัส OTP"
                    onPress={() => undefined}
                />
            <TextSeparator />
            <Text style={ForthStyles.subText}> กรณีเบอร์โทรศัพท์ถูกต้องติดต่อเบอร์ 02-XXX-XXXX</Text>
            </View>
        </SafeAreaView>



    );

}