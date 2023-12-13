import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ComponentItem from "../components/BrowseComponents/ComponentItem";

const BrowseComponents = ({ navigation, route }) => {
  const data = route.params.data;
  const isConfigurating = route.params.isConfigurating;
  const componentNavigation = route.params.componentNavigation;

  const renderComponentItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("ComponentDetails", {
        data: itemData.item,
        componentId: itemData.item.id,
        name: itemData.item.categoryName,
        isConfigurating: isConfigurating,
        componentNavigation: componentNavigation,
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
        <View style={styles.listContainer}>
          <FlatList
            data={data}
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
});
