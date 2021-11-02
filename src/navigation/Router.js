import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Context from "../components/Context";
import Async_storage from '../components/Async_storage';
import HomeDetail from '../components/HomeDetail';
import {

    Mytab
} from "../tabNavigator"
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Drawer = createDrawerNavigator();






function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="LoginScreen"
                screenOptions={{
                    drawerActiveBackgroundColor: "#ff6659",
                    drawerActiveTintColor: "#fff",
                    overlayColor: "#c0b3c2",
                    drawerHideStatusBarOnOpen: "false"
                }}>

                <Drawer.Screen
                    name="HomeDetail"
                    component={HomeDetail}
                    options={{
                        headerShown: false,
                        title: "FlatList",
                        drawerIcon: ({ focused }) => (

                            <FontAwesome5 name="home"
                                size={focused ? 25 : 20}
                                color={focused ? "#fff" : "gray"} />
                        )
                    }} />
                <Drawer.Group screenOptions={{
                    headerStyle: {
                        backgroundColor: '#ef5350'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                    <Drawer.Screen
                        name="Context"
                        component={Context}
                        options={{
                            title: "ChangeTheme",
                            drawerIcon: ({ focused }) => (

                                <FontAwesome5 name="react"
                                    size={focused ? 25 : 20}
                                    color={focused ? "#fff" : "gray"} />
                            )



                        }} />
                    <Drawer.Screen name="Async_storage" component={Async_storage}
                        options={{
                            title: "AsyncStorage",
                            drawerIcon: ({ focused }) => (

                                <FontAwesome5 name="tablet"
                                    size={focused ? 25 : 20}
                                    color={focused ? "#fff" : "gray"} />
                            )


                        }} />
                </Drawer.Group>
                <Drawer.Screen name="Mytab" component={Mytab} options={{
                    headerShown: false,
                    drawerIcon: ({ focused }) => (

                        <FontAwesome5 name="magic"
                            size={focused ? 25 : 20}
                            color={focused ? "#fff" : "gray"} />
                    )

                }} />


            </Drawer.Navigator>
        </NavigationContainer >
    );
}

export default Router;