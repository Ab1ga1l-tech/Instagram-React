import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.nome}>Viagens</Text>
      <Text>Por aí ...</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  nome: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
