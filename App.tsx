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
        <View style={styles.backdrop}>
          <View style={styles.contentContainer}>
            <Text>Hello from modal!</Text>
            <Button
              title={"Close Modal!"}
              onPress={() => setShouldShowModal(false)}
            ></Button>
          </View>
        </View>
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

  backdrop: {
    backgroundColor: "#00000099",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  contentContainer: {
    backgroundColor: "#f6f6f6",
    height: "20%",
    width: "80%",
    borderRadius: 12,
    padding: 20,

    justifyContent: "space-between",
    alignItems: "center",
  },
});
