import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ComponentItem = ({ label, imageSource, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && [styles.pressed]}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageSource} />
          </View>
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ComponentItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    maxHeight: 150,
    width: 350,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 12,
    marginVertical: 12,
  },
  pressed: {
    opacity: 0.5,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 6,
    width: 100,
    height: 100,
    overflow: "hidden",
    marginRight: 30,
  },
  image: {
    maxHeight: 100,
    maxWidth: 100,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    flex: 2,
    fontSize: 18,
    color: GlobalStyles.colors.secondary700,
    textAlign: "center",
    fontWeight: "bold",
  },
});
