import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GameTypesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.guessOption}
        onPress={() => navigation.navigate("GuessCapitalScreen")}
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
