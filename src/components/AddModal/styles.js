import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  icon: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  caption: {
    width: winWidth - 100,
    marginTop: 10,
    borderStyle: 'solid',
    borderTopColor: '#000',
    borderTopWidth: 1,
    alignItems: 'center',
    padding: 20,
  },
  captionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
