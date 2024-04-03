import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [response, setResponse] = useState("");

  function calculator(op) {
    if ((number1) && (number2)) {
      switch (op) {
        case '+': setResponse(parseFloat(number1) + parseFloat(number2));
          break;
        case '-': setResponse(parseFloat(number1) - parseFloat(number2));
          break;
        case '*': setResponse(parseFloat(number1) * parseFloat(number2));
          break;
        case '/': setResponse(parseFloat(number1) / parseFloat(number2));
          break;
      }
    }
  }
  return (
    <View>
      <Text>Calculadora</Text>
      <TextInput
        style={styles.caixa}
        placeholder="numero 1"
        keyboardType='numeric'
        value={number1}
        onChangeText={(text) => setNumber1(text)}
      />
      <TextInput
        style={styles.caixa}
        placeholder="numero 2"
        keyboardType='numeric'
        value={number2}
        onChangeText={(text) => setNumber2(text)}
      />
      <View>
        <Button
          style={styles.container}
          title='+'
          color="#841584"
          onPress={() => calc('+')}
        />
        <Button
          style={styles.container}
          title='-'
          color="#841584"
          onPress={() => calc('-')}
        />
        <Button
          style={styles.container}
          title='/'
          color="#841584"
          onPress={() => calc('/')}
        />
        <Button
          title='*'
          style={styles.container}
          color="#841584"
          onPress={() => calc('*')}
        />
        <Text>A resposta do cálculo é: {response}</Text>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
  },
  caixa: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    margin: 5,

  }
})