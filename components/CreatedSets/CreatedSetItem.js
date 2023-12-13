import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const CreatedSetItem = ({ label, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && [styles.pressed]}
    >
      <View style={styles.rootContainer}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default CreatedSetItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: GlobalStyles.colors.light300,
    margin: 8,
    borderRadius: 18,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.dark900,
    textAlign: "center",
  },
});
