import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import BoardThumbnail from '../BoardThumbnail';

const BoardList = ({
  boards, onLongPress, onPress, selectedBoards 
}) => (
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
          onPress={onPress}
          isSelected={selectedBoards.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnailPhoto: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedBoards: PropTypes.arrayOf(PropTypes.number).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default BoardList;
