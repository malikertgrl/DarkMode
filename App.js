import 'react-native-gesture-handler';
import React from "react"
import { View } from "react-native"
import Router from "./src/navigation/Router"
import { ThemeProvider } from "./src/utils/Theme/ThemeContext"
import LoginScreen from './src/login/LoginScreen';

const App = () => {
  return (
    <ThemeProvider style={{ flex: 1 }}>
      {/* <Router /> */}
      <LoginScreen />
    </ThemeProvider>
  )
}

export default App;