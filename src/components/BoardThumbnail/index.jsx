import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const BoardThumbnail = ({ id, name, thumbnailPhoto, onLongPress, isSelected }) => (
  <TouchableOpacity activeOpacity={0.8} onLongPress={() => onLongPress(id)}>
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
    </View>
  </TouchableOpacity>
);

export default BoardThumbnail;
