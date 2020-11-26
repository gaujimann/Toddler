import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddModal';

class Boards extends React.Component {
  constructor() {
    super();
    this.state = {
      boards: data.boards,
      selectedBoards: [],
      isAddModelOpen: false,
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
  takePhoto() {

  }
  selectFromCameraRoll() {

  }

  render() {
    const { selectedBoards, boards, isAddModelOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({isAddModelOpen: true})}
          hasSelctedBoards={selectedBoards.length > 0} />
        { this.displayCaption() }
        <BoardList
          onLongPress={(id) => this.onBoardLongPress(id)}
          boards={boards}
          selectedBoards={selectedBoards}
        />
        <AddModal
          isOpen={isAddModelOpen}
          closeModal={() => this.setState({ isAddModelOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Boards;
