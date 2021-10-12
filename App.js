import React from "react"
import { View } from "react-native"
import Home from "./src/components/Home"
import Header from "./src/components/Header"

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="ROBOTS" />
      <Home />
    </View>
  )
}

export default App;