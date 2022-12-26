//App.tsx
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Popup from "./src/Components/Popup/Popup";

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={"Open Modal!"}
        onPress={() => setShouldShowModal(true)}
      ></Button>

      <Popup
        visible={shouldShowModal}
        closeCallback={() => setShouldShowModal(false)}
      ></Popup>
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
