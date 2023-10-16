import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import StackRoutes from "./StackRoutes";

const Drawer = createDrawerNavigator();

import Home from "../screens/home";
import Icones from "../screens/icones";
import Teste1 from "../screens/teste1";

import { SafeAreaView, View, Text, Image } from "react-native";

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fffffff5",
        },
      }}
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/logo.png")}
                style={{ width: 150, height: 100 }}
                resizeMode="contain"
              />
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerActiveBackgroundColor: "#00305318",
          drawerActiveTintColor: "#003053",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={30} color="#003053" />
          ),
        }}
        component={StackRoutes}
      />
      <Drawer.Screen
        name="Sobre"
        options={{
          drawerLabel: "Teste",
          title: "Home",
          drawerActiveBackgroundColor: "#00305318",
          drawerActiveTintColor: "#003053",
          drawerIcon: () => (
            <FontAwesome name="star" size={30} color="#003053" />
          ),
        }}
        component={Teste1}
      />
      <Drawer.Screen
        name="Configuração"
        options={{
          drawerLabel: "Configuração",
          title: "Configuração",
          drawerActiveBackgroundColor: "#00305318",
          drawerActiveTintColor: "#003053",
          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={30} color="#003053" />
          ),
        }}
        component={Teste1}
      />
      <Drawer.Screen
        name="customizar"
        options={{
          drawerLabel: "Customizar",
          title: "Customizar",
          drawerActiveBackgroundColor: "#00305318",
          drawerActiveTintColor: "#003053",
          drawerIcon: () => (
            <MaterialIcons
              name="dashboard-customize"
              size={30}
              color="#003053"
            />
          ),
        }}
        component={Teste1}
      />
      <Drawer.Screen
        name="contato"
        options={{
          drawerLabel: "Contato",
          title: "Contato",
          drawerActiveBackgroundColor: "#00305318",
          drawerActiveTintColor: "#003053",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="message-alert-outline"
              size={30}
              color="#003053"
            />
          ),
        }}
        component={Teste1}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
