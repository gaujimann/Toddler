import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove, hasSelctedBoards }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}
    >
      <Text style={styles.toolbarActionText}>Add Board</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={!hasSelctedBoards}
    >
      <Text style={[styles.toolbarActionText, hasSelctedBoards ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>Delete Selected</Text>
    </TouchableHighlight>
  </View>
);

export default Toolbar;
