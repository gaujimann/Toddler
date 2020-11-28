import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const ListThumbnail = ({
  id, name, color, onLongPress, onPress, isSelected,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onLongPress={() => onLongPress(id)}
    onPress={() => onPress(id, name)}
  >
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmark} />
        : <></>
    }
    <View style={[{ opacity: isSelected ? 0.5 : 1 }, { backgroundColor: color }]}>
      <Text style={styles.listName}>{name}</Text>
    </View>
  </TouchableOpacity>
);

ListThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ListThumbnail;
