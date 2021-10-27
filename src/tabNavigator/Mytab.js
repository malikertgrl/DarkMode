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
                tabBarStyle: { backgroundColor: 'tomato' },
                headerShown: false,
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray"
            }}>
            <Tab.Screen
                name="Navigation6x"
                component={Navigation6x}
                options={{
                    tabBarLabel: "Home",
                    tabBarBadge: 2,
                    tabBarIcon: ({ color, size }) => (

                        <FontAwesome5 name="home"
                            size={size}
                            color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Page1"
                component={Page1}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (

                        <FontAwesome5 name="ambulance"
                            size={size}
                            color={color} />
                        // color={focused ? "red" : null} />


                    )
                }} />
            <Tab.Screen
                name="Page2"
                component={Page2}
                options={{
                    tabBarLabel: "angellist",
                    tabBarIcon: ({ color, size }) => (

                        <FontAwesome5 name="angellist"
                            size={size}
                            color={color} />


                    )
                }} />

        </Tab.Navigator>

    )
}
export { Mytab }