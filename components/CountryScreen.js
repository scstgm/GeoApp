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

//for converting the UTC timezone to local time of the selected country
import moment from "moment";

const CountryScreen = ({ navigation, route }) => {
  const { flag, name, cca2, capital, population, area, timezone, borders } =
    route.params;
  const [currencyValue, setCurrencyValue] = useState();

  // //converting the UTC timezone to local time

  // const localTime = moment
  //   .utc(timezone)
  //   .local()
  //   .format("MMMM Do YYYY, h:mm:ss a");

  //api.exchangeratesapi.io/v1/latest?access_key=i9sv5EtHHHu6tMuG9itB6FpMdRTceA3S;

  /* useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format("h:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]); */
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
        <Text style={styles.text}>Local time: {`${timezone}`}</Text>

        <Text style={styles.text}>Neighbors: </Text>

        <FlatList
          contentContainerStyle={styles.bordersListContainer}
          data={borders}
          numColumns={4}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CountryScreen")}
            >
              <View style={styles.bordersListItems}>
                {/* <Image source={item.flag} style={styles.flag} /> */}
                <Text style={styles.text}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bordersListItems: {
    backgroundColor: "green",
  },
});

export default CountryScreen;
