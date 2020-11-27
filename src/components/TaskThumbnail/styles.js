import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  taskName: {
    width: winWidth,
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  checkmark: {
    position: 'absolute',
    bottom: 12,
    left: 15,
    fontSize: 16,
  }
});
