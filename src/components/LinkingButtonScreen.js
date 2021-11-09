import React from "react";
import { View, Button, Linking } from "react-native";

export default function LinkingButtonScreen({ navigation }) {
  const profileUrl = "demo://app/profile/234";
  const notioficationsUrl = "demo://app/notifications";
  const homeUrl = "demo://app/home/123";
  const settingsUrl = "demo://app/settings";
  const lockscreenUrl = "demo://app/LockScreen";
  const accountUrl = "demo://app/Account";
  const tablesUrl = "demo://app/Tables";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Profile"
        onPress={() => {
          Linking.openURL(profileUrl);
        }}
      />
      <Button
        title="Notiofications"
        onPress={() => {
          Linking.openURL(notioficationsUrl);
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          Linking.openURL(homeUrl);
        }}
      />
      <Button
        title="Setting"
        onPress={() => {
          Linking.openURL(settingsUrl);
        }}
      />

      <Button
        title="Lock Screen"
        onPress={() => {
          Linking.openURL(lockscreenUrl);
        }}
      />
      <Button
        title="Account"
        onPress={() => {
          Linking.openURL(accountUrl);
        }}
      />
      <Button
        title="Tables"
        onPress={() => {
          Linking.openURL(tablesUrl);
        }}
      />

      <Button
        title="Open public Url"
        onPress={() => {
          Linking.openURL("https://ankitkumar.dev");
        }}
      />
    </View>
  );
}
