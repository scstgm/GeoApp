import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const RegionsScreen = ({ navigation }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        let regionsSet = new Set();
        data.forEach((country) => {
          if (country.region) regionsSet.add(country.region);
        });
        setRegions([...regionsSet]);
      })
      .catch((error) => {
        console.error("There was a problem while fetching the data.", error);
        setError(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
        style={styles.regionList}
        data={regions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.region}
            onPress={() =>
              navigation.navigate("CountriesListScreen", { region: item })
            }
          >
            <Text style={styles.regionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  regionList: {
    marginVertical: 140,
    marginHorizontal: 18,
  },
  region: {
    backgroundColor: "azure",
    borderRadius: 12,
    padding: 18,
  },
  regionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegionsScreen;
