import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const GuessCapitalScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        generateQuestion();
      })
      .catch((error) => console.error(error));
  }, []);

  const generateQuestion = () => {
    if (questions.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    const current = questions[randomIndex];
    setCurrentQuestion(current);
    setCorrectAnswer(current.capital);

    const options = [current.capital];
    let count = 0;

    while (count < 3) {
      const randomOptionIndex = Math.floor(Math.random() * questions.length);
      if (options.indexOf(questions[randomOptionIndex].capital) === -1) {
        options.push(questions[randomOptionIndex].capital);
        count++;
      }
    }

    setOptions(options.sort(() => Math.random() - 0.5));
  };

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {
      Alert.alert("Correct");
      generateQuestion();
    } else {
      Alert.alert("Incorrect");
    }
  };

  return (
    <View style={styles.container}>
      {currentQuestion.name ? (
        <Text style={styles.question}>
          What is the capital of {currentQuestion.name}?
        </Text>
      ) : (
        <Text style={styles.question}>Loading...</Text>
      )}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => checkAnswer(option)}
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
