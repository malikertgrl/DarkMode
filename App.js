import 'react-native-gesture-handler';
import React from "react"
import { View } from "react-native"
import Router from "./src/navigation/Router"
import { ThemeProvider } from "./src/utils/Theme/ThemeContext"


const App = () => {
  return (
    <ThemeProvider style={{ flex: 1 }}>
      <Router />
    </ThemeProvider>
  )
}

export default App;