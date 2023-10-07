import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'


const width = Dimensions.get('window').width


export const ButtonYN = ({ text, onPress, type = 'filled', bordered = false, size = 'large' }) => {
  const large = width / 1.3
  const small = width / 2.5
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#285D34' : 'transparent'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#285D34'
  const btnBorderRadius = bordered ? 30 : 5

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 15,
    width: btnSize,
    marginBottom: 'auto',
    borderRadius: btnBorderRadius,
    

  }

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium'
  }

  const border = type === 'outlined' && { borderColor: '#285D34', borderWidth: 1 }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}