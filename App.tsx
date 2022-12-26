//App.tsx
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import TwoButtonsLayoutPopup from "./src/Components/TwoButtonsLayoutPopup/TwoButtonsLayoutPopup";

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={"Open Modal!"}
        onPress={() => setShouldShowModal(true)}
      ></Button>

      <TwoButtonsLayoutPopup
        visible={shouldShowModal}
        closeCallback={() => setShouldShowModal(false)}
        confirmCallback={() => {
          console.log("Confirm");
          setShouldShowModal(false);
        }}
      ></TwoButtonsLayoutPopup>
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
