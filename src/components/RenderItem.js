import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Config from "../Config"

const RenderItem = ({ item, navigation }) => {
    console.log("first_name", item.first_name);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
        >
            <Image
                source={{ uri: item.avatar }}
                style={Config.Styles.imageStyle}

            />
            <Text style={Config.Styles.textStyle}>
                {item.first_name} {item.last_name}
            </Text>
        </TouchableOpacity>
    )
}

export default RenderItem;