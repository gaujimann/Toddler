import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import ListThumbnail from '../ListThumbnail';

const ListsList = ({ lists, onLongPress, onPress, selectedLists }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={lists}
      extraData={selectedLists}
      renderItem={({ item: { id, name, color } }) => (
        <ListThumbnail
          id={id}
          name={name}
          color={color}
          onLongPress={onLongPress}
          onPress={onPress}
          isSelected={selectedLists.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(list) => list.id}
    />
  </View>
)

ListsList.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    boardId: PropTypes.number.isRequired
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  selectedLists: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default ListsList;
