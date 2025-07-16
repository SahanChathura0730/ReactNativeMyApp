import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Classes from '../app/classes';
import Profile from '../app/profile';
import Subjects from '../app/subjects';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Subjects" component={Subjects} />
        <Drawer.Screen name="Classes" component={Classes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
