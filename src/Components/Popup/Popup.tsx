// Popup.tsx

import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

type Props = {
  visible: boolean;
  closeCallback: () => void;
};

const Popup = ({ visible, closeCallback }: Props) => {
  return (
    <Modal visible={visible}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeCallback}
        style={styles.backdrop}
      >
        <View
          style={styles.contentContainer}
          onStartShouldSetResponder={(event) => true}
          onTouchEnd={(e) => {
            e.stopPropagation();
          }}
        >
          <Text>Hello from modal!</Text>
          <Button title={"Close Modal!"} onPress={closeCallback}></Button>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
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
