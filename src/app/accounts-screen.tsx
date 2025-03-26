import { Button, StyleSheet, Text, View } from "react-native";
import {
  TextInput,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import React from "react";
import AccountList from "../components/account-list";
import Entypo from "@expo/vector-icons/Entypo";
const AccountsScreen: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ gap: 5, padding: 5 }}>
        <View style={styles.header}>
          <Text>Name</Text>
          <Text>CAP</Text>
          <Text>Tap</Text>
        </View>
        <AccountList />
        <View style={styles.inputRow}>
          <TextInput placeholder="Name" style={styles.input} />
          <TextInput placeholder="CAP %" style={styles.input} />
          <TextInput placeholder="TAP %" style={styles.input} />
          <Entypo name="check" size={24} color="black" />
        </View>
        <Button title="Add Account" />
      </View>
    </GestureHandlerRootView>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  input: {},
});
