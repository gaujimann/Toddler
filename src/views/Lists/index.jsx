import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: data.lists,
      selectedLists: [],
      isAddListOpen: false,
      isDeleteListOpen: false,
    };
  }

  render() {
    const { selectedLists, lists, isAddListOpen, isDeleteListOpen } = this.state;
    return (
      <View>
        <Toolbar />
        <ListsList
          onLongPress={(id) => this.onBoardLongPress(id)}
          lists={lists}
          selectedLists={selectedLists}
        />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default Lists;
