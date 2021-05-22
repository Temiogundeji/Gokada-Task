import React from 'react';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from '../navigations/navigationDrawerStructure';
const Stack = createStackNavigator();

function ScreenOneStack({ navigation }) {
    return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', 
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  export default ScreenOneStack;