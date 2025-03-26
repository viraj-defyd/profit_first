import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="allocations"
        options={{
          title: "Allocations",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="account-tree" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts-screen"
        options={{
          title: "Accounts",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
