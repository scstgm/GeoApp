import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const GuessCapitalScreen = ({ navigation, route }) => {
  const { countries } = route.params;
  const [randomCountry, setRandomCountry] = useState(
    countries[Math.floor(Math.random() * countries.length)]
  );
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

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
      setScore((prevScore) => prevScore + 1);
      Alert.alert("Right answer!", `Your current score is: ${score}`, [
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
      setScore((prevScore) => prevScore - 1);
      Alert.alert("Wrong answer!", `Your current score is: ${score}`, [
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

    if (score === 10 || incorrectAnswers === 3) {
      navigation.navigate("EndGameStatsScreen", {
        score,
        incorrectAnswers,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          What is the capital of {randomCountry.name.common}?
        </Text>
      </View>
      <View style={styles.guessOptionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.guessOption}
            onPress={() => handlePress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginHorizontal: 20,
    padding: 10,
    width: "90%",
    marginTop: 120,
  },
  guessOptionsContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    width: "90%",
    marginBottom: 120,
  },
  guessOption: {
    backgroundColor: "lightblue",
    padding: 12,
    marginVertical: 12,
    width: "70%",
    alignItems: "center",
    borderRadius: 20,
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default GuessCapitalScreen;
