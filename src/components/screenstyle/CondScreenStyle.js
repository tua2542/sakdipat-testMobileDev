import { StyleSheet } from 'react-native';


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

    },


  });