import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import DeleteModal from '../../components/deleteModal';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const { lists } = props.navigation.state.params;
    this.state = {
      lists,
      selectedLists: [],
      isAddModelOpen: false,
      isDeleteModalOpen: false,
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

  removeList() {
    const { selectedLists, lists } = this.state;
    const { setState } = this.props.navigation.state.params;
    const newLists = lists.reduce(
      (acc, list) => (selectedLists.includes(list.id) ? acc : [...acc, list]),
      [],
    );
    setState({ lists: newLists });
    this.setState({ lists: newLists, selectedLists: [] })
  }

  render() {
    const { lists, selectedLists, isAddModelOpen, isDeleteModalOpen } = this.state;
    const { boardId } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModelOpen: true })}
          onRemove={() => this.setState({ isDeleteModalOpen: true})}
          hasSelected={selectedLists.length > 0}
        />
        <ListsList
          onLongPress={(id) => this.onListLongPress(id)}
          lists={lists.filter((list) => list.boardId === boardId)}
          selectedLists={selectedLists}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          closeModal={() => this.setState({ isDeleteModalOpen: false })}
          remove={() => this.removeList()}
        />
      </View>
    );
  }
}

export default Lists;
