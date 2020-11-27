import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import Toolbar from '../../components/Toolbar';

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: data.lists,
    };
  }

  render() {

    return (
      <View>
        <Toolbar/>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default Lists;
