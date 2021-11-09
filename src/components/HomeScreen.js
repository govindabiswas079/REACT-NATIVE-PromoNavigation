/* import React from "react";
import { View, Button, Image, StatusBar, StyleSheet, Text, SafeAreaView } from "react-native";
import COLOR from '../const/colors';

export default function HomeScreen({ navigation }) {

  
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar translucent backgroundColor={COLOR.tranparent} />
        <Image source={require('../assets/bird1.png')} style={styles.image} />
        <View>
          <Text style={{ marginTop: 30, margin: 35 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aspernatur magni voluptatem praesentium obcaecati ipsa optio vel quos at, deserunt nostrum pariatur itaque, adipisci nihil dolores? Fugit sequi nemo enim?
          </Text>
        </View>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "40%"
  }
})
 */










import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Text, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function HomeScreen({ navigation }) {
  const [textInputValue, setTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');

  const saveValueFunction = () => {
    if (textInputValue) {
      AsyncStorage.setItem('any_key_here', textInputValue);
      setTextInputValue('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction = () => {
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        setGetValue(value),
    );
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          AsyncStorage in React Native to Store Data in Session
        </Text>
        <TextInput
          placeholder="Enter Some Text here"
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            SAVE VALUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            GET VALUE
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'green',
  },
});

//export default App;