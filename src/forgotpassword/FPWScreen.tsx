import React from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { SeventhStyles, } from '../components/screenstyle/FPWScreenStyle';
import { Button } from '../components/Buttons';

const ButtonSeparator = () => <View style={SeventhStyles.separator} />;
const TextSeparator = () => <View style={SeventhStyles.textSeparator} />;




export function FPWScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={SeventhStyles.container}>
            <View>
            <Text style={SeventhStyles.text}>
                    ลืมรหัสผ่าน ? {"\n\n"}
                    <TextSeparator />
                    <Text style={SeventhStyles.subText} > กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ {"\n"} ที่ลงทะเบียน </Text>
                </Text>
                <TextSeparator />
                <TextInput placeholder='อีเมล / เบอร์โทรศัพท์' />
                <TextSeparator />
                <Button
                    text="ส่ง"
                    onPress={() => navigation.push('FPWS', { screen: "FPWScreenS" })}
                />
            </View>
        </SafeAreaView>



    );

}