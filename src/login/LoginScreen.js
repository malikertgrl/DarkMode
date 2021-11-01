import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { ThemeContext } from "../utils/Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Stack = createStackNavigator();


const LoginScreen = () => {
    const [val, setVal] = useState(false)
    const { isLogin, toggleLogin } = useContext(ThemeContext);


    const getITem = async () => {
        const value = await AsyncStorage.getItem("login")
        const parse = await JSON.parse(value)
        parse && setVal(parse) || console.log({ parse });
    }
    useEffect(() => {
        getITem()
    }, [isLogin])


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={val ? "LoginPage" : "HomePage"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginScreen