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
import Header from "./Header"
import RenderItem from "./RenderItem";

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
    const keyExtractor = (item, index) => `${item.uid}_${index}`


    return (
        <View >
            <FlatList
                // numColumns="2"
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                data={data}
                renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>

    )
}


export default Home;