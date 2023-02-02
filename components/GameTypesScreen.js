import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GameTypesScreen = ({ navigation }) => {
  const [countries, setCountries] = useState({});
  const [flagData, setFlagData] = useState({});
  const [neighborData, setNeighborData] = useState({});
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("There was a problem while fetching the data.", error);
        setError(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.guessOption}
        onPress={() => navigation.navigate("GuessCapitalScreen", { countries })}
      >
        <Text style={styles.text}>Guess the capital</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.guessOption}
        onPress={() => navigation.navigate("GuessFlagScreen")}
      >
        <Text style={styles.text}>Guess the flag</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.guessOption}
        onPress={() => navigation.navigate("GuessNeighborScreen")}
      >
        <Text style={styles.text}>Guess the neighbor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "azure",
  },

  guessOption: {
    marginVertical: 20,
    marginHorizontal: 18,
    backgroundColor: "lightblue",
    borderRadius: 12,
    padding: 18,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GameTypesScreen;
