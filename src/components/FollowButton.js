import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FollowButton({ seguindo, toggleSeguir }) {
  return (
    <TouchableOpacity
      style={[
        styles.botao,
        { backgroundColor: seguindo ? "#ccc" : "#3897f0" }
      ]}
      onPress={toggleSeguir}
    >
      <Text style={styles.texto}>
        {seguindo ? "Seguindo" : "Seguir"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },

  texto: {
    color: "white",
    fontWeight: "bold",
  },
});
