// src/Components/PopUp/Popup.tsx

import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";

export interface PopupProps {
  visible: boolean;
  closeCallback: () => void;
  children?: ReactNode;
}

const Popup = ({ visible, closeCallback, children }: PopupProps) => {
  return (
    <Modal visible={visible} transparent>
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
          {children}
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
