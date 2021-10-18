import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Config from "../Config"

const RenderItem = ({ item, navigation }) => {
    // console.log("first_name", item.first_name);
    return (


        <View >
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Detail', {
                        firstName: item.first_name,
                        secondName: item.last_name,
                        avatar: item.avatar
                    });
                }}
            >
                <View style={Config.Styles.Card}>

                    <Image
                        source={{ uri: item.avatar }}
                        style={Config.Styles.imageStyle}

                    />
                    <Text style={Config.Styles.textStyle}>
                        {item.first_name} {item.last_name}
                    </Text>

                </View>

            </TouchableOpacity>
        </View>

    )
}


export default RenderItem;