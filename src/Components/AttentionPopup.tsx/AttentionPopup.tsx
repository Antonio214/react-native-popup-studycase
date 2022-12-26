//src/Components/AttentionPopup.tsx

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Popup, { PopupProps } from "../Popup/Popup";

interface Props extends PopupProps {
  message: string;
}

const AttentionPopup = ({ message, ...rest }: Props) => {
  return (
    <Popup {...rest}>
      <View style={styles.container}>
        <Text style={styles.attentionText}>{message}</Text>
      </View>
    </Popup>
  );
};

export default AttentionPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  attentionText: {
    color: "red",
    fontSize: 20,
  },
});
