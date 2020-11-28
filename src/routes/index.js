import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Tasks from '../views/Tasks';

const StackNavigator = createStackNavigator({
  Boards,
  Lists: {
    screen: Lists,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.boardName}`
    })
  },
  Tasks: {
    screen: Tasks,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.listName}`
    })
  },
});

export default createAppContainer(StackNavigator);
