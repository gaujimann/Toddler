import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';

class Task extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: data.tasks,
    }
  }

  render() {
    return (
      <View>
        <Toolbar />
      </View>
    )
  }
}
