import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import IndexScreen from './src/screen/IndexScreen';

const navigator = createStackNavigator(
{
  Index: IndexScreen
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
}
);

export default createAppContainer(navigator)