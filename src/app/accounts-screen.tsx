import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AccountList from "../components/account-list";
const AccountsScreen: React.FC = () => {
  return (
    <View style={{ gap: 5, padding: 5 }}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>Tap</Text>
      </View>
      <AccountList />
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
