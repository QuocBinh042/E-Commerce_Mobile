import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Switch } from 'react-native';

const NotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/138b88db9c19c8e52d6446fcc8a99b3b461a06b0d5520d68202c12d7b72cc78a?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.text}>Notify me of promotions</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 24,
    padding: 14,
    borderRadius: 8,
    borderColor: 'rgba(222, 225, 230, 1)',
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 44,
    height: 44,
    marginRight: 12,
  },
  text: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 12,
    color: 'rgba(50, 56, 66, 1)',
  },
});

export default NotificationToggle;