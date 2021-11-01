import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const CustomButton = ({ title, onClick }) => {



    return (
        <View >
            <TouchableOpacity onPress={onClick} >
                <View style={Styles.customButtonStyle}>
                    <Text style={Styles.textStyle}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Styles = {
    customButtonStyle: {
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        marginHorizontal: "30%",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#64b5f6",
        elevation: 3
    },
    textStyle: {
        // fontSize: 15,
        fontWeight: "bold",
        color: "#64b5f6",
    }
}

export default CustomButton;