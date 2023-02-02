import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const CountriesListScreen = ({ navigation, route }) => {
  const [countries, setCountries] = useState([]);
  const { region } = route.params;

  useEffect(() => {
    /* for some reason it doesn't work with v3.1 but with v2 it does, even 
    though in the API's documentation this endpoint is the same for each version */
    fetch(`https://restcountries.com/v2/region/${region}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("There was a problem while fetching the data.", error);
        setError(error);
      });
  }, [region]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CountryScreen", {
                flag: { uri: item.flags.png },
                name: item.name,
                cca2: item.alpha3Code,
                capital: item.capital,
                population: item.population,
                area: item.area,
                timezone: item.timezones,
                borders: item.borders,
              })
            }
          >
            <View style={styles.countryContainer}>
              <Image style={styles.flag} source={{ uri: item.flags.png }} />
              <Text
                /*  this is necessary in order to prevent the overflow of text
                of a country in the list, for example in the case of the United 
                Kingdom of Great Britain and Northern Ireland
                */
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{ width: "76%" }}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  list: {
    marginVertical: 24,
  },
  countryContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: "azure",
    borderRadius: 12,
  },
  flag: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
});

export default CountriesListScreen;
