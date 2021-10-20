import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const CustomButton = ({ title }) => {
    return (
        <View style={Styles.customButtonStyle}>
            <TouchableOpacity>
                <View>
                    <Text style={Styles.textStyle}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Styles = {
    customButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        marginHorizontal: "30%",
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#64b5f6",
        elevation: 3
    },
    textStyle: {
        // fontSize: 15,
        fontWeight: "bold",
        color: "#000"
    }
}

export default CustomButton;