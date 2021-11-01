import React from "react";
import { View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Page1,
    Page2,
    Navigation6x,
} from "../tabNavigator"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();


const Mytab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarStyle: { backgroundColor: 'tomato' },
                // headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray"
            }}>
            <Tab.Screen
                name="Navigation6x"
                component={Navigation6x}
                options={{
                    headerStyle: {
                        backgroundColor: 'blue'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    title: "home",
                    tabBarLabel: "Home",
                    tabBarBadge: 2,
                    tabBarIcon: ({ focused, color, size }) => (

                        <FontAwesome5 name="home"
                            size={size}
                            color={focused ? "blue" : null} />
                    )
                }}
            />
            <Tab.Screen
                name="Page1"
                component={Page1}
                options={{
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIcon: ({ color, size, focused }) => (

                        <FontAwesome5 name="ambulance"
                            size={size}
                            color={focused ? "red" : null} />


                    )
                }} />
            <Tab.Screen
                name="Page2"
                component={Page2}
                options={{
                    headerStyle: {
                        backgroundColor: 'green'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarLabel: "angellist",
                    tabBarIcon: ({ focused, color, size }) => (

                        <FontAwesome5 name="angellist"
                            size={size}
                            color={focused ? "green" : null} />

                    )
                }} />

        </Tab.Navigator>

    )
}
export { Mytab }