import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import AddListModal from '../../components/AddListModal';
import DeleteModal from '../../components/deleteModal';
import ProjectsContext from '../../services/PrejectsContext';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { selectedLists, isAddModelOpen, isDeleteModalOpen } = this.state;
    const { boardId } = this.props.navigation.state.params;
    return (
      <ProjectsContext.Consumer>
        {({ projects: { lists, nextListId }, updateProjects }) => (
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
            <AddListModal
              isOpen={isAddModelOpen}
              closeModal={() => this.setState({ isAddModelOpen: false })}
              addList={(name, color) => updateProjects({
                lists: [...lists, {
                  is: nextListId,
                  name,
                  color,
                  boardId,
                }],
                nextListId: nextListId + 1,
              })}
            />
            <DeleteModal
              isOpen={isDeleteModalOpen}
              closeModal={() => this.setState({ isDeleteModalOpen: false })}
              remove={() => {
                const newLists = lists.reduce(
                  (acc, list) => (selectedLists.includes(list.id) ? acc : [...acc, list]),
                  [],
                );
                this.setState({ selectedLists: [] })
                updateProjects({ lists: newLists })
              }}
            />
          </View>
        )}
    </ProjectsContext.Consumer>
    );
  }
}

export default Lists;
