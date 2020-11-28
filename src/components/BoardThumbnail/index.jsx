import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const BoardThumbnail = ({
  id, name, thumbnailPhoto, onLongPress, onPress, isSelected,
}) => (
  <TouchableOpacity activeOpacity={0.8} onLongPress={() => onLongPress(id)} onPress={() => onPress(id)}>
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmark} />
        : <></>
    }
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Image
        style={styles.board}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
      <Text style={styles.boardName}>{name}</Text>
    </View>
  </TouchableOpacity>
);

BoardThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default BoardThumbnail;
