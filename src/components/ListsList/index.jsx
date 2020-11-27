import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import ListThumbnail from '../ListThumbnail';

<<<<<<< HEAD
const ListsList = ({lists, onLongPress, selectedLists}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      // numColumns={1}
      data={lists}
      extraData={selectedLists}
      renderItem={({ item: {
        id, name, color, boardId } }) => (
=======
const ListsList = ({lists, onLongPress, selectedLists }) => {
  console.log(lists)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={1}
        data={lists}
        extraData={selectedLists}
        renderItem={({ item: { id, name, color } }) => (
>>>>>>> be307ab4ae601a07032ad9af8db31da08a3bc793
          <ListThumbnail
            id={id}
            name={name}
            color={color}
            onLongPress={onLongPress}
            isSelected={selectedLists.indexOf(id) !== -1}
<<<<<<< HEAD
          />
=======
        />
>>>>>>> be307ab4ae601a07032ad9af8db31da08a3bc793
      )}
        keyExtractor={(list) => list.id}
      />
    </View>
);
}

export default ListsList;
