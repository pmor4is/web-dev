import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [response, setResponse] = useState("");

  function somar() {
    response = number1 + number2;
  }
  return (
    <View>
      <Text>Calculadora básica</Text>
      <TextInput 
        style = {{borderWidth: 1}}
        placeholder = "numero 1"
        keyboardType='numeric'
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput 
        style = {{borderWidth: 1}}
        placeholder = "numero 2"
        keyboardType='numeric'
        value={number2}
        onChangeText={setNumber2}
      />
      <Button 
        title='+'
        color="#841584"
        onPress={() => somar}
      />
    </View>
  );
}