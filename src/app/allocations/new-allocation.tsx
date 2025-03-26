import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const NewAllocation = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "New Allocations" }} />
      <Text>new-allocation</Text>
    </View>
  );
};

export default NewAllocation;

const styles = StyleSheet.create({});
