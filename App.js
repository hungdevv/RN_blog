import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import IndexScreen from './src/screen/IndexScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';

const navigator = createStackNavigator(
{
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
}
);

const App = createAppContainer(navigator);

export default () => {
  return(
  <Provider>
      <App />
  </Provider>
  )
};