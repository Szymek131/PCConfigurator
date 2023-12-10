import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ onPress, label, buttonColor, buttonTextColor, active }) => {
  return (
    <Pressable
      onPress={active ? onPress : () => {}}
      style={
        active ? ({ pressed }) => pressed && [styles.pressed] : styles.notActive
      }
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
  notActive: {
    opacity: 0.4,
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
