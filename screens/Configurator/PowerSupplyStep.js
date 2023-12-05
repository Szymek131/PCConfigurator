import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import CategoryGridTile from "../../components/Configurator/CategoryGridTile";
import Button from "../../components/UI/Button";
import { useState, useEffect } from "react";
import { POWER_SUPPLIES } from "../../data/powerSupplies";

const PowerSupplyStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;

  console.log(choosedImage);
  console.log(choosedName);
  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/Zasilacz.png")
  );
  const [name, setName] = useState();

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setName(choosedName);
    } else {
      setName("zasilanie");
    }
  }, [choosedImage]);

  const setGoBackHandler = () => {
    navigation.goBack();
  };

  const nextStepHandler = () => {
    navigation.navigate("CaseStep", {});
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 5,
      data: POWER_SUPPLIES,
      name: "Zasilanie",
      isConfigurating: true,
      componentNavigation: "PowerSupplyStep",
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wybierz zasilanie</Text>
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

export default PowerSupplyStep;

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
