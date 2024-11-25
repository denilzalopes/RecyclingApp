import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IdentificationScreen from '../screens/IdentificationScreen';
import RecyclingFormScreen from '../screens/RecyclingFormScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Identification">
    <Stack.Screen name="Identification" component={IdentificationScreen} />
    <Stack.Screen name="RecyclingForm" component={RecyclingFormScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
