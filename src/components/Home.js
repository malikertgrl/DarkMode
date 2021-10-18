import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import Config from "../Config"
// import RenderItem from "./RenderItem";
import Header from "./Header"

const api = Config.apiURL;

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);

    const fetchData = () => {

        fetch(api)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((e) => console.log("fetch hatası", e))

    }


    useEffect(() => {

        fetchData();

    }, [])


    const ListEmptyComponent = () => {
        return (
            <View style={{ marginTop: 250 }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        )

    }


    return (
        <View >


            <FlatList
                showsVerticalScrollIndicator={false}
                // numColumns="2"
                keyExtractor={(item, index) => `${item.uid}_${index}`}
                data={data}
                renderItem={({ item }) => {
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
                }
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>

    )
}


export default Home;