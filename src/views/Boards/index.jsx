import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddBoardModal from '../../components/AddBoardModal';
import DeleteModal from '../../components/deleteModal';
import EditBoardModal from '../../components/EditBoardModal';
import ProjectsContext from '../../services/PrejectsContext';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoards: [],
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

  render() {
    const {
      selectedBoards, isAddModelOpen, isDeleteModalOpen, isEditBoardModalOpen
    } = this.state;
    const { navigation } = this.props;
    return (
      <ProjectsContext.Consumer>
        {({ projects: { boards, nextBoardId }, updateProjects }) => (
          <View style={{ flex: 1 }}>
            <Toolbar
              onAdd={() => this.setState({ isAddModelOpen: true })}
              onRemove={() => this.setState({ isDeleteModalOpen: true })}
              onEdit={() => this.setState({ isEditBoardModalOpen: true })}
              numSelected={selectedBoards.length}
            />
            { this.displayCaption() }
            <BoardList
              onLongPress={(id) => this.onBoardLongPress(id)}
              boards={boards}
              selectedBoards={selectedBoards}
              onPress={(id, name) => {
                navigation.navigate('Lists', { boardId: id, boardName: name });
              }}
            />
            <AddBoardModal
              isOpen={isAddModelOpen}
              closeModal={() => this.setState({ isAddModelOpen: false })}
              addBoard={(name, photo) => {
                if (name === '' || photo === '') {
                  return;
                }
                updateProjects({
                  boards: [...boards, {
                    id: nextBoardId,
                    name,
                    thumbnailPhoto: photo,
                  }],
                  nextBoardId: nextBoardId + 1,
                })}}
            />
            <DeleteModal
              isOpen={isDeleteModalOpen}
              closeModal={() => this.setState({ isDeleteModalOpen: false })}
              remove={() => {
                const newBoards = boards.reduce(
                  (acc, board) => (selectedBoards.includes(board.id) ? acc : [...acc, board]),
                  [],
                );
                this.setState({ selectedBoards: [] });
                updateProjects({ boards: newBoards })
              }}
            />
            <EditBoardModal
              isOpen={isEditBoardModalOpen}
              closeModal={() => this.setState({ isEditBoardModalOpen: false })}
              edit={(name, photo) => {
                if (name === '' || photo === '') {
                  return;
                }
                const newBoards = boards.map(
                  (board) => (board.id === selectedBoards[0] ? {
                    id: board.id,
                    name,
                    thumbnailPhoto: photo,
                  } : board),
                );
                this.setState({ selectedBoards: [] });
                updateProjects({ boards: [...newBoards] });
              }}
              currentName={selectedBoards.length === 1 ? boards.find((board) => board.id === selectedBoards[0]).name : ''}
              currentPhoto={selectedBoards.length === 1 ? boards.find((board) => board.id === selectedBoards[0]).thumbnailPhoto : ''}
            />
          </View>
        )}
      </ProjectsContext.Consumer>
    );
  }
}

export default Boards;
