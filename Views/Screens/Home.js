import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Menu from "../Components/Menu";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Image
        source={require("../../assets/images/undraw_welcoming_xvuq.png")}
        style={{
          width: "100%",
          height: 300,
          marginTop: 70,
        }}
      />
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/logo-vemsegura.png")}
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
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            textAlign: "center",
            marginHorizontal: 20,
            marginTop: 15,
          }}
        >
          Somos uma plataforma que visa passar conhecimento e aumentar as
          denúncias de assédio no transporte público da cidade do Rio de
          Janeiro.
        </Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}></View>
      </View>
      <Menu />
    </View>
  );
}
