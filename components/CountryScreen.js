import { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

/* https://numbrojs.com/format.html
for formatting data (like population and area) because "toLocaleString()" is 
not supported on Android and because "replace(/\B(?=(\d{3})+(?!\d))/g, ".")" 
is ugly and prone to cause bugs */
let numbro = require("numbro");

const CountryScreen = ({ navigation, route }) => {
  const { flag, name, cca2, capital, population, area, timezone, borders } =
    route.params;

  const [time, setTime] = useState();

  const [currencyValue, setCurrencyValue] = useState();

  //converting the UTC offset to local time?

  //timezonedb API call
  //http://api.timezonedb.com/v2.1/get-time-zone?key=U72HT3WE7VK2&format=json&by=zone&zone=${selectedCountryTimezone}

  //currency
  //api.exchangeratesapi.io/v1/latest?access_key=i9sv5EtHHHu6tMuG9itB6FpMdRTceA3S;

  return (
    <View style={styles.container}>
      <Image source={flag} style={styles.flag} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Cca2: {cca2}</Text>
        <Text style={styles.text}>Capital: {capital}</Text>
        <Text style={styles.text}>
          Population:{" "}
          {/* {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} */}
          {numbro(population).format({ thousandSeparated: true })}
        </Text>
        <Text style={styles.text}>
          {/* Area: {area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} km² */}
          Area: {numbro(area).format({ thousandSeparated: true })} km²
        </Text>
        <Text style={styles.text}>Time zone: {`${timezone} `}</Text>

        <Text style={styles.text}>Neighbors: </Text>
        {typeof borders === "undefined" ? (
          <Text style={styles.text}>There is none.</Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.bordersListContainer}
            data={borders}
            numColumns={4}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  //currently not functioning
                  navigation.setParams("CountryScreen", {
                    cca2: item,
                  })
                }
              >
                <View style={styles.bordersListItems}>
                  {/* <Image source={item.flag} /> */}
                  <Text style={styles.bordersListItemsText}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  flag: {
    height: "40%",
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
  },

  bordersListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bordersListItems: {
    margin: 4,
    padding: 10,
  },
  bordersListItemsText: {
    fontSize: 16,
  },
});

export default CountryScreen;
