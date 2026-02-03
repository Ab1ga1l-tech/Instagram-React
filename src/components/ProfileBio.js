import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.nome}>Abigail Dev</Text>
      <Text>💻 Sistemas para Internet</Text>
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
