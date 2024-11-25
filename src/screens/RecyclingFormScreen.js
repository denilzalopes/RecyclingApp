// src/screens/RecyclingFormScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RecyclingFormScreen = () => {
  const [deviceType, setDeviceType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    // Vous pouvez ajouter ici la logique pour soumettre les données
    console.log(`Type d'appareil: ${deviceType}, Localisation: ${location}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire de recyclage</Text>
      <TextInput
        style={styles.input}
        placeholder="Type d'appareil"
        value={deviceType}
        onChangeText={setDeviceType}
      />
      <TextInput
        style={styles.input}
        placeholder="Votre localisation"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Soumettre" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default RecyclingFormScreen;
