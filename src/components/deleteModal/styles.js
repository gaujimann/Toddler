import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(155, 155, 155, 0.5)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: winWidth - 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  textAccept: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00F',
  },
  textCancel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F00'
  },
  caption: {
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
