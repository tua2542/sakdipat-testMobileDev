import { StyleSheet, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, Text } from 'react-native';

const { width } = Dimensions.get('window');
const pinSpacing = 10;
const dialPadSize = width * .2;
const dialPadTextSize = dialPadSize / 3;
const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '🛂', 0, 'del'];

export function DialPadFP({onPress}: {onPress: (item: typeof dialPad[number]) => void}) {
  return <FlatList
    numColumns={3}
    data={dialPad}
    style={{ flexGrow: 0, }}
    scrollEnabled={false}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item,  }) => {
      return <TouchableOpacity
        disabled={item === ''}
        onPress={() => {
          onPress(item);
         }}
      >
        <SafeAreaView style={
          {
            flex: 1,
            margin: 8,
            justifyContent: 'center',
            alignItems: 'center',
            width: dialPadSize,
            height: dialPadSize,
            borderRadius: dialPadSize,
            borderWidth: item === '' ? 2 : 2,
            borderColor: 'gray',
          }
        }>
          <Text style={NinethStyles.textDial}>{item}</Text>
        </SafeAreaView>
      </TouchableOpacity>

    }}
  />
}
export const NinethStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDial: {
    fontSize: dialPadTextSize,
  },
  textTwo: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Quicksand-Medium',
    color: 'black',
    fontWeight: 'normal',
  },
  textSeparator: {
    marginVertical: 30,
  },
  pinDirection: {
    flexDirection: 'row',
    gap: pinSpacing*2,
    marginTop: 'auto'
  },
  touchable: {
    backgroundColor: '#FFFFFF',
  },

});



