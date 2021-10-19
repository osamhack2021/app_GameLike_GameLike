import * as React from 'react';
import HomeScreen from './Home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TodayNavigator from './Quest/Screens/TodayNavigator';

const Stack = createStackNavigator();

export default function MainScreen() {
  //const [propsEmail, setPropsEmail] = useState(`${props.userEmail}`);
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="TODAY" component={TodayNavigator} />
    </Stack.Navigator>
  );
}
