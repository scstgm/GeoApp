import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const GuessFlagScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>It is the GuessFlagScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "azure",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default GuessFlagScreen;
