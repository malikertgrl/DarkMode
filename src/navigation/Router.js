import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from "../components/Home";
import Detail from "../components/Detail";
import Context from "../components/Context";
import Async_storage from '../components/Async_storage';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Config from '../Config';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function HomeDetail({ navigation }) {
    return (

        <Stack.Navigator screenOptions={{
            gestureDirection: 'horizontal',
            gestureEnabled: true,
        }}>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Robots",
                    headerLeft: () => (
                        <View style={Config.Styles.iconStyle}>
                            <FontAwesome5
                                onPress={() => navigation.openDrawer()}
                                name='bars'
                                size={20}
                                color="#fff"
                            />

                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}

            />
            <Stack.Screen
                name="Detail"
                component={Detail}

                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

        </Stack.Navigator>

    );
}

function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeDetail">
                <Drawer.Screen name="HomeDetail" component={HomeDetail} options={{ headerShown: false, title: "FlatList" }} />
                <Drawer.Screen name="Context" component={Context}
                    options={{
                        title: "ChangeTheme",
                        headerStyle: {
                            backgroundColor: 'red'
                        },
                        headerTitleAlign: "center",
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
                <Drawer.Screen name="Async_storage" component={Async_storage} options={{ title: "AsyncStorage" }} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}

export default Router;