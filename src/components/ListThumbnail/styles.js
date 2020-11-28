import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  listName: {
    flex: 1,
    textAlign: 'center',
    padding: 20,
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
  },
});
