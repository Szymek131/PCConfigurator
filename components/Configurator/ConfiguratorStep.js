import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import CategoryGridTile from "./CategoryGridTile";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { configuratorContext } from "../../store/context/configurator-context";

const ConfiguratorStep = ({
  nextStepHandler,
  categoryItemHandler,
  componentName,
  image,
  headerTitle,
  isNextStepAvailable,
}) => {
  const navigation = useNavigation();
  const { compatibilities, updateCompatibilities } =
    useContext(configuratorContext);

  const clearCompatibilities = () => {
    const clearedCompatibilities = {
      ...compatibilities,
      motherboard: {
        ...compatibilities.motherboard,
        format: "",
      },
      CPU: {
        ...compatibilities.CPU,
        socket: "",
      },
      GPU: {
        ...compatibilities.GPU,
        input: [],
        length: 0,
      },
      RAM: {
        ...compatibilities.RAM,
        type: "",
        slots: 0,
      },
      Cooler: {
        ...compatibilities.Cooler,
        height: 0,
      },
      PowerSupply: {
        ...compatibilities.PowerSupply,
        recommended: 0,
      },
    };
    updateCompatibilities(clearedCompatibilities);
  };

  const setGoBackHandler = () => {
    navigation.goBack();
  };

  const cancelHandler = () => {
    clearCompatibilities();
    navigation.navigate("Configurator");
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{headerTitle}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <CategoryGridTile
          label={componentName}
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
          active={true}
        />
        <Button
          label="Dalej"
          buttonColor={GlobalStyles.colors.triary700}
          buttonTextColor="white"
          onPress={nextStepHandler}
          active={isNextStepAvailable ? true : false}
        />
      </View>
      <View style={styles.cancelButtonContainer}>
        <Button
          label="Przerwij"
          buttonColor={GlobalStyles.colors.red800}
          buttonTextColor="white"
          onPress={cancelHandler}
          active={true}
        />
      </View>
    </View>
  );
};

export default ConfiguratorStep;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
    paddingTop: 50,
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
  cancelButtonContainer: {
    flex: 1,
    maxHeight: 100,
    marginHorizontal: 50,
  },
});
