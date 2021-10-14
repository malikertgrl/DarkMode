import React from "react"
import { View, Text } from "react-native"
import Config from "../Config"

const Header = () => {
    return (
        <View style={Config.Styles.headerViewStyle} >
            <Text style={Config.Styles.headerTextStyle}> Robots </Text>
        </View>
    )
}
export default Header;