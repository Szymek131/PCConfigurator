import { View, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ComponentItem from "../components/BrowseComponents/ComponentItem";

const BrowseComponents = ({ navigation, route }) => {
  const data = route.params.data;

  const renderComponentItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("ComponentDetails", {
        data: itemData.item,
        componentId: itemData.item.id,
        name: itemData.item.categoryName,
      });
    };
    console.log(itemData.item.id);

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
      <FlatList data={data} renderItem={renderComponentItem} />
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
});
