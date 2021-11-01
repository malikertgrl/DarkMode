import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, Image, useColorScheme } from "react-native";
import Config from "../Config";

const Detail = ({ route, navigation }) => {

    useLayoutEffect(() => {
        // navigation.setOptions({ title: route.params && `${route.params.firstName} ${route.params.secondName}` })

        navigation.setOptions({ title: `${route?.params?.firstName} ${route?.params?.secondName}` })
    }, [navigation, route])
    return (
        <View style={Config.Styles.detailContainerStyle}>
            <Image
                source={{ uri: route?.params?.avatar }}
                style={Config.Styles.imageDetailStyle}
            />
            <Text style={Config.Styles.textStyle}>
                {route?.params?.firstName} {route?.params?.secondName}
            </Text>
        </View>
    )
}

export default Detail;