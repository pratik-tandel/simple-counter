/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import Sound from 'react-native-sound';

const App: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [clickSound, setClickSound] = useState<any>(null);

  const playSound = (sound: any) => {
    if (sound) {
      sound.play();
    }
  };

  useEffect(() => {
    const soundEffect = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load sound', error);
      } else {
        setClickSound(soundEffect);
      }
    });

    return () => {
      soundEffect.release();
    };
  }, []);

  const increment = () => {
    playSound(clickSound);
    Vibration.vibrate(100);
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      playSound(clickSound);
      Vibration.vibrate(100);
      setCount(count - 1);
    }
  };

  const resetConfirmation = () => {
    if (count > 0) {
      playSound(clickSound);

      Alert.alert(
        'Reset Counter',
        'Are you sure you want to reset the counter to 0?',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'Reset', onPress: () => setCount(0) },
        ],
        { cancelable: false },
      );
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
      <TouchableOpacity style={styles.resetButton} onPress={resetConfirmation}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20, // Add spacing between counter and buttons
    gap: 30,
  },
  button: {
    backgroundColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  resetButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20, // Add margin for spacing between buttons
    alignSelf: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default App;
