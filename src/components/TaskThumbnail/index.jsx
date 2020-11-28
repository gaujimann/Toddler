import React from 'react';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskThumbnail = ({
  id, name, description, onLongPress, isSelected, isFinished, onToggleCheck
}) => (
  <TouchableOpacity activeOpacity={0.8} onLongPress={() => onLongPress(id)}>
    <View style={styles.container}>
      <CheckBox
        checked={isFinished}
        onPress={onToggleCheck}
      />
      <View style={[styles.task, { backgroundColor: isSelected ? 'rgb(155, 155, 155)' : '#FFF' }]}>
        <Text style={styles.taskName}>{name}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
      </View>
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
