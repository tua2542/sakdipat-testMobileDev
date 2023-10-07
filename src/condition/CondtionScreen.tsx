import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';
import { SecondStyles } from '../components/ScreenStyle';
import { ButtonYN } from '../components/ButtonsYN';
const ButtonSeparator = () => <View style={SecondStyles.separator} />;

export function ConditionScreen(): JSX.Element {
    return (

        <SafeAreaView style={SecondStyles.container}>
            <View>
                <Text style={SecondStyles.text}>
                📋 เงื่อนไขการใช้บริการ {"\n"}
                </Text>
            </View>
            <View  style={SecondStyles.fixToText}>
                <ButtonYN
                    text="No" size = 'small' type='outlined'  onPress={undefined} />
                <ButtonSeparator />
                <ButtonYN
                    text="Yes" size = 'small'  onPress={undefined} />
            </View>
        </SafeAreaView>



    );

}