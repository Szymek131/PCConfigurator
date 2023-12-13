import Modal from "react-native-modal";
import { View, Text, TextInput } from "react-native";

const Modal = () => {
  return (
    <Modal isVisible={isModalVisible} style={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalTextInput}>
          <Text style={styles.modalTitle}>Nazwij swój zestaw!</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
          />
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
            onPress={handleModalSubmit}
            active={true}
          />
        </View>
      </View>
    </Modal>
  );
};
