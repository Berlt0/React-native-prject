import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from './HomePage';

const Navigator = () => {

const Stack= createNativeStackNavigator();
return (
    <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Group>
            <Stack.Screen name='Home' component={HomePage}/>
        </Stack.Group>
    </Stack.Navigator>

    )
}

export default Navigator;