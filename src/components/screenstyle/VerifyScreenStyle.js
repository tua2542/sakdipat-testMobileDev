import { StyleSheet } from 'react-native';

 export const FifthStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'left',
      marginHorizontal: 18,
      marginVertical: 12,
      alignItems: 'center' ,
    },
    textVerify: {
      textAlign: 'left',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
    },
    subTextVerify: {
      textAlign: 'left',
      fontSize: 16,
      color: 'black',
      fontWeight: 'normal',
    },
    textTwo: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'normal',
    },
    textReset: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Quicksand-Medium',
      color: '#285D34',
      fontWeight: 'normal',
    },
    textSeparator: {
      marginVertical: 15,
    },
    OTPInputsize:{
      width: "80%", 
      height: 200,
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color: "black",
      fontSize: 20,
    },  
    underlineStyleHighLighted: {
      borderColor: "#285D34",
    },
   
  });

