import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {LanguageScreen} from './src/language/LanguageScreen';


function App(): JSX.Element {

    return (
        <SafeAreaView style={styles.container}>
            <LanguageScreen />
        </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },

  });
export default App;