  import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove, onEdit, numSelected }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}
    >
      <Text style={styles.toolbarActionText}>Add Board</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onEdit}
      disabled={numSelected !== 1}
    >
      <Text style={[styles.toolbarActionText, numSelected === 1 ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>Edit</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={numSelected === 0}
    >
      <Text style={[styles.toolbarActionText, numSelected > 0 ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>Delete</Text>
    </TouchableHighlight>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default Toolbar;
