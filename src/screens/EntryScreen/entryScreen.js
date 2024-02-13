import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Homepage/homescreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Settings" component={Homescreen} />
    </Tab.Navigator>
  );
}