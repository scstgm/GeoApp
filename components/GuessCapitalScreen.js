import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const GuessCapitalScreen = ({ navigation, route }) => {
  const { countries } = route.params;
  const [randomCountry, setRandomCountry] = useState(
    countries[Math.floor(Math.random() * countries.length)]
  );
  const randomIndex = Math.floor(Math.random() * countries.length);

  const correctOption = randomCountry.capital;
  const options = [correctOption];

  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomOption = countries[randomIndex].capital;

    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  options.sort(() => Math.random() - 0.5);

  const handlePress = (selectedOption) => {
    if (selectedOption === correctOption) {
      Alert.alert("Correct!", "You have selected the right answer.", [
        {
          text: "OK",
          onPress: () => {
            setRandomCountry(
              countries[Math.floor(Math.random() * countries.length)]
            );
            navigation.navigate("GuessCapitalScreen", { countries });
          },
        },
      ]);
    } else {
      Alert.alert("Wrong!", "You have selected the wrong answer.", [
        {
          text: "OK",
          onPress: () => {
            setRandomCountry(
              countries[Math.floor(Math.random() * countries.length)]
            );
            navigation.navigate("GuessCapitalScreen", { countries });
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        What is the capital of {randomCountry.name.common}?
      </Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handlePress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    backgroundColor: "lightblue",
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
});

export default GuessCapitalScreen;
