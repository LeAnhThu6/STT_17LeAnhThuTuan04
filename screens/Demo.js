import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(0);

  const calculateSum = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setTotal(num1 + num2);
    } else {
      setTotal(0);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        onChangeText={(text) => setNumber2(text)}
        keyboardType="numeric"
      />
      <Button title="Calculate Sum" onPress={calculateSum} />
      <Text>Total: {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
});
