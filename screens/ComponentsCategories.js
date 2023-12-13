import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ComponentCategory from "../components/BrowseComponents/ComponentCategory";
import { CATEGORIES } from "../data/categories";

const ComponentsCategories = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("BrowseComponents", {
        categoryId: itemData.item.id,
        data: itemData.item.data,
        name: itemData.item.categoryName,
        pcSetScreen: false,
      });
    };

    return (
      <ComponentCategory
        label={itemData.item.categoryName}
        imageSource={itemData.item.imgSource}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ComponentsCategories;
