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
import RenderItem from "./RenderItem";

const api = Config.apiURL;

const Home = () => {
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
        <View style={{ margin: 40 }}>

            <FlatList
                // numColumns="2"
                keyExtractor={(item, index) => `${item.uid}_${index}`}
                data={data}
                renderItem={RenderItem}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>

    )
}


export default Home;