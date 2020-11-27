import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  bottomLine: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
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
  acceptView: {
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  textAccept: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00F',
  },
  textCancel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F00',
  },
  textInput: {
    width: winWidth - 100,
    paddingRight: 16,
    paddingLeft: 16,
  },
  captionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
