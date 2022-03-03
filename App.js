import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ajustes } from "./pages/Ajustes";
import { Home } from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ajustes" component={Ajustes} />
        <Stack.Screen name="Ajustes" component={Ajustes} />
        <Stack.Screen name="Ajustes" component={Ajustes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
