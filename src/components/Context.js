import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, Switch, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Config from "../Config";
import { ThemeContext } from "../utils/Theme/ThemeContext";
import CustomButton from "./CustomButton";



const Context = () => {
    const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);
    console.log({ isDarkMode, theme, toggleTheme });
    return (
        <View style={[Config.Styles.contextCard, { backgroundColor: theme.backgroundColor }]}>
            <View>
                <TextInput
                    placeholder="adınızı giriniz"
                    style={{ borderBottomWidth: 1, margin: 20, paddingHorizontal: 60, }}
                />
                <CustomButton title="Tıkla" />
            </View>

            <View style={{ flex: 2, flexDirection: "row", alignItems: "flex-end", justifyContent: "center", alignSelf: "center", margin: 20 }}>
                <Text style={{ color: theme.color }}>Dark Mode: </Text>
                <Switch
                    style={{ marginHorizontal: 5 }}
                    value={isDarkMode}
                    onValueChange={() => toggleTheme()}
                />
            </View>

        </View >
    )
}
export default Context;