import React, { useState } from 'react';
import { View, SafeAreaView, TextInput } from 'react-native';
import { FirstStyles, ThirdStyles } from '../components/ScreenStyle';
import { Button } from '../components/Buttons';

const ButtonSeparator = () => <View style={ThirdStyles.separator} />;
const TextSeparator = () => <View style={ThirdStyles.textSeparator} />;

const [toggleCheckBox, setToggleCheckBox] = useState(false)


export function AuthenticationScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={FirstStyles.container}>
            <View>
                <TextInput placeholder='ชื่อผู้ใช้งาน' />
                <TextSeparator />
                <TextInput placeholder='รหัสผ่าน' />
                <TextSeparator />

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