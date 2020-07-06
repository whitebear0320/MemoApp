import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'

import * as Font from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf'
import { createIconSet } from '@expo/vector-icons';

const glyphMap = { 
  plus: '\uf067',
  pencil: '\uf303',
  check: '\uf00c',
};
const CustomIcon = createIconSet(glyphMap, 'FontAwesome', fontAwesome);

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    const {name, style, color, onPress} = this.props
    let bgColor = '#e31676'
    let textColor = '#fff'

    if (color === 'white') {
      bgColor = '#fff'
      textColor = '#e31676'
    }

    return(
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, {color: textColor}]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48, // 追加
    height: 48,　// 追加
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  },

})

export default CircleButton