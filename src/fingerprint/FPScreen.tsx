import React from 'react';
import { View, SafeAreaView, Text, Alert } from 'react-native';
import { EighthStyles } from '../components/screenstyle/FPScreenStyle';
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Button } from '../components/Buttons';


const TextSeparator = () => <View style={EighthStyles.textSeparator} />;


export function FPScreen({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={EighthStyles.container}>
            <View>
                <Text style={EighthStyles.textVerify}>
                    Touch ID {"\n\n"}
                    <TextSeparator />
                    <Text style={EighthStyles.subTextVerify} >ตั้งค่าล็อคอินด้วยลายนิ้วมือ{"\n\n"}เพื่อการเข้าถึงที่รวดขี้น</Text>
                </Text>
                <TextSeparator /><TextSeparator /><TextSeparator />
                <Text style={EighthStyles.textEmoji}>🛂</Text>
                <TextSeparator /><TextSeparator /><TextSeparator />
                <Button text="ตั้งค่าลายมือ" 
                onPress={() => navigation.push('PinCodeFingerprint', { screen: "PinFPScreen" })} />
                <TextSeparator />
                <Text style={EighthStyles.textSkip}>ข้าม</Text>
            </View>
        </SafeAreaView>



    );

}