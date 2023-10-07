import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 18,
      alignItems: 'center' ,
    },
    text: {
      textAlign: 'left',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
      marginVertical: 12,
    },
    subText: {
      textAlign: 'left',
      fontSize: 16,
      color: 'black',
      fontWeight: 'normal',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 12,
      borderBottomColor: '#737373',
    },
    textSeparator: {
      marginVertical: 55,
    },
    paragraphSeparator: {
      marginVertical: 2,
    },

  });
