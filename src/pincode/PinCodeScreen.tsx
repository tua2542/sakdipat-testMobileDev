import React, { useState } from 'react';
import { View, SafeAreaView, Text, Dimensions, TouchableHighlight } from 'react-native';
import { DialPad, SixthStyles } from '../components/screenstyle/PinScreenStyle';
import { StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const pinLength = 6;
const pinContainerSize = width / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 1.5;
const TextSeparator = () => <View style={SixthStyles.textSeparator} />;

export function PinCodeScreen({ navigation }: { navigation: any }): JSX.Element {
    const [code, setCode] = useState<number[]>([]);
    if (code.length === pinLength) {
        { navigation.push('PincodeConfirm', { screen: "PinCodeScreenConfirm" }) }
    }
    return (

        <SafeAreaView style={SixthStyles.container}>
            <View>
                <TextSeparator />
                <Text style={SixthStyles.textTwo}>
                    ตั้งรหัส PIN CODE
                </Text>
            </View>
            <TextSeparator />
            <View style={SixthStyles.pinDirection}>
                {[...Array(pinLength).keys()].map(i => {
                    const isSelected = !!code[i]
                    if (isSelected) {
                        return <View
                            style={{
                                width: pinSize,
                                height: pinSize,
                                borderRadius: pinSize,
                                borderWidth: 2,
                                borderColor: 'gray',
                                backgroundColor: '#285D34'
                            }} />
                    } else return <View
                        style={{
                            width: pinSize,
                            height: pinSize,
                            borderRadius: pinSize,
                            borderWidth: 2,
                            borderColor: 'gray',
                        }} />
                })}
            </View>
            <View style={SixthStyles.container}>
                <DialPad onPress={(item) => {
                    if (item === 'del') {
                        setCode(prevCode => prevCode.slice(0, prevCode.length - 1));
                    } else if (typeof item === 'number') {
                        if (code.length === pinLength) return
                        setCode(prevCode => [...prevCode, item]);
                    }
                }} />
                <StatusBar />
            </View>
        </SafeAreaView>



    );

}