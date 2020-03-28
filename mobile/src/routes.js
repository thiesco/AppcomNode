import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './page/incidents';
import Detail from './page/detail';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={ Incidents }/>
                <AppStack.Screen name="Detail" component={ Detail }/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}