import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";


const key = "Async Storage"
const Async_storage = () => {

    const [inputValue, setInputValue] = useState();
    const [value, setValue] = useState();

    const setItem = async () => {
        console.log("setItem");
        try {
            await AsyncStorage.setItem(key, inputValue)
        } catch (error) {
            console.log("setItem", error);
        }

    }

    const getItem = async () => {

        try {
            const currentValue = await AsyncStorage.getItem(key)
            console.log("getITem", currentValue);
            setValue(currentValue)
        } catch (error) {
            console.log("error", error);
        }
    }

    const removeItem = async () => {

        try {
            const deletValue = await AsyncStorage.getItem(key)
            console.log("deletValue", deletValue);
            setValue(null)
        } catch (error) {
            console.log("error", error);
        }
    }

    // const mergeItem = async () => {
    //     try {
    //         const mergeITem = await AsyncStorage.mergeItem(key, inputValue)
    //         setValue(mergeITem)
    //     } catch (e) {
    //         log(e)
    //     }
    // }

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
            await getItem()
        } catch (e) {
            // clear error
        }

        console.log('Done.')
    }


    useEffect(() => {
        getItem()

    }, [])

    return (
        <View>
            {/* <Text>Async_storage</Text> */}


            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Current Value: {value}</Text>
            <TextInput
                placeholder="async storage kaydetmek istediğiniz texti girin"
                style={{ borderWidth: 1, marginHorizontal: 10, borderRadius: 15, marginTop: 10 }}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <View >
                <CustomButton title="setItem" onPress={() => setItem()} />
                <CustomButton title="getItem" onPress={() => getItem()} />
                <CustomButton title="removeItem" onPress={() => removeItem()} />
                <CustomButton title="clearAll" onPress={() => clearAll()} />


            </View>

        </View>
    )
}

export default Async_storage;