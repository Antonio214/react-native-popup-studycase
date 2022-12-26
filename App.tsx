import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={"Open Modal!"}
        onPress={() => setShouldShowModal(true)}
      ></Button>

      <Modal visible={shouldShowModal}>
        <Text>Hello from modal!</Text>
        <Button
          title={"Close Modal!"}
          onPress={() => setShouldShowModal(false)}
        ></Button>
      </Modal>
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
