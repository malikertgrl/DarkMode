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
import CustomButton from "./CustomButton";
import Header from "./Header"
import RenderItem from "./RenderItem";


const api = Config.apiURL
const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(1);


    // const [loading, setLoading] = useState(false);

    const fetchData = () => {

        fetch(`${api}?size=${pageSize}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((e) => console.log("fetch hatası", e))

    }

    // burada apimizin istek attığı data arttığında render olacak onun dışında render olmayacak.
    useEffect(() => {
        console.log("useEffect çalıştı");
        fetchData();

    }, [pageSize])


    const ListEmptyComponent = () => {
        return (
            <View style={{ marginTop: 250 }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        )

    }
    const keyExtractor = (item, index) => `${item.uid}_${index}`


    return (
        <View style={{ flex: 1 }} >
            <FlatList
                // numColumns="2"
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                data={data}
                renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
                ListEmptyComponent={ListEmptyComponent}
            />
            <View>
                <CustomButton
                    title="Robot Ekle"
                    onPress={() => setPageSize(size => size + 1)}
                />
            </View>

        </View>

    )
}


export default Home;