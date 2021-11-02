import React from "react"
import { View, Text } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from "./Home"
import Detail from "./Detail"
import Config from "../Config";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';


const Stack = createStackNavigator();


const HomeDetail = ({ navigation }) => {
    return (

        <Stack.Navigator
            screenOptions={{
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
                        backgroundColor: '#ef5350'
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
                        backgroundColor: '#ef5350'
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

export default HomeDetail;