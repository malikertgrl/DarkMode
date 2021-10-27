import React, { useState } from "react"
import { View, Text, Button } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./AuthStack";
import UserStack from "./UserStack"



const Stack = createStackNavigator();





const LoginScreen = () => {
    const isLogin = { isLogin }
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={isLogin ? "UserStack" : "AuthStack"}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="UserStack" component={UserStack} options={{ headerShown: false }} />
            </Stack.Navigator>


        </NavigationContainer>

    )
}

export default LoginScreen;