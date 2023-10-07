import React from 'react';
import {View,SafeAreaView,Text,Alert} from 'react-native';
import { FirstStyles } from '../components/ScreenStyle';
import { Button } from '../components/Buttons';

const ButtonSeparator = () => <View style={FirstStyles.separator} />;
const TextSeparator = () => <View style={FirstStyles.textSeparator} />;

export function LanguageScreen({navigation}: {navigation: any}): JSX.Element {
    return (

        <SafeAreaView style={FirstStyles.container}>
            <View>
                <Text style={FirstStyles.text}>
                    ยินดีต้อนรับ {"\n"}
                    <Text style={FirstStyles.subText} >กรุณาเลือกภาษา</Text>
                </Text>
                <TextSeparator />
                <Button
                    text="English"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <ButtonSeparator />
                <Button
                    text="ไทย"
                    onPress={() => navigation.navigate('Condition')}
                />
            </View>
        </SafeAreaView>



    );

}