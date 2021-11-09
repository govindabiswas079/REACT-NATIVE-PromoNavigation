import React, { useState, useEffect } from "react";
import { View, Button, TextInput, StyleSheet, Table, TableCell, TableRow, TableHeader, TableBody } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

export default function SettingsScreen({ navigation }) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');


  var data = JSON.stringify({
    Name: Name,
    Email: Email,
    Password: Password
  })



  var config = {
    method: 'post',
    url: 'https://webhook.site/8b86654f-a1e3-4e34-9e91-a74220ebdee3',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const SubmitData = async (event) => {
    event.preventDefault();
    await axios(config)
      .then(function (response) {
        //console.log(response.config.data);
        AsyncStorage.setItem('response', response.config.data);
        navigation.navigate("Tables")
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Lock Screen"
          onPress={() => navigation.navigate("LockScreen")}
        />
      </View> */}
      <View>
        <TextInput type="text" style={styles.input} name="Name" placeholder="Name" onChangeText={(e) => setName(e)} />
        <TextInput type="Email" style={styles.input} name="Email" placeholder="Email" onChangeText={(e) => setEmail(e)} />
        <TextInput type="password" style={styles.input} name="Password" placeholder="Password" onChangeText={(e) => setPassword(e)} />
        <Button title="Submit" onPress={SubmitData} />
        <TextInput typper="text" style={styles.input} value={Name} />
        <TextInput typper="text" style={styles.input} value={Email} />
        <TextInput typper="text" style={styles.input} value={Password} />
      </View>
      <View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
/* 	https://webhook.site/8b86654f-a1e3-4e34-9e91-a74220ebdee3 */