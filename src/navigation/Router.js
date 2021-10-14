import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from "../components/Home";
import Detail from "../components/Detail";




const Stack = createStackNavigator();


function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'ROBOTS',
                        headerStyle: {
                            backgroundColor: 'red',

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
        </NavigationContainer>
    );
}

export default Router;