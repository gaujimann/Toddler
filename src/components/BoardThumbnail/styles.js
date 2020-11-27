import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  board: {
    width: 115,
    height: 115,
    margin: 10,
    borderRadius: 100,
  },
  boardName: {
    width: 115,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
  },
  checkmark: {
    position: 'absolute',
    bottom: 50,
    left: 58,
    fontSize: 16,
  }
});
