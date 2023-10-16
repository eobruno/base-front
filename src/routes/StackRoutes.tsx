import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../screens/home";
import Icones from "../screens/icones";
import Teste1 from "../screens/teste1";

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Abrir" component={Icones} />
      <Stack.Screen name="LerMrz" component={Teste1} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
