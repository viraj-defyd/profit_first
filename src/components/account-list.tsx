import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import AccountListItem from "./account-list-item";
const AccountList = () => {
  return (
    <>
      <FlatList
        data={[1, 2, 3]}
        contentContainerStyle={{ gap: 5 }}
        renderItem={() => <AccountListItem />}
      />
    </>
  );
};

export default AccountList;

const styles = StyleSheet.create({});
