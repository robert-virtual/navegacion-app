import { Button, StyleSheet, Text, View } from "react-native";

export function Ajustes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ajustes</Text>
      <Button
        title="Volver"
        onPress={() => {
          navigation.goBack();
        }}
      />
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
