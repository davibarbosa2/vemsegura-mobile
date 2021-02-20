import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Menu from "../Components/Menu";

export default function Denuncia() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/undraw_Notify_re_65on.png")}
        style={{
          width: "100%",
          height: 180,
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
        Preencha os campos abaixo com detalhes do ocorrido.
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Nome"
          autoCorrect={false}
        />
        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Local"
          autoCorrect={false}
        />
        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Telefone"
          autoCorrect={false}
        />
        <TextInput
          style={{
            marginTop: 10,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          placeholder="Descrição do occorrido"
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
              marginTop: 30,
            }}
            onPress={() => alert("Denuncia enviada!")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Enviar
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
