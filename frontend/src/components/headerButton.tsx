import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

type ButtonProps = {
  titulo: string;
};

export default function HeaderButton({ titulo }: ButtonProps) {
  const [ButtonPressed, SetButtonPressed] = useState(true);

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: ButtonPressed ? "grey" : "green",
        },
      ]}
      onPress={() => {
        SetButtonPressed(!ButtonPressed);
      }}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: ButtonPressed ? "white" : "black",
          },
        ]}
      >
        {titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
  },
});
