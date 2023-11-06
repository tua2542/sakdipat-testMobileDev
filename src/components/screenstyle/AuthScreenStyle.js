import { StyleSheet } from 'react-native';

  export const ThirdStyles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 18,
      alignItems: 'center' ,
    },
    subContainer:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
      marginVertical: 12,
    },
    subText: {
      textAlign: 'center',
      fontSize: 14,
      color: 'gray',
      fontWeight: 'normal',
    },
    separator: {
      marginVertical: 28,
      borderBottomColor: '#737373',
    },
    textSeparator: {
      marginVertical: 12,
    },
    separatorBetween: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    FPWText: {
      fontSize: 14,
    },
  });