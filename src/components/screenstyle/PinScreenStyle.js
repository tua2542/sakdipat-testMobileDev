import { StyleSheet } from 'react-native';

 export const SixthStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'left',
      marginHorizontal: 18,
      marginVertical: 80,
      alignItems: 'center' ,
    },
    textTwo: {
      textAlign: 'center',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
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

