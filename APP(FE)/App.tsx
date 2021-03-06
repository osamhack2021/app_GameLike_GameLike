import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './src/StartScreen';
import LoginScreen from './src/LoginScreen';
import MainScreen from './src/MainScreen';
import RegisterScreen from './src/RegisterScreen';

// SplashScreen을 추가할지 고민중 (user_id가 저장되어 있는 경우 바로 MainScreen으로 이동하도록) => StartScreen으로 일단 대체

import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {AppState, makeStore} from './src/Store';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileScreen from './src/Component/ProfileScreen';

const Stack = createStackNavigator();
const store = makeStore();

export default function App() {
  try {
    const rv = (
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="START"
            screenOptions={{
              animationEnabled: false, // hack
              headerShown: false,
            }}>
            <Stack.Screen name="START" component={StartScreen} />
            <Stack.Screen name="LOGIN" component={LoginScreen} />
            <Stack.Screen name="MAIN" component={MainScreen} />
            <Stack.Screen name="REGISTER" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    );
    return rv;
  } catch (e) {
    if (e instanceof Error) {
      return (
        <View>
          <Text>{e.message}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>에러 온거 없는디?</Text>
        </View>
      );
    }
  }
}
