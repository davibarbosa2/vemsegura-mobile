import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.bottomActions,
        {
          paddingHorizontal: 20,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <SimpleLineIcons
            name="login"
            size={24}
            color="black"
            style={{
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          />
          <Text style={{ textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.icon]}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Ionicons name="person-circle" size={24} color="#ae55f2" />
            <Text>Cadastro</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.icon, { marginHorizontal: 20 }]}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.navigate("Denuncia")}
          >
            <Entypo name="warning" size={24} color="red" />
            <Text>Denúncia</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.icon]}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.navigate("LeiseArtigos")}
          >
            <Octicons name="law" size={24} color="#ae55f2" />
            <Text>Leis</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
// até a penultima view

const styles = StyleSheet.create({
  // inicio estilos menu footer
  icon: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomActions: {
    height: 80,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
