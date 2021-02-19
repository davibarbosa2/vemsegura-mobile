import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Cadastro({ navigation }) {
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
      <Text style={{ fontSize: 22, marginTop: 10 }}>
        Vamos realizar seu cadastro!
      </Text>
      <Text style={{ fontSize: 16, color: "gray", marginTop: 10 }}>
        Preencha os campos com seus dados.
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

        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ color: "gray" }}>Já possui uma conta?</Text>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontWeight: "bold" }}> Faça já o login</Text>
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
