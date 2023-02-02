import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";

const GuessCapitalScreen = ({ navigation, route }) => {
  const { countries } = route.params;
  const [randomCountry, setRandomCountry] = useState(
    countries[Math.floor(Math.random() * countries.length)]
  );
  const [questionNumber, setQuestionNumber] = useState(1);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const correctOption = randomCountry.capital;
  const options = [correctOption];

  const [fadeAnim] = useState(new Animated.Value(1));
  const [backgroundColor, setBackgroundColor] = useState("white");

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
      setCorrectAnswers((prevScore) => prevScore + 1);
      Alert.alert("Right answer!");
    } else {
      setIncorrectAnswers((prevScore) => prevScore + 1);
      Alert.alert("Wrong answer!");
    }

    if (questionNumber === 10) {
      navigation.navigate("EndGameStatsScreen", {
        correctAnswers,
        incorrectAnswers,
      });
    } else {
      setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
      setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{questionNumber}/10</Text>
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
