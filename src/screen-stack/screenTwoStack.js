import React from 'react';
import Posts from '../screens/Posts';
import Todos from '../screens/About';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from '../navigations/navigationDrawerStructure';

const Stack = createStackNavigator();

function ScreenTwoStack({ navigation }) {
    return (
      <Stack.Navigator
        initialRouteName={Posts}
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
            title: 'Todos',
          }}
        />
      </Stack.Navigator>
    );
  }

  export default ScreenTwoStack;