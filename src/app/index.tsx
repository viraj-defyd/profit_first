import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
const index = () => {
  return (
    <View style={styles.container}>
      <Text> Allocations </Text>
      <Link href="/accounts-screen"> Go to accounts</Link>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
