import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const EndGameStatsScreen = ({ navigation, route }) => {
  const { correctAnswers, incorrectAnswers, countries } = route.params;
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
      {/* it is currently disabled because it needs modification in order to when 
      pressed to set every value (questioNumber, correctAnswers, incorrectAnswes) back to 0 */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("GuessCapitalScreen", { countries })}
      >
        <Text style={styles.text}>Restart</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "azure",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default EndGameStatsScreen;
