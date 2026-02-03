import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("window").width / 3;

export default function PhotoGrid() {
  const fotos = Array.from({ length: 18 }).map(
    (_, i) => `https://picsum.photos/300/300?random=${i}`
  );

  return (
    <View style={styles.grid}>
      {fotos.map((foto, index) => (
        <Image
          key={index}
          source={{ uri: foto }}
          style={styles.foto}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  foto: {
    width: largura,
    height: largura,
  },
});
