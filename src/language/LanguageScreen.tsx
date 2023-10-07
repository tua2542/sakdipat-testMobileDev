import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';
import { styles } from './ScreenStyle';
import { Button } from './Buttons';
const ButtonSeparator = () => <View style={styles.separator} />;
const TextSeparator = () => <View style={styles.textSeparator} />;
const ParagraphSeparator = () => <View style={styles.paragraphSeparator} />;

export function LanguageScreen(): JSX.Element {
    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    ยินดีต้อนรับ {"\n"}
                <Text style={styles.subText} >กรุณาเลือกภาษา</Text>
                </Text>
                <TextSeparator />
                <Button
                    text="English"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <ButtonSeparator />
                <Button
                    text="ไทย"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </SafeAreaView>



    );

}