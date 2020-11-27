import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: data.lists,
      selectedLists: [],
      isAddListOpen: false,
      isDeleteListOpen: false,
    };
  }

  onListLongPress(id) {
    const { selectedLists } = this.state;
    if (selectedLists.indexOf(id) !== -1) {
      // The List is already within the list
      this.setState({
        selectedLists: selectedLists.filter((list) => list !== id),
      });
    } else {
      // The List is not within the list
      this.setState({
        selectedLists: [...selectedLists, id],
      });
    }
  }

  render() {
    const { selectedLists, lists, isAddListOpen, isDeleteListOpen } = this.state;
    const { boardId } = this.props.navigation.state.params;
    return (
<<<<<<< HEAD
      <View>
=======
      <View style={{ flex: 1 }}>
>>>>>>> be307ab4ae601a07032ad9af8db31da08a3bc793
        <Toolbar />
        <ListsList
          onLongPress={(id) => this.onListLongPress(id)}
          lists={lists.filter((list) => list.boardId === boardId)}
          selectedLists={selectedLists}
        />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default Lists;
