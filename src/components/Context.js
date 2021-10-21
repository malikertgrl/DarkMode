import React, { useContext, useRef, useEffect } from "react";
import { useState } from "react";
import { View, Text, Switch, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Config from "../Config";
import { ThemeContext } from "../utils/Theme/ThemeContext";
import CustomButton from "./CustomButton";
import CustomText, { Welcome } from "./CustomText";



const Context = () => {

    const { isDarkMode, theme, toggleTheme } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState("")
    // console.log({ isDarkMode, theme, toggleTheme });

    const inputRef = useRef(null);

    const focus = () => {
        if (inputRef?.current) {
            inputRef?.current.focus();
        }
    }

    const textLength = () => {
        return Alert.alert(`length: ${inputValue.length}`)
    }

    // useEffect(() => {
    //     focus();
    // }, [])

    return (
        <View style={[Config.Styles.contextCard, { backgroundColor: theme.backgroundColor }]}>
            <CustomText
                text="bu sayfada usecontext kullanıyoruz."
            />
            <View>
                <TextInput
                    value={inputValue}
                    onChangeText={val => setInputValue(val)}
                    ref={inputRef}
                    placeholder="adınızı giriniz:"
                    style={[Config.Styles.inputStyle, { color: theme.color, borderBottomColor: theme.borderBottomColor }]}
                />
                <TextInput
                    ref={inputRef}
                    placeholder="soyadınızı giriniz"
                    style={[Config.Styles.inputStyle, { color: theme.color, borderBottomColor: theme.borderBottomColor }]}
                />
                <CustomButton title="Tıkla" onPress={() => textLength()} />
            </View>

            <View style={Config.Styles.switchStyle}>
                <CustomText
                    customStyle={{ marginVertical: 5 }}
                    text="dark mode:"
                />
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