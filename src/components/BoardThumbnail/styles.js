import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  board: {
    width: 115,
    height: 115,
    margin: 10,
  },
  boardName: {
    width: 115,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  checkmark: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    fontSize: 16,
  }
});
