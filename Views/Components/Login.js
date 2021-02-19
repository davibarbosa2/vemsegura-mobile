import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/undraw_mobile_login_ikmv.png")}
        style={{
          width: "100%",
          height: 230,
        }}
      />
      <Text style={{ fontSize: 25, marginTop: 15 }}>Bem Vinda!</Text>
      <Text style={{ fontSize: 16, color: "gray", marginTop: 20 }}>
        Faça login para continuar
      </Text>

      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Usuario"
        autoCorrect={false}
      />
      <TextInput
        style={{
          marginTop: 40,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={true}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ae55f2",
            padding: 10,
            width: 300,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Fazer Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ marginTop: 20 }}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 60 }}>
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

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ color: "gray" }}>Não possui uma conta?</Text>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "bold" }}> Cadastre-se já</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
