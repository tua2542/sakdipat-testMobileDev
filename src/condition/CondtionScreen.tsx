import React from 'react';
import {View,SafeAreaView,Text} from 'react-native';
import { SecondStyles } from '../components/screenstyle/CondScreenStyle';
import { ButtonYN } from '../components/ButtonsYN';
const ButtonSeparator = () => <View style={SecondStyles.separator} />;
const ParagraphSeparator = () => <View style={SecondStyles.paragraphSeparator} />;

export function ConditionScreen({navigation}: {navigation: any}): JSX.Element {
    return (

        <SafeAreaView style={SecondStyles.container}>
            <View>
                <Text style={SecondStyles.text}>
                📋 เงื่อนไขการใช้บริการ {"\n"}
                </Text>
            </View>
            <ParagraphSeparator />
            <View  style={SecondStyles.fixToText}>
                <ButtonYN
                    text="ปฎิเสธ" size = 'small' type='outlined'  onPress={undefined} />
                <ButtonSeparator />
                <ButtonYN
                    text="ยอมรับ" size = 'small'  onPress={navigation.navigate('Condition')} />
            </View>
        </SafeAreaView>



    );

}