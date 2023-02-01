import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import StudyScreen from "./StudyScreen";
import GameScreen from "./GameScreen";
import RegionsScreen from "./RegionsScreen";
import CountriesListScreen from "./CountriesListScreen";
import CountryScreen from "./CountryScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StudyScreen" component={StudyScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="RegionsScreen" component={RegionsScreen} />
      <Stack.Screen
        name="CountriesListScreen"
        component={CountriesListScreen}
      />
      <Stack.Screen name="CountryScreen" component={CountryScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
