import React from 'react';
import { View, SafeAreaView, Text, Alert } from 'react-native';
import { FifthStyles } from '../components/screenstyle/VerifyScreenStyle';
import OTPInputView from "@twotalltotems/react-native-otp-input";


const TextSeparator = () => <View style={FifthStyles.textSeparator} />;

export function VerifyScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={FifthStyles.container}>
            <View>
                <Text style={FifthStyles.textVerify}>
                    ยินยันตัวตน {"\n\n"}
                    <TextSeparator />
                    <Text style={FifthStyles.subTextVerify} >กรุณากรอกรหัสยืนยันที่เราได้ส่งให้ {"\n\n"} 082-XXX-8998 </Text>
                </Text>
                <TextSeparator />
                <View style={FifthStyles.OTPInputsize}>
                <OTPInputView
                    pinCount={6}
                    autoFocusOnLoad
                    codeInputFieldStyle={FifthStyles.underlineStyleBase}
                    codeInputHighlightStyle={FifthStyles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />
                </View>
                <TextSeparator />
                <Text style={FifthStyles.textTwo}> หากคุณไม่ได้รับรหัส ? </Text>
                <TextSeparator />
                <Text style={FifthStyles.textReset}> ส่งรหัสใหม่ (57) </Text>
            </View>
        </SafeAreaView>



    );

}