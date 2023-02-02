import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const GuessCapitalScreen = ({ navigation, route }) => {
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");

  useEffect(() => {
    const { countries } = route.params;
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    setCorrectOption(randomCountry.capital);
    const options = [
      randomCountry.capital,
      ...countries
        .filter((country) => country.capital !== randomCountry.capital)
        .slice(0, 3)
        .map((country) => country.capital),
    ];
    setOptions(options.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What is the capital of this country?</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() => {
            navigation.navigate("Result", {
              correctOption,
              selectedOption: option,
            });
          }}
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
    backgroundColor: "#ddd",
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
