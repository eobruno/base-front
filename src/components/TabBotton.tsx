import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";

const TabBotton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Botão clicado")}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <FontAwesome name="id-card" size={50} color="#003053" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Icones")}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Entypo name="camera" size={50} color="#003053" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Botão clicado")}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="cellphone-nfc"
            size={50}
            color="#003053"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#78787823",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 30,
    position: "absolute",
    borderRadius: 15,
    alignSelf: "center",
  },
});

export default TabBotton;
