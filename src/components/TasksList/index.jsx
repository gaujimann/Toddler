import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import TaskThumbnail from '../TaskThumbnail';

const TasksList = ({tasks, onLongPress, selectedTasks, toggleFinished, onPress }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={tasks}
      extraData={selectedTasks}
      renderItem={({ item: { id, name, description, isFinished } }) => (
        <TaskThumbnail
          id={id}
          name={name}
          description={description}
          onPress={onPress}
          onLongPress={onLongPress}
          isSelected={selectedTasks.indexOf(id) !== -1}
          isFinished={isFinished}
          onToggleCheck={() => toggleFinished(id)}
        />
      )}
      keyExtractor={(task) => task.id}
    />
  </View>
)

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    listId: PropTypes.number.isRequired
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleFinished: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default TasksList;
