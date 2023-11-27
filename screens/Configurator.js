import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/categories";
import CategoryGridTile from "../components/Configurator/CategoryGridTile";
import { GlobalStyles } from "../constants/styles";

const Configurator = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("BrowseComponents", {
        categoryId: itemData.item.id,
        data: itemData.item.data,
        name: itemData.item.categoryName,
      });
    };

    return (
      <CategoryGridTile
        imageSource={itemData.item.imgSource}
        label={itemData.item.name}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default Configurator;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
  },
});
