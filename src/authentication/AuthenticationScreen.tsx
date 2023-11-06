import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, SafeAreaView, TextInput, Text, } from 'react-native';
import { ThirdStyles } from '../components/screenstyle/AuthScreenStyle';
import { Button } from '../components/Buttons';

const ButtonSeparator = () => <View style={ThirdStyles.separator} />;
const TextSeparator = () => <View style={ThirdStyles.textSeparator} />;
const [isSelected, setSelection] = useState(false);

export function AuthenticationScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={ThirdStyles.container}>
            <View>
                <TextInput placeholder='ชื่อผู้ใช้งาน' />
                <TextSeparator />
                <TextInput placeholder='รหัสผ่าน' />
                <TextSeparator />
                <View style={ThirdStyles.subContainer}>
                    <View style={ThirdStyles.separatorBetween}>
                        <Checkbox
                            value={isSelected}
                            onValueChange={setSelection}
                            color={isSelected ? '#4630EB' : undefined}
                        />
                        <Text style={ThirdStyles.FPWText}>
                            บันทึกการเข้าสู่ระบบ</Text>
                        <Text style={ThirdStyles.FPWText}
                            onPress={() => navigation.push('FPW', { screen: "FPWScreen" })}
                        >ลืมรหัสผ่าน?</Text>
                    </View>
                </View>
                <TextSeparator />
                <Button
                    text="เข้าสู่ระบบ"
                    onPress={() => navigation.push('OTP', { screen: "PinCodeScreen" })}
                />
                <ButtonSeparator />
                <Text style={ThirdStyles.subText} >──────────  ไม่มีบัญชีผู้ใช้  ──────────</Text>
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