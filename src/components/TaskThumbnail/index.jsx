import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskThumbnail = ({
  id, name, description, onLongPress, isSelected,
}) => (
  <TouchableOpacity activeOpacity={0.8} onLongPress={() => onLongPress(id)} onPress={() => onPress(id)}>
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmark} />
        : <></>
    }
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Text style={styles.taskName}>{name}</Text>
    </View>
  </TouchableOpacity>
);

TaskThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default TaskThumbnail;
