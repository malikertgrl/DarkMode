import React from "react";
import { View, Text, Image } from "react-native";
import Config from "../Config";

const Detail = ({ route }) => {
    return (
        <View style={Config.Styles.detailContainerStyle}>
            <Image
                source={{ uri: route.params.avatar }}
                style={Config.Styles.imageDetailStyle}
            />
            <Text style={Config.Styles.textStyle}>
                {route.params.firstName} {route.params.secondName}
            </Text>
        </View>
    )
}

export default Detail;