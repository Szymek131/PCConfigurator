import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import CategoryGridTile from "../../components/Configurator/CategoryGridTile";
import Button from "../../components/UI/Button";
import { useState, useEffect } from "react";
import { GPUS } from "../../data/gpus";

const GPUStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;

  console.log(choosedImage);
  console.log(choosedName);
  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/KartaGraficzna.png")
  );
  const [name, setName] = useState();

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setName(choosedName);
    } else {
      setName("Karta graficzna");
    }
  }, [choosedImage]);

  const setGoBackHandler = () => {
    navigation.goBack();
  };

  const nextStepHandler = () => {
    navigation.navigate("RAMStep", {});
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 2,
      data: GPUS,
      name: "Karty graficzne",
      isConfigurating: true,
      componentNavigation: "GPUStep",
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wybierz kartę graficzną</Text>
      </View>
      <View style={styles.categoryContainer}>
        <CategoryGridTile
          label={name}
          imageSource={image}
          onPress={categoryItemHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Wróć"
          buttonColor={GlobalStyles.colors.primary500}
          buttonTextColor="black"
          onPress={setGoBackHandler}
        />
        <Button
          label="Dalej"
          buttonColor={GlobalStyles.colors.triary700}
          buttonTextColor="white"
          onPress={nextStepHandler}
        />
      </View>
    </View>
  );
};

export default GPUStep;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  categoryContainer: {
    flex: 1,
    maxHeight: 500,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 100,
  },
});
