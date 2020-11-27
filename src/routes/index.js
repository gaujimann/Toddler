import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../views/Boards';
import Lists from '../views/Lists';

const StackNavigator = createStackNavigator({
  Boards,
  Lists,
});

export default createAppContainer(StackNavigator);
