import AsyncStorage from "@react-native-async-storage/async-storage";
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
const uid = Config.uniqKey

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(1);


    // const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        const response = await fetch(api);
        const json = await response.json();
        // fetch(`${api}?size=${pageSize}`)
        // fetch(api)
        //     .then((response) => response.json())
        //     .then((json) => setData(json))
        //     .catch((e) => console.log("fetch hatası", e))
        try {
            await AsyncStorage.setItem(uid, JSON.stringify(json))
            console.log("set edildi");
        } catch (error) {
            console.log("setITem", error);
        }

    }
    const getItem = async () => {
        const robots = await AsyncStorage.getItem(uid)
        const parse = JSON.parse(robots)
        setData(parse);
    }

    // burada apimizin istek attığı data arttığında render olacak onun dışında render olmayacak.
    useEffect(() => {
        getItem()



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
                    onPress={() => fetchData()}
                />
            </View>

        </View>

    )
}


export default Home;