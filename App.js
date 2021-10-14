import React from "react"
import { View } from "react-native"
import Router from "./src/navigation/Router"

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Router />
      {/* <Header title="ROBOTS" />
      <Home /> */}
    </View>
  )
}

export default App;