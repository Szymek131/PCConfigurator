import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { configuratorContext } from "../store/context/configurator-context";
import { useState, useContext } from "react";
import CreatedSetItem from "../components/CreatedSets/CreatedSetItem";
import Button from "../components/UI/Button";

const CreatedSets = ({ navigation, route }) => {
  const { createdSets } = useContext(configuratorContext);
  console.log(createdSets);

  const renderCreatedSetItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("SetOverview", {
        createdSetParts: itemData.item.parts,
        createdSet: itemData.item,
        name: itemData.item.name,
        isCreating: false,
      });
    };

    return <CreatedSetItem label={itemData.item.name} onPress={pressHandler} />;
  };

  const handleCreate = () => {
    navigation.navigate("Configurator");
  };

  return (
    <View style={styles.rootContainer}>
      {createdSets.length == 0 ? (
        <View style={styles.emptySetsContainer}>
          <Text style={styles.emptySetsLabel}>
            Nie stworzyłeś jeszcze żadnych zestawów
          </Text>
          <View style={styles.emptySetsButtonContainer}>
            <Button
              label="Stwórz"
              buttonColor={GlobalStyles.colors.primary500}
              buttonTextColor="black"
              onPress={handleCreate}
              active={true}
            />
          </View>
        </View>
      ) : (
        <View>
          <ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.headerLabel}>Twoje zestawy</Text>
            </View>
            <View>
              <FlatList
                data={createdSets}
                renderItem={renderCreatedSetItem}
                keyExtractor={(item) => item.name.toString()}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CreatedSets;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
  },
  emptySetsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptySetsLabel: {
    fontSize: 24,
    textAlign: "center",
  },
  headerContainer: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLabel: {
    fontSize: 24,
    textAlign: "center",
  },
  emptySetsButtonContainer: {
    height: 100,
  },
});
