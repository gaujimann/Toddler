import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList} from 'react-native';
import TaskThumbnail from '../TaskThumbnail';

const TasksList = ({tasks, onLongPress, selectedTasks }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={1}
      data={tasks}
      extraData={selectedTasks}
      renderItem={({ item: { id, name, description } }) => (
        <TaskThumbnail
          id={id}
          name={name}
          description={description}
          onLongPress={onLongPress}
          isSelected={selectedTasks.indexOf(id) !== -1}
        />
      )}
      keyExtractor={(task) => task.id}
    />
  </View>
)

export default TasksList;
