import React from 'react';
import Home from './pages/Home';
import Results from './pages/Results';
import Vote from './pages/Vote';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Vote" component={Vote} />
                <Stack.Screen name="Results" component={Results} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
