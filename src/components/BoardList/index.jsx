import React from 'react';
import { View, FlatList, Text } from 'react-native';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({ boards, onLongPress, selectedBoards }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={3}
      data={boards}
      extraData={selectedBoards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <BoardThumbnail
          id={id}
          name={name}
          thumbnailPhoto={thumbnailPhoto}
          onLongPress={onLongPress}
          isSelected={selectedBoards.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default BoardList;
