import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";



const AuthStack = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(false)
    const logIn = async () => {
        navigation.navigate("UserStack");
        await AsyncStorage.setItem("login", JSON.stringify({ isLogin }))
        console.log("setItem", { isLogin });


    }
    const getItem = async () => {
        const get = await AsyncStorage.getItem("login")
        const parse = await JSON.parse(get)
        if (parse) {
            setIsLogin(true)
            console.log(parse);
        }

    }


    useEffect(() => {
        getItem()
    }, [])

    return (

        <View>
            <Text>giriş yap</Text>
            <CustomButton title="giriş yap" onPress={async () => await logIn()} />
        </View>
    )
}

export default AuthStack;