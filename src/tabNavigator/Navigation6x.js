import React from "react"
import { View, Text, Button } from "react-native"
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

const Navigation6x = ({ navigation }) => {
    // console.log("props", navigation);
    return (
        <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <CustomText text="Home Page" />

            </View>
            <CustomButton title="login" onPress={() => navigation.navigate('Page1')} />
        </View>
    )
}

export { Navigation6x };