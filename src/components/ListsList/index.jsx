import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import ListThumbnail from '../ListThumbnail';

const ListsList = ({lists, onLongPress, onPress, selectedLists }) => (
  <View style={{ flex: 1, marginBottom: 16 }}>
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

export default ListsList;
