import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate("Notifications")}
        />
        <Button style={{ margin: 10 }} title="Go back" onPress={() => navigation.goBack()} />
      </View> */}
    </>
  );
};
const styles = StyleSheet.create({
  attributeTitle: {
    padding: 20,
    color: "#e4002b",
  },
});
export default ProfileScreen;
