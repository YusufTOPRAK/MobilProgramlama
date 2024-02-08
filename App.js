import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import KayitEkrani from "./src/screens/KayitEkrani";
import OyunlarEkrani from "./src/screens/oyunlarekrani";
import SayiBul from "./src/screens/SayiBul";
import YaziTura from "./src/screens/Yazi-Tura";
import SayisalLoto from "./src/screens/SayisalLoto"
import Cark from "./src/screens/Cark"

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="KayitEkrani" component={KayitEkrani}/>
        <Stack.Screen name="OyunlarEkrani" component={OyunlarEkrani}/>
        <Stack.Screen name="SayiBulEkrani" component={SayiBul}/>
        <Stack.Screen name="YaziTuraEkrani" component={YaziTura}/>
        <Stack.Screen name="SayisalLotoEkrani" component={SayisalLoto}/>
        <Stack.Screen name="CarkEkrani" component={Cark}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;