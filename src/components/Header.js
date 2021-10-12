import React from "react"
import { View, Text } from "react-native"
import Config from "../Config"

const Header = ({ title }) => {
    return (
        <View style={Config.Styles.headerViewStyle} >
            <Text style={Config.Styles.headerTextStyle}> {title}</Text>
        </View>
    )
}
export default Header;