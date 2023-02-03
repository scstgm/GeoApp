import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const GuessCapitalScreen = ({ navigation, route }) => {
  const { countries } = route.params;
  const [randomCountry, setRandomCountry] = useState(
    countries[Math.floor(Math.random() * countries.length)]
  );
  const [questionCounter, setQuestionCounter] = useState(0);
  const questionNumber = 5;

  const [correctAnswers, setCorrectAnswers] = useState(0);
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

  options.sort(() => Math.random());

  const handlePress = (selectedOption) => {
    if (selectedOption === correctOption) {
      setCorrectAnswers((prevScore) => prevScore + 1);
      Alert.alert("Right answer!");
    } else {
      setIncorrectAnswers((prevScore) => prevScore + 1);
      Alert.alert("Wrong answer!");
    }

    if (questionCounter === questionNumber) {
      navigation.navigate("EndGameStatsScreen", {
        correctAnswers,
        incorrectAnswers,
        countries,
      });
    } else {
      setQuestionCounter((prevQuestionCounter) => prevQuestionCounter + 1);
      setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>
        {questionCounter}/{questionNumber}
      </Text>
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
  questionNumber: {
    padding: 20,
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
