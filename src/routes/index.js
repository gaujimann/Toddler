import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Tasks from '../views/Tasks';

const StackNavigator = createStackNavigator({
  Boards,
  Lists,
  Tasks,
});

export default createAppContainer(StackNavigator);
