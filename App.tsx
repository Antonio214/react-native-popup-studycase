//App.tsx
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import AttentionPopup from "./src/Components/AttentionPopup.tsx/AttentionPopup";
import HelloWorldPopup from "./src/Components/HelloWorldPopup/HelloWorldPopup";
import TwoButtonsLayoutPopup from "./src/Components/TwoButtonsLayoutPopup/TwoButtonsLayoutPopup";

export default function App() {
  const [shouldShowHelloModal, setShouldShowHelloModal] = useState(false);

  const [shouldShowTwoBtnsModal, setShouldShowTwoBtnsModal] = useState(false);

  const [shouldShowRedModal, setShouldShowRedModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={"Open Hello Modal!"}
        onPress={() => setShouldShowHelloModal(true)}
      ></Button>

      <Button
        title={"Open 2 Buttons Modal!"}
        onPress={() => setShouldShowTwoBtnsModal(true)}
      ></Button>

      <Button
        title={"Open Red Text Modal!"}
        onPress={() => setShouldShowRedModal(true)}
      ></Button>

      <HelloWorldPopup
        visible={shouldShowHelloModal}
        closeCallback={() => setShouldShowHelloModal(false)}
      />

      <TwoButtonsLayoutPopup
        confirmCallback={() => console.log("Confirmed by user!")}
        visible={shouldShowTwoBtnsModal}
        closeCallback={() => setShouldShowTwoBtnsModal(false)}
      />

      <AttentionPopup
        message="Cuidado!"
        visible={shouldShowRedModal}
        closeCallback={() => setShouldShowRedModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
