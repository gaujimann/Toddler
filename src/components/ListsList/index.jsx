import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import ListThumbnail from '../ListThumbnail';

const ListsList = ({lists, onLongPress, selectedLists}) => (
  <View style={{ flex: 1 }}>
    <FlatList
      // numColumns={1}
      data={lists}
      extraData={selectedLists}
      renderItem={({ item: {
        id, name, color, boardId } }) => (
          <ListThumbnail
            id={id}
            name={name}
            color={color}
            onLongPress={onLongPress}
            isSelected={selectedLists.indexOf(id) !== -1}
          />
      )}
      keyExtractor={(list) => list.id}
    />
  </View>
)

export default ListsList;
