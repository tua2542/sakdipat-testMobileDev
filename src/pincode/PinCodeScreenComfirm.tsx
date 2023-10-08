import React, { useState } from 'react';
import { View, SafeAreaView, Text, Dimensions, TouchableHighlight } from 'react-native';
import { DialPad, SixthStyles } from '../components/screenstyle/PinScreenStyle';
import { StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const pinLength = 4;
const pinContainerSize = width / 2;
const pinMaxSize = pinContainerSize / pinLength;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 2;
const TextSeparator = () => <View style={SixthStyles.textSeparator} />;

export function PinCodeScreenConfirm({ navigation }: { navigation: any }): JSX.Element {
    const [code, setCode] = useState<number[]>([]);
    if(code.length === pinLength ){
        {navigation.push()}
    }
    return (

        <SafeAreaView style={SixthStyles.container}>
            <View>
                <TextSeparator />
                <Text style={SixthStyles.textTwo}>
                    ยืนยันรหัส PIN CODE
                </Text>
            </View>
            <TextSeparator />
            <View style={SixthStyles.pinDirection}>
                {[...Array(pinLength).keys()].map(i => {
                    const isSelected = !!code[i]
                    return <View
                        style={{
                            width: pinSize,
                            height: isSelected ? pinSize : 2,
                            borderRadius: pinSize,
                            borderWidth: 2,
                            borderColor: 'gray',
                            backgroundColor: '#285D34'
                        }} />
                })}
            </View>
            <View style={SixthStyles.container}>
                <DialPad onPress={(item) => {
                    if (item === 'del') {
                        setCode(prevCode => prevCode.slice(0, prevCode.length - 1));
                    } else if (typeof item === 'number') {
                        if(code.length === pinLength) return
                        setCode(prevCode => [...prevCode, item]);
                    }
                } } />
                <StatusBar />
            </View>
        </SafeAreaView>



    );

}