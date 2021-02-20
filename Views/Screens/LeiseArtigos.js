import * as React from "react";
import { useState } from "react";
import {
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  SimpleLineIcons,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const articleParagraphs = [
  "--------------------------------------------------------------------------------",
  "Importunação Sexual:",
  "Qualquer ato libidinoso sem o consentimento da vítima (como passar a mão em partes íntimas, esfregar o órgão sexual na outra pessoa, roubar um beijo). Não exige relação de hierarquia, por exemplo",
  "Enquadrado como crime pela Lei n°13.718/2018 — pena pode variar entre 1 e 5 anos, sendo aumentada em caso de agravantes. ",
  "--------------------------------------------------------------------------------",
  "Assédio Sexual: ",
  "Ato libidinoso sem o consentimento da vítima, dentro de uma relação de hierarquia, muito comum no ambiente de trabalho. Pode ou não ter contato físico. ",
  "Enquadrado como crime pelo artigo 216 do Código Penal — pena pode variar entre 1 e 2 anos e prisão.",
  "--------------------------------------------------------------------------------",
  "Estupro: ",
  "Constranger alguém, mediante violência ou grave ameaça, para obter conjunção carnal.",
  "Enquadrado como crime hediondo pelo artigo 213 do Código Penal — pena pode variar de 6 a 10 anos de reclusão para o criminoso, aumentando para 8 a 12 anos se há lesãocorporal da vítima ou se a vítima possui entre 14 a 18 anos de idade, e para 12 a 30 anos, se a conduta resulta em morte.",
  "--------------------------------------------------------------------------------",
  "Estes são os principais crimes relacionados ao assédio sexual no Brasil.",
  "Nosso objetivo é lutar para que isso não aconteça com nenhuma mulher!",
  "",
  "DENUNCIE!",
  "",
];

export default function LeiseArtigos({ navigation }) {
  const [bottomActions, setBottomActions] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const topEdge = bottomActions?.y - height + bottomActions?.height;
  const inputRange = [-1, 0, topEdge - 60, topEdge, topEdge + 1];
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ padding: 20 }}
      >
        <Text style={styles.heading}>Leis e Artigos</Text>
        {articleParagraphs.map((text, index) => {
          return (
            <View key={index}>
              {index % 30 === 0 && (
                <Image
                  style={styles.image}
                  source={require("../../assets/images/artigo1.jpg")}
                />
              )}
              <Text style={styles.paragraph}>{text}</Text>
            </View>
          );
        })}
        <View
          onLayout={(ev) => {
            setBottomActions(ev.nativeEvent.layout);
          }}
          style={[styles.bottomActions, { backgroundColor: "#fff" }]}
        />
        <View>
          <Text style={styles.featuredTitle}>Veja Mais</Text>
          {articleParagraphs.slice(2, 4).map((text, index) => {
            return (
              <View
                key={`featured-${index}`}
                style={{ flexDirection: "row", marginBottom: 10 }}
              >
                <Image
                  source={require("../../assets/images/artigo1.jpg")}
                  style={styles.featuredImage}
                />
                <Text numberOfLines={3} style={styles.paragraph}>
                  {text}
                </Text>
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>
      {bottomActions && (
        <Animated.View // aqui é menu - footer
          style={[
            styles.bottomActions,

            {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              paddingHorizontal: 20,
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange,
                    outputRange: [0, 0, 0, 0, -0.9],
                  }),
                },
              ],
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <SimpleLineIcons
                name="login"
                size={24}
                color="#000"
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
            <Animated.Text
              style={{
                opacity: scrollY.interpolate({
                  inputRange,
                  outputRange: [0, 0, 0, 1, 1],
                }),
              }}
            >
              Login
            </Animated.Text>
          </View>
          <Animated.View style={{ flexDirection: "row" }}>
            <Animated.View
              style={[
                styles.icon,
                {
                  opacity: scrollY.interpolate({
                    inputRange,
                    outputRange: [0, 0, 0, 1, 1],
                  }),
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Cadastro")}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Ionicons name="person-circle" size={24} color="#ae55f2" />
                <Text>Cadastro</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                styles.icon,
                {
                  marginHorizontal: 10,
                  transform: [
                    {
                      translateX: scrollY.interpolate({
                        inputRange,
                        outputRange: [60, 60, 60, 0, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Denuncia")}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Entypo name="warning" size={24} color="red" />
                <Text>Denúncia</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                styles.icon,
                {
                  opacity: scrollY.interpolate({
                    inputRange,
                    outputRange: [0, 0, 0, 1, 1],
                  }),
                },
              ]}
            >
              <Octicons name="law" size={24} color="#ae55f2" />
              <Text>Leis</Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      )}
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
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  }, // fim estilos manu footer
  featuredImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 20,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: height * 0.4,
    resizeMode: "cover",
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginVertical: 20,
  },
  heading: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 20,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#AE55F2",
    letterSpacing: 7,
    lineHeight: 52,
  },
  paragraph: {
    flex: 1,
    marginBottom: 20,
    // fontFamily: 'Georgia'
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});
