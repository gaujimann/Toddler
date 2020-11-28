import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import styles from './styles';

const Toolbar = ({ onAdd, onRemove, onEdit, numSelected }) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableOpacity
      style={styles.toolbarAction}
      onPress={onAdd}
    >
      <AntDesign name="plus" style={styles.toolbarPlus} />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.toolbarAction}
      onPress={onEdit}
      disabled={numSelected !== 1}
    >
      <Text style={[styles.toolbarActionText, numSelected === 1 ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]}>Edit</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.toolbarAction}
      onPress={onRemove}
      disabled={numSelected === 0}
    >
      <EvilIcons name="trash" style={[styles.toolbarTrash, numSelected > 0 ? {} : { color: 'rgba(155, 155, 155, 0.5)' }]} />
    </TouchableOpacity>
  </View>
);

Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default Toolbar;
