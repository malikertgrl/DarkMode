import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";


const UserStack = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true)

    const logOut = async () => {
        navigation.navigate("AuthStack");
        await AsyncStorage.setItem("login", JSON.stringify({ isLogin }))
        console.log("setItem", { isLogin });


    }
    const getItem2 = async () => {
        const get = await AsyncStorage.getItem("login")
        const parse = await JSON.parse(get)
        if (parse) {
            setIsLogin(false);
            console.log(parse);


        }



    }


    useEffect(() => {
        getItem2()
    }, [])

    return (
        <View>
            <Text>Çıkış yap</Text>
            <CustomButton title="çıkış yap" onPress={async () => await logOut()} />

        </View>
    )
}

export default UserStack;