import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TabBotton from "../components/TabBotton";
import Topo from "../components/Topo";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Topo navigation={navigation} />
      <View style={styles.container}><Text>Teste</Text></View>
      

      <TabBotton navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
});

export default Home;
