// src/Components/HelloWorldPopup/HelloWorldPopup.tsx

import { Button, StyleSheet, Text } from "react-native";
import Popup, { PopupProps } from "../Popup/Popup";

interface Props extends PopupProps {}

const HelloWorldPopup = ({ closeCallback, ...rest }: Props) => {
  return (
    <Popup closeCallback={closeCallback} {...rest}>
      <Text>Hello from modal!</Text>
      <Button title={"Close Modal!"} onPress={closeCallback}></Button>
    </Popup>
  );
};

export default HelloWorldPopup;

const styles = StyleSheet.create({});
