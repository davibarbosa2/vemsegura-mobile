import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Image
        source={require("../assets/images/undraw_welcoming_xvuq.png")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 70,
        }}
      />
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Image
          source={require("../assets/images/logo-vemsegura.png")}
          style={{ height: 60, width: 70, marginBottom: 30 }}
        />
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Olá!</Text>
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            textAlign: "center",
            marginHorizontal: 20,
            marginTop: 15,
            fontWeight: "bold",
          }}
        >
          Seja bem vinda(o) ao Vem Segura
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            textAlign: "center",
            marginHorizontal: 20,
            marginTop: 15,
          }}
        >
          Seu parceiro contra o assédio.
        </Text>

        <View style={{ flexDirection: "row", margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#ae55f2",
              padding: 10,
              width: 150,
              borderRadius: 30,
              marginHorizontal: "5%",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              width: 150,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "#000",
              marginHorizontal: "5%",
            }}
          >
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Cadastro
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, marginTop: 10 }}>Ou</Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: "#3f51b5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
              f
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: "#f44336",
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
              G
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              backgroundColor: "#1565c0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
              In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
