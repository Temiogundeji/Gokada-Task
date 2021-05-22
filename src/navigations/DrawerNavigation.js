import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from  './CustomSidebarMenu';
const Drawer = createDrawerNavigator();

import ScreenOneStack from '../screen-stack/screenOneStack';
import ScreenTwoStack from '../screen-stack/screenTwoStack';
import ScreenThreeStack from '../screen-stack/screenThreeStack';

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 5 },
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen
            name="FirstPage"
            options={{ drawerLabel: 'Home' }}
            component={ScreenOneStack}
            />
            <Drawer.Screen
            name="SecondPage"
            options={{ drawerLabel: 'Posts' }}
            component={ScreenTwoStack}
            />
            <Drawer.Screen
            name="ThirdPage"
            options={{ drawerLabel: 'About' }}
            component={ScreenThreeStack}
            />
      </Drawer.Navigator>
    );
}

export default DrawerNavigation;