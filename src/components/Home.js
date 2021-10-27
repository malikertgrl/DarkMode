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
        console.log("fetchDAta");
        const response = await fetch(api);
        const json = await response.json();


        try {
            await AsyncStorage.setItem(uid, JSON.stringify(json))
            console.log("setITem.");


        } catch (e) {
            console.log("addItemToLists hata", e);
        }

    }

    // const setItem = async (api) => {
    //     try {
    //         await AsyncStorage.setItem(uid, JSON.stringify(api))
    //         console.log("set edildi");
    //     } catch (error) {
    //         console.log("setITem", error);
    //     }
    // }

    const getItem = async () => {
        try {
            const get = await AsyncStorage.getItem(uid)
            const parse = JSON.parse(get)
            if (parse !== null) {
                setData(parse)
                console.log("getdata parse edildi");

            } else {
                console.log("else hata");
            }


        } catch (e) {
            console.log("getData", e);
        }
    }


    // burada apimizin istek attığı data arttığında render olacak onun dışında render olmayacak.
    useEffect(() => {
        getItem();

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
                    title="Set Item"
                    onPress={() => fetchData()}
                />
            </View>

        </View>

    )
}


export default Home;