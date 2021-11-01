import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Context from "../components/Context";
import Async_storage from '../components/Async_storage';
import HomeDetail from '../components/HomeDetail';
import {

    Mytab
} from "../tabNavigator"
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();






function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="LoginScreen">

                <Drawer.Screen name="HomeDetail" component={HomeDetail} options={{ headerShown: false, title: "FlatList" }} />
                <Drawer.Group screenOptions={{
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                    <Drawer.Screen name="Context" component={Context}
                        options={{
                            title: "ChangeTheme",

                        }} />
                    <Drawer.Screen name="Async_storage" component={Async_storage} options={{ title: "AsyncStorage" }} />
                </Drawer.Group>
                <Drawer.Screen name="Mytab" component={Mytab} options={{ headerShown: false, }} />


            </Drawer.Navigator>
        </NavigationContainer >
    );
}

export default Router;