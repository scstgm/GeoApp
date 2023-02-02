import { View, Text, StyleSheet } from "react-native";

const EndGameStatsScreen = ({ route }) => {
  const { correctAnswers, incorrectAnswers } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          The number of correct answers: {correctAnswers}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          The number of incorrect answers: {incorrectAnswers}
        </Text>
      </View>
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
  },
});

export default EndGameStatsScreen;
