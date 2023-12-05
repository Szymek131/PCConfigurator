import { View, StyleSheet, Text } from "react-native";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/styles";

const Configurator = ({ navigation }) => {
  const handleStartConfiguration = () => {
    navigation.navigate("MotherboardStep", {
      isChoosed: false,
      image: "",
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Rozpocznij konfigurację</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Konfiguruj"
          buttonColor={GlobalStyles.colors.dark900}
          buttonTextColor="white"
          onPress={handleStartConfiguration}
        />
      </View>
    </View>
  );
};

export default Configurator;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    maxHeight: 100,
    marginTop: 20,
  },
});
