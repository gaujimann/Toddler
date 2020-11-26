import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const BoardThumbnail = ({ id, name, thumbnailPhoto }) => (
  <Image
    style={styles.board}
    resizeMode="cover"
    source={{ uri: thumbnailPhoto }}
  />
);

export default BoardThumbnail;
