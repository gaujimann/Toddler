import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import AddListModal from '../../components/AddListModal';
import DeleteModal from '../../components/deleteModal';
import EditListModal from '../../components/EditListModal';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const { lists } = props.navigation.state.params;
    this.state = {
      lists,
      selectedLists: [],
      isAddModelOpen: false,
      isDeleteModalOpen: false,
      nextId: 9,
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

  addList(name, color) {
    if (name === '' || color === '') {
      return;
    }
    const { nextId, lists } = this.state;
    const { boardId, setState } = this.props.navigation.state.params;
    setState({
      lists: [...lists, {
        is: nextId,
        name,
        color,
        boardId,
      }],
    });
    this.setState({
      lists: [...lists, {
        id: nextId,
        name,
        color,
        boardId,
      }],
      nextId: nextId + 1,
    });
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

  editList(name, color) {
    if (name === '' || color === '') {
      return;
    }
    const { nextId, lists, selectedLists } = this.state;
    const { boardId, setState } = this.props.navigation.state.params;
    const newLists = lists.map(
      (list) => (list.id === selectedLists[0] ? {
        id: list.id,
        name,
        color,
        boardId,
      } : list),
    );
    this.setState({ lists: [...newLists], selectedLists: [] })
  }

  render() {
    const { lists, selectedLists, isAddModelOpen, isDeleteModalOpen, isEditListModalOpen } = this.state;
    const { boardId } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModelOpen: true })}
          onRemove={() => this.setState({ isDeleteModalOpen: true })}
          onEdit={() => this.setState({ isEditListModalOpen: true })}
          numSelected={selectedLists.length}
        />
        <ListsList
          onLongPress={(id) => this.onListLongPress(id)}
          lists={lists.filter((list) => list.boardId === boardId)}
          selectedLists={selectedLists}
        />
        <AddListModal
          isOpen={isAddModelOpen}
          closeModal={() => this.setState({ isAddModelOpen: false })}
          addList={(name, color) => this.addList(name, color)}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          closeModal={() => this.setState({ isDeleteModalOpen: false })}
          remove={() => this.removeList()}
        />
        <EditListModal
          isOpen={isEditListModalOpen}
          closeModal={() => this.setState({ isEditListModalOpen: false})}
          edit={(name, color) => this.editList(name, color)}
        />
      </View>
    );
  }
}

export default Lists;
