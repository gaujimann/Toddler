import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';
import TasksList from '../../components/TasksList';
import AddTaskModal from '../../components/AddTaskModal';
import DeleteModal from '../../components/deleteModal';
import ProjectsContext from '../../services/PrejectsContext';
import EditTaskModal from '../../components/EditTaskModal';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTasks: [],
    };
  }

  onTaskLongPress(id) {
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1) {
      // The Task is already within the list
      this.setState({
        selectedTasks: selectedTasks.filter((task) => task !== id),
      });
    } else {
      // The Task is not within the list
      this.setState({
        selectedTasks: [...selectedTasks, id],
      });
    }
  }

  displayCaption() {
    const { selectedTasks } = this.state;
    if (selectedTasks.length === 0) { return null; }

    let itemCaption = 'boards';
    if (selectedTasks.length === 1) {
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
        {selectedTasks.length}
        {' '}
        {itemCaption}
        {' '}
        selected
      </Text>
    );
  }

  render() {
    const {
      selectedTasks, isAddModelOpen, isDeleteModalOpen, isEditTaskModalOpen
    } = this.state;
    const { listId } = this.props.navigation.state.params;
    return (
      <ProjectsContext.Consumer>
        {({ projects: { tasks, nextTaskId }, updateProjects }) => (
          <View style={{ flex: 1 }}>
            <Toolbar
              onAdd={() => this.setState({ isAddModelOpen: true })}
              onRemove={() => this.setState({ isDeleteModalOpen: true})}
              onEdit={() => this.setState({ isEditTaskModalOpen: true })}
              numSelected={selectedTasks.length}
            />
            { this.displayCaption() }
            <TasksList
              onLongPress={(id) => this.onTaskLongPress(id)}
              tasks={tasks.filter((task) => task.listId === listId)}
              selectedTasks={selectedTasks}
              toggleFinished={(taskId) => {
                const newTasks = tasks.map(
                  (task) => (task.id === taskId ? {
                    ...task, isFinished: !task.isFinished
                  } : task),
                );
                updateProjects({ tasks: [...newTasks] });
              }}
            />
            <AddTaskModal
              isOpen={isAddModelOpen}
              closeModal={() => this.setState({ isAddModelOpen: false })}
              addTask={(name, description) => updateProjects({
                tasks: [...tasks, {
                  id: nextTaskId,
                  name,
                  description,
                  listId,
                }],
                nextTaskId: nextTaskId + 1,
              })}
            />
            <DeleteModal
              isOpen={isDeleteModalOpen}
              closeModal={() => this.setState({ isDeleteModalOpen: false })}
              remove={() => {
                const newTasks = tasks.reduce(
                  (acc, task) => (selectedTasks.includes(task.id) ? acc : [...acc, task]),
                  [],
                );
                this.setState({ selectedTasks: [] })
                updateProjects({ tasks: newTasks })
              }}
            />
            <EditTaskModal
              isOpen={isEditTaskModalOpen}
              closeModal={() => this.setState({ isEditTaskModalOpen: false})}
              edit={(name, description) => {
                if (name === '' || description === '') {
                  return;
                }
                const newTasks = tasks.map(
                  (task) => (task.id === selectedTasks[0] ? {
                    ...task,
                    name,
                    description,
                    listId,
                  } : task),
                );
                this.setState({ selectedTasks: [] })
                updateProjects({ tasks: [...newTasks] })
              }}
              currentName={selectedTasks.length === 1 ? tasks.find((task) => task.id === selectedTasks[0]).name : ''}
              currentDescription={selectedTasks.length === 1 ? tasks.find((task) => task.id === selectedTasks[0]).description : ''}
            />
          </View>
        )}
      </ProjectsContext.Consumer>
    );
  }
}

export default Tasks;
