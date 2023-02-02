import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import StudyScreen from "./StudyScreen";
import RegionsScreen from "./RegionsScreen";
import CountriesListScreen from "./CountriesListScreen";
import CountryScreen from "./CountryScreen";
import GameScreen from "./GameScreen";
import GameTypesScreen from "./GameTypesScreen";
import GuessCapitalScreen from "./GuessCapitalScreen";
import GuessFlagScreen from "./GuessFlagScreen";
import GuessNeighborScreen from "./GuessNeighborScreen";
import EndGameStatsScreen from "./EndGameStatsScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StudyScreen" component={StudyScreen} />
      <Stack.Screen name="RegionsScreen" component={RegionsScreen} />
      <Stack.Screen
        name="CountriesListScreen"
        component={CountriesListScreen}
      />
      <Stack.Screen name="CountryScreen" component={CountryScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="GameTypesScreen" component={GameTypesScreen} />
      <Stack.Screen name="GuessCapitalScreen" component={GuessCapitalScreen} />
      <Stack.Screen name="GuessFlagScreen" component={GuessFlagScreen} />
      <Stack.Screen
        name="GuessNeighborScreen"
        component={GuessNeighborScreen}
      />
      <Stack.Screen name="EndGameStatsScreen" component={EndGameStatsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
