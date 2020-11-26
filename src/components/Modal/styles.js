import {StyleSheet, Dimensions} form 'react-native';

const { width: winWidth } = Dimensions.get('window');

export dafault StylSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    felx: 1,
    alignItems: 'center',
    justifycontent: 'center',
    flexGrow: 0.3,
    borderRadius: 10,
    witdh: winWidth -100,
    backgraoundColor: 'white',
    padding: 40,
  }
});
