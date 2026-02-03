import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileHeader({ seguidores }) {
  return (
    <View style={styles.header}>
      
      <View style={styles.fotoContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.fotoPerfil}
        />
        <View style={styles.badge} />
      </View>

      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.numero}>24</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.numero}>{seguidores}</Text>
          <Text>Seguidores</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.numero}>180</Text>
          <Text>Seguindo</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },

  fotoContainer: {
    position: "relative",
  },

  fotoPerfil: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  badge: {
    position: "absolute",
    width: 18,
    height: 18,
    backgroundColor: "red",
    borderRadius: 9,
    right: 0,
    top: 0,
    borderWidth: 2,
    borderColor: "white",
  },

  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  statBox: {
    alignItems: "center",
  },

  numero: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
