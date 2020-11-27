import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddModal';
import DeleteModal from '../../components/deleteModal';

class Boards extends React.Component {
  constructor() {
    super();
    this.state = {
      boards: data.boards,
      selectedBoards: [],
      isAddModelOpen: false,
      nextId: 4,
    };
  }

  onBoardLongPress(id) {
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1) {
      // The Board is already within the list
      this.setState({
        selectedBoards: selectedBoards.filter((board) => board !== id),
      });
    } else {
      // The board is not within the list
      this.setState({
        selectedBoards: [...selectedBoards, id],
      });
    }
  }

  displayCaption() {
    const { selectedBoards } = this.state;
    if (selectedBoards.length === 0) { return null; }

    let itemCaption = 'boards';
    if (selectedBoards.length === 1) {
      itemCaption = 'board';
    }
    return (
      <Text style={{
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 5,
      }}
      >
        {selectedBoards.length}
        {' '}
        {itemCaption}
        {' '}
        selected
      </Text>
    );
  }

  addBoard(name, photo) {
    console.log('name of User', name, ' :::::: here is the photo value', photo);
    if (name === '' || photo === '') {
      return;
    }
    const { boards, nextId } = this.state;
    this.setState({
      boards: [...boards, {
        id: nextId,
        name,
        thumbnailPhoto: photo,
      }],
      nextId: nextId + 1,
    })
  }

  remove() {
    const { selectedBoards, boards } = this.state;
    const newBoards = boards.reduce(
      (acc, board) => (selectedBoards.includes(board.id) ? acc : [...acc, board]),
      [],
    );
    this.setState({ boards: newBoards, selectedBoards: [] });
  }

  render() {
    const { selectedBoards, boards, isAddModelOpen, isDeleteModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModelOpen: true })}
          onRemove={() => this.setState({ isDeleteModalOpen: true })}
          hasSelectedBoards={selectedBoards.length > 0}
        />
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          boards={boards}
          selectedBoards={selectedBoards}
        />
        <AddModal
          isOpen={isAddModelOpen}
          closeModal={() => this.setState({ isAddModelOpen: false })}
          addBoard={(name, photo) => this.addBoard(name, photo)}
        />
        <DeleteModal
          isOpen={isDeleteModalOpen}
          closeModal={() => this.setState({ isDeleteModalOpen: false })}
          remove={() => this.remove()}
        />
      </View>
    );
  }
}

export default Boards;
