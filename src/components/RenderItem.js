import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Config from "../Config"

const RenderItem = (props) => {
    console.log("first_name", props.item.first_name);
    return (
        <TouchableOpacity
            onPress={() => console.log("tıklandı")}
        >
            <Image
                source={{ uri: props.item.avatar }}
                style={Config.Styles.imageStyle}

            />
            <Text style={Config.Styles.textStyle}>
                {props.item.first_name} {props.item.last_name}
            </Text>
        </TouchableOpacity>
    )
}

export default RenderItem;