import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, Switch } from "react-native";
import { ThemeContext, ThemeProvider, useThemeContext } from "../utils/Theme/ThemeContext";


const Context = () => {
    const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);
    console.log({ isDarkMode, theme, toggleTheme });
    return (
        <View style={[{ flex: 1, justifyContent: "flex-end", alignItems: "center" }, { backgroundColor: theme.backgroundColor }]}>
            <View style={{ flexDirection: "row", alignItems: "center", margin: 20 }}>
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