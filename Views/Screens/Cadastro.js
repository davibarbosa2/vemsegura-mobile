import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Menu from "../Components/Menu";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/undraw_authentication_fsn5.png")}
        style={{
          width: "100%",
          height: 210,
          marginTop: 10,
        }}
      />
      <Text
        style={{
          fontSize: 22,
          marginTop: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Vamos realizar seu cadastro!
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
          marginTop: 20,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Senha"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <TextInput
        style={{
          marginTop: 20,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="E-mail"
        autoCorrect={false}
      />
      <TextInput
        style={{
          marginTop: 20,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
        placeholder="Telefone"
        autoCorrect={false}
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
            marginTop: 0,
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
            Finalizar Cadastro
          </Text>
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
