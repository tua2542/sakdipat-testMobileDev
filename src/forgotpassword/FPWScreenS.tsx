import React from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { SeventhStyles, } from '../components/screenstyle/FPWScreenStyle';
import { Button } from '../components/Buttons';

const ButtonSeparator = () => <View style={SeventhStyles.separator} />;
const TextSeparator = () => <View style={SeventhStyles.textSeparator} />;




export function FPWScreenS({ navigation }: { navigation: any }): JSX.Element {
    return (

        <SafeAreaView style={SeventhStyles.container}>
            <View>
            <Text style={SeventhStyles.textTwo}>
            <Text style={SeventhStyles.subTextEmoji} > ✅ </Text>

                   {"\n\n"}  สำเร็จ {"\n\n"}
                    <TextSeparator />
                    <Text style={SeventhStyles.subTextTwo} > รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว </Text>
                </Text>
                <TextSeparator />
                <TextSeparator />
                <Button
                    text="ตกลง"
                    onPress={() => navigation.navigate(undefined)}
                />
            </View>
        </SafeAreaView>



    );

}