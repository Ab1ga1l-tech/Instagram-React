import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import ProfileHeader from "./src/components/ProfileHeader";
import ProfileBio from "./src/components/ProfileBio";
import FollowButton from "./src/components/FollowButton";
import PhotoGrid from "./src/components/PhotoGrid";



export default function App() {
  const [seguindo, setSeguindo] = useState(false);
  const [seguidores, setSeguidores] = useState(120);

  function toggleSeguir() {
    setSeguindo(!seguindo);
    setSeguidores(seguindo ? seguidores - 1 : seguidores + 1);
  }

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader seguidores={seguidores} />
      <ProfileBio />
      <FollowButton seguindo={seguindo} toggleSeguir={toggleSeguir} />
      <PhotoGrid />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
