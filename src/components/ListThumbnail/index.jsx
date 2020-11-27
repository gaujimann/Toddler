import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const ListThumbnail = ({
  id, name, color, onLongPress, isSelected,
}) => (
  <TouchableOpacity activeOpacity={0.8} onLongPress={() => onLongPress(id)} onPress={() => onPress(id)}>
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmark} />
        : <></>
    }
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Text style={styles.boardName}>{name}</Text>
    </View>
  </TouchableOpacity>
);

ListThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ListThumbnail;
