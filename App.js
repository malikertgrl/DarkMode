import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  useColorScheme
} from "react-native";
import Config from "./src/Config";

// flatlist
const api = Config.apiURL

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  const isDarkmode = useColorScheme()

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const json = await response.json();
      // console.log(JSON.stringify(json, null, 4));
      setData(json);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }

    // fetch(apiURL)
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((e) => console.log(e))

  }

  useEffect(() => {

    fetchData();
    console.log({ isDarkmode });

  }, [])

  return (
    <View style={Config.Styles.Container}>
      {
        loading ?
          <View >
            <ActivityIndicator size="large" color="#FF0000" />
          </View> :
          <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            // numColumns="2"
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.uid}`}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Image
                    source={{ uri: item.avatar }}
                    style={Config.Styles.imageStyle}
                  />
                  <Text style={Config.Styles.text}>
                    {item.first_name} {item.last_name}
                  </Text>

                </View>
              )
            }}
          // ListEmptyComponent={
          //   <View style={{ justifyContent: "flex-end" }}>
          //     <ActivityIndicator size="large" />
          //   </View>
          // }
          />

      }

    </View>

  )
}


export default App;