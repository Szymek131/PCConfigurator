import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ onPress, label, buttonColor, buttonTextColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && [styles.pressed]}
    >
      <View style={[styles.ButtonContainer, { backgroundColor: buttonColor }]}>
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  ButtonContainer: {
    flex: 1,
    minWidth: 180,
    minHeight: 70,
    justifyContent: "center",
    margin: 8,
    borderRadius: 24,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
