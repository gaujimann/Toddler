import React from 'react';
import { View, FlatList, Text } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={3}
      data={boards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <BoardThumbnail id={id} name={name} thumbnailPhoto={thumbnailPhoto} />
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default BoardList;
