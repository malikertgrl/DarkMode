import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import { ThemeContext } from "../utils/Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



const HomePage = ({ navigation, route }) => {
    const { isLogin, toggleLogin } = useContext(ThemeContext);



    const logOut = async () => {
        await toggleLogin();
        await AsyncStorage.setItem("login", JSON.stringify(isLogin))
        return (

            navigation.navigate("LoginPage")
        )
    }

    return (
        console.log("home", { isLogin }) ||
        <View>
            <Text>Home Page</Text>
            <Text>kullanıcı: {route.params ? route.params.user : "Anonim"}</Text>
            <CustomButton title="Çıkış Yap" onClick={() => logOut()} />

        </View>
    )
}

export default HomePage;