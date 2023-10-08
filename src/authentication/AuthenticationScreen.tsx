import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { ThirdStyles } from '../components/screenstyle/AuthScreenStyle';
import { Button } from '../components/Buttons';
import { FirstStyles } from '../components/screenstyle/LangScreenStyle';

const ButtonSeparator = () => <View style={ThirdStyles.separator} />;
const TextSeparator = () => <View style={ThirdStyles.textSeparator} />;
const Separator = () => <View style={ThirdStyles.separatorBetween} />;

export function AuthenticationScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={FirstStyles.container}>
            <View>
                <TextInput placeholder='ชื่อผู้ใช้งาน' />
                <TextSeparator />
                <TextInput placeholder='รหัสผ่าน' />
                <TextSeparator />
                <Button
                    text="เข้าสู่ระบบ"
                    onPress={() => navigation.navigate('OTP')}
                />
                <ButtonSeparator />
                <Button
                    text="เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้"
                    type='outlined'
                    onPress={() => undefined}
                />
            </View>
        </SafeAreaView>



    );

}