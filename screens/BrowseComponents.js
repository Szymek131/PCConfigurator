import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import ComponentItem from "../components/BrowseComponents/ComponentItem";
import { useState, useCallback } from "react";

const BrowseComponents = ({ navigation, route }) => {
  const data = route.params.data;
  const isConfigurating = route.params.isConfigurating;
  const componentNavigation = route.params.componentNavigation;
  const createdSetId = route.params.createdSetId;
  const isChoosingSubstitute = route.params.isChoosingSubstitute;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  console.log(data);

  console.log(createdSetId);
  const handleSearch = useCallback(
    (query) => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredData(filtered);
    },
    [data]
  );

  const renderComponentItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("ComponentDetails", {
        data: itemData.item,
        componentId: itemData.item.id,
        name: itemData.item.categoryName,
        isConfigurating: isConfigurating,
        componentNavigation: componentNavigation,
        isChoosingSubstitute: isChoosingSubstitute,
        createdSetId: createdSetId,
      });
    };

    return (
      <ComponentItem
        label={itemData.item.name}
        imageSource={itemData.item.imgSource}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchOuterContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="szukaj komponentu"
              onChangeText={(text) => {
                setSearchQuery(text);
                handleSearch(text);
              }}
              value={searchQuery}
            />
          </View>
          {data.length === 0 ? (
            <Text style={styles.noPartsHeader}>Brak pasujących części</Text>
          ) : null}
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={filteredData}
            renderItem={renderComponentItem}
            keyExtractor={(item) => item.name.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BrowseComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flex: 5,
  },
  searchInput: {
    height: 50,
    width: 250,
    backgroundColor: "white",
    borderRadius: 24,
    borderColor: "gray",
    textAlign: "center",
  },
  searchContainer: {
    height: 80,
    width: 300,
    backgroundColor: GlobalStyles.colors.light300,
    paddingHorizontal: 10,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    borderRadius: 24,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  searchOuterContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  noPartsHeader: {
    textAlign: "center",
    fontSize: 24,
  },
});
