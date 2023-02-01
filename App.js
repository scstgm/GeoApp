import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./components/RootStack";

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
