import { StyleSheet } from 'react-native';

export const FirstStyles = StyleSheet.create({
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


  export const SecondStyles = StyleSheet.create({
    container: {
      flex: 3,
      marginHorizontal: 'auto',
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      backgroundColor:'white'

    },
    text: {
      textAlign: 'left',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
      marginVertical: 26,
      marginHorizontal: 30,
      borderBottomWidth: StyleSheet.hairlineWidth,

    },

    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,

    },
      separator: {
      marginVertical: 50,
      borderBottomColor: '#737373',
    },
      paragraphSeparator: {
      marginBottom: 'auto',
    },
    headTitle:{
      height: 250,
      backgroundColor: '#f2f2f2',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,

    }

  });

  export const ThirdStyles = StyleSheet.create({

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
    separator: {
      marginVertical: 36,
      borderBottomColor: '#737373',
    },
    textSeparator: {
      marginVertical: 12,
    },
  });

  export const ForthStyles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 18,
      alignItems: 'center' ,
    },
    text: {
      textAlign: 'center',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
      marginVertical: 12,
    },
    textEmoji: {
      textAlign: 'center',
      fontSize: 64,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
      marginVertical: 12,
    },
    textPhNumber: {
      textAlign: 'center',
      fontSize: 22,
      fontFamily: 'Quicksand-Medium',
      color: 'black',
      fontWeight: 'bold',
      marginVertical: 12,
      color: "#285D34"
    },
    subText: {
      textAlign: 'center',
      fontSize: 12,
      color: 'grey',
      fontWeight: 'normal',
    },
    separator: {
      marginVertical: 36,
      borderBottomColor: '#737373',
    },
    textSeparator: {
      marginVertical: 12,
    },
  });