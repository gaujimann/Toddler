import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#6c1380'
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
  toolbarPlus: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  toolbarTrash: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
