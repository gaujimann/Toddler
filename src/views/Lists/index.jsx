import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import AddListModal from '../../components/AddListModal';
import DeleteModal from '../../components/deleteModal';
import ProjectsContext from '../../services/PrejectsContext';
import EditListModal from '../../components/EditListModal';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLists: [],
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

  displayCaption() {
    const { selectedLists } = this.state;
    if (selectedLists.length === 0) { return null; }

    let itemCaption = 'lists';
    if (selectedLists.length === 1) {
      itemCaption = 'list';
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
        {selectedLists.length}
        {' '}
        {itemCaption}
        {' '}
        selected
      </Text>
    );
  }

  render() {
    const { selectedLists, isAddModelOpen, isDeleteModalOpen, isEditListModalOpen } = this.state;
    const { boardId } = this.props.navigation.state.params;
    const { navigation } = this.props;
    return (
      <ProjectsContext.Consumer>
        {({ projects: { lists, nextListId }, updateProjects }) => (
          <View style={{ flex: 1 }}>
            <Toolbar
              onAdd={() => this.setState({ isAddModelOpen: true })}
              onRemove={() => this.setState({ isDeleteModalOpen: true})}
              onEdit={() => this.setState({ isEditListModalOpen: true })}
              numSelected={selectedLists.length}
            />
            {this.displayCaption()}
            <ListsList
              onLongPress={(id) => this.onListLongPress(id)}
              lists={lists.filter((list) => list.boardId === boardId)}
              selectedLists={selectedLists}
              onPress={(id, name) => {
                navigation.navigate('Tasks', { listId: id, listName: name });
              }}
            />
            <AddListModal
              isOpen={isAddModelOpen}
              closeModal={() => this.setState({ isAddModelOpen: false })}
              addList={(name, color) => updateProjects({
                lists: [...lists, {
                  id: nextListId,
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
            <EditListModal
              isOpen={isEditListModalOpen}
              closeModal={() => this.setState({ isEditListModalOpen: false})}
              edit={(name, color) => {
                const newLists = lists.map(
                  (list) => (list.id === selectedLists[0] ? {
                    id: list.id,
                    name,
                    color,
                    boardId,
                  } : list),
                );
                this.setState({ selectedLists: [] })
                updateProjects({ lists: [...newLists] })
              }}
              currentName={selectedLists.length === 1 ? lists.find((list) => list.id === selectedLists[0]).name : ''}
              currentColor={selectedLists.length === 1 ? lists.find((list) => list.id === selectedLists[0]).color : ''}
            />
          </View>
        )}
      </ProjectsContext.Consumer>
    );
  }
};

Lists.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Lists;
