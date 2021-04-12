import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrailDisplay from './screens/trailDisplay';
import TrailAddition from './screens/trailAddition';
import TrailList from './screens/trailList';
import { Provider } from 'react-redux';
import trailstore from './store/configstore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={trailstore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="traillist" component={TrailList}></Stack.Screen>
          <Stack.Screen name="traildisplay" component={TrailDisplay}></Stack.Screen>
          <Stack.Screen name="trailaddition" component={TrailAddition}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
