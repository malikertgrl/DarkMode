import React, { useContext, memo } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../utils/Theme/ThemeContext";



// export const Welcome = ({ text }) => {
//     return (
//         <View style={textStyle}>
//             <Text>{text}</Text>
//         </View>
//     )
// }

const CustomText = ({ text, customStyle }) => {

    const { theme } = useContext(ThemeContext);
    console.log("customText calıştı text değişti");

    return (
        <View>
            <Text style={[customStyle, { color: theme.color, textTransform: "capitalize" }]}>{text}</Text>
        </View>
    )
}

// const styles = {
//     textStyle: {
//         color: theme.color
//     }
// }

export default memo(CustomText, (prevProps, nextProps) => {
    if (prevProps.text !== nextProps.text) {
        return false
    }
    return true
});