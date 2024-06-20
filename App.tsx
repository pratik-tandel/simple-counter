/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App: React.FC<any> = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333', // Darker text
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20, // Add spacing between counter and buttons
    gap: 30,
  },
  button: {
    backgroundColor: '#ddd', // Light gray for buttons
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5, // Add rounded corners
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Darker text
  },
});

export default App;
