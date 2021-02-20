import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Views/Screens/Home";
import Login from "./Views/Screens/Login";
import Cadastro from "./Views/Screens/Cadastro";
import LeiseArtigos from "./Views/Screens/LeiseArtigos";
import Denuncia from "./Views/Screens/Denuncia";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LeiseArtigos"
          component={LeiseArtigos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Denuncia"
          component={Denuncia}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
