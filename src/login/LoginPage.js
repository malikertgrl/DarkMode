import React, { useState, useContext } from "react";
import { View, Text, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import { ThemeContext } from "../utils/Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



const LoginPage = ({ navigation }) => {
    const { isLogin, toggleLogin } = useContext(ThemeContext);


    const logIn = async () => {
        await toggleLogin();
        await AsyncStorage.setItem("login", JSON.stringify(isLogin))
        return (

            navigation.navigate("HomePage")

        )

    }



    // navigation.navigate("HomePage", { user: "Malik Ertuğrul" })



    return (
        console.log("login", { isLogin }) ||
        <View >
            <Text >Log in Page</Text>
            <CustomButton title="Giriş Yap" onClick={() => logIn()} />
        </View>
    )
}

export default LoginPage;