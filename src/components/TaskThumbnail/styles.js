import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  task: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    width: winWidth - 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  taskName: {
    flex: 1,
    textAlign: 'left',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
    padding: 10,
    flex: 1,
    textAlign: 'left',
  },
  checkmark: {
    position: 'absolute',
    bottom: 4,
    left: 70,
    fontSize: 16,
  }
});
