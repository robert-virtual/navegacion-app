import { Button, StyleSheet, Text, View } from "react-native";
import {} from "react-native-web";

export function Home({ navigation }) {
  function navegar() {
    navigation.navigate("Ajustes");
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Ajustes" onPress={navegar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
