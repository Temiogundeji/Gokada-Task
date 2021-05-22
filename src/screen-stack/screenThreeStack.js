import React from 'react';
import Posts from '../screens/Posts';
import Todos from '../screens/About';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from '../navigations/navigationDrawerStructure';

const Stack = createStackNavigator();

function ScreenThreeStack({ navigation }) {
    return (
      <Stack.Navigator
        initialRouteName="Todos"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}>
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={{
            title: 'Posts', 
          }}
        />
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{
            title: 'About',
          }}
        />
      </Stack.Navigator>
    );
  }
  

  export default ScreenThreeStack;