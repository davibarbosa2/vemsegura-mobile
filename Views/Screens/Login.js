import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Menu from "../Components/Menu";

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
      <Text
        style={{
          fontSize: 25,
          marginTop: 25,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 25,
        }}
      >
        Bem Vinda!
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
      </View>
      <Menu />
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
