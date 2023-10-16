import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TabBotton from "../components/TabBotton";
import Topo from "../components/Topo";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Topo navigation={navigation} />

      <TabBotton navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
