import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import Modal from "react-native-modal";
import Button from "../UI/Button";
import SetOverviewPart from "./SetOverviewPart";
import { useState, useContext } from "react";
import { configuratorContext } from "../../store/context/configurator-context";

const SetOverview = ({ navigation, route }) => {
  const isCreating = route.params.isCreating;
  const createdSet = route.params.createdSet;

  console.log(createdSet);

  const {
    updatePcSet,
    updateCreatedSets,
    createdSets,
    compatibilities,
    updateCompatibilities,
  } = useContext(configuratorContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  const handleSaveSet = () => {
    const updatedSet = {
      ...createdSet,
      id: uuidv4(),
      name: inputValue,
    };
    updatePcSet(updatedSet);
    createdSets.push(updatedSet);
    console.log(createdSets);
    clearCompatibilities();
    navigation.navigate("CreatedSets");
  };

  const handleDeleteSet = () => {
    console.log(createdSets);
    const setId = createdSet.id;
    const filteredSets = createdSets.filter((set) => {
      set.id !== setId;
    });
    updateCreatedSets(filteredSets);
    console.log(createdSets);

    navigation.navigate("CreatedSets");
  };

  const setGoBackHandler = () => {
    navigation.goBack();
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const cancelHandler = () => {
    clearCompatibilities();
    navigation.navigate("Configurator");
  };

  const renderCreatedSetPart = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("ComponentDetails", {
        data: itemData.item,
        componentId: itemData.item.id,
        name: itemData.item.name,
        isConfigurating: false,
      });
    };

    return (
      <SetOverviewPart
        label={itemData.item.name}
        onPress={pressHandler}
        imageSource={itemData.item.imgSource}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <FlatList
          data={createdSet.parts}
          renderItem={renderCreatedSetPart}
          keyExtractor={(item) => item.name}
          scrollEnabled={false}
          numColumns={2}
        />
        {isCreating ? (
          <View style={styles.saveSetContainer}>
            <View style={styles.buttonContainer}>
              <Button
                label="Wróć"
                buttonColor={GlobalStyles.colors.primary500}
                buttonTextColor="black"
                onPress={setGoBackHandler}
                active={true}
              />
              <Button
                label="Zapisz"
                buttonColor={GlobalStyles.colors.triary700}
                buttonTextColor="white"
                onPress={showModal}
                active={true}
              />
            </View>
            <View style={styles.cancelButtonContainer}>
              <Button
                label="Przerwij"
                buttonColor="#cc0000"
                buttonTextColor="white"
                onPress={cancelHandler}
                active={true}
              />
            </View>
          </View>
        ) : (
          <View style={styles.saveSetContainer}>
            <View style={styles.buttonContainer}>
              <Button
                label="Wróć"
                buttonColor={GlobalStyles.colors.primary500}
                buttonTextColor="black"
                onPress={setGoBackHandler}
                active={true}
              />
              <Button
                label="usuń"
                buttonColor={GlobalStyles.colors.red800}
                buttonTextColor="white"
                onPress={showModal}
                active={true}
              />
            </View>
          </View>
        )}
      </ScrollView>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTextInput}>
            {isCreating ? (
              <Text style={styles.modalSaveTitle}>Nazwij swój zestaw!</Text>
            ) : (
              <Text style={styles.modalDeleteTitle}>
                Czy napewno chcesz usunąć ten zestaw?
              </Text>
            )}

            {isCreating ? (
              <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInputChange}
              />
            ) : null}
          </View>
          <View style={styles.modalButtonsContainer}>
            <Button
              label="Wróć"
              buttonColor={GlobalStyles.colors.primary500}
              buttonTextColor="black"
              onPress={hideModal}
              active={true}
            />
            <Button
              label="Zatwierdź"
              buttonColor={GlobalStyles.colors.triary700}
              buttonTextColor="white"
              onPress={isCreating ? handleSaveSet : handleDeleteSet}
              active={true}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SetOverview;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  saveSetContainer: {
    flex: 1,
    marginBottom: 50,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
    margin: 40,
    borderRadius: 24,
    maxHeight: 300,
  },
  modalSaveTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalDeleteTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 50,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 22,
  },
  modalButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 100,
    marginBottom: 30,
  },
  modalTextInput: {
    flex: 1,
    maxHeight: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonContainer: {
    flex: 1,
    maxHeight: 100,
    marginHorizontal: 50,
    paddingBottom: 50,
  },
});
