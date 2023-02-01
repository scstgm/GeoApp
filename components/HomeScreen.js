import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.studyBtn, styles.common]}
        onPress={() => navigation.navigate("StudyScreen")}
      >
        <Text style={styles.font}>Study</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.gameBtn, styles.common]}
        onPress={() => navigation.navigate("GameScreen")}
      >
        <Text style={styles.font}>Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  studyBtn: {
    backgroundColor: "lightblue",
  },
  gameBtn: {
    backgroundColor: "azure",
  },
  font: {
    fontSize: 36,
  },
  common: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default HomeScreen;
