// src/Components/TwoButtonsLayoutPopup.tsx

import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Popup, { PopupProps } from "../Popup/Popup";

interface Props extends PopupProps {
  confirmCallback: () => void;
}

const TwoButtonsLayoutPopup = ({
  confirmCallback,
  closeCallback,
  ...rest
}: Props) => {
  return (
    <Popup closeCallback={closeCallback} {...rest}>
      <Text>Confirma sua ação?</Text>
      <View style={styles.buttonRow}>
        <Button title="Confirmar" onPress={confirmCallback}></Button>
        <Button color={"red"} title="Cancelar" onPress={closeCallback}></Button>
      </View>
    </Popup>
  );
};

export default TwoButtonsLayoutPopup;

const styles = StyleSheet.create({
  buttonRow: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
