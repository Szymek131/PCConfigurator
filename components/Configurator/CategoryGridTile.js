import { View, Pressable, StyleSheet, Image, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const CategoryGridTile = ({ label, imageSource, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#CCC" }}
        onPress={onPress}
      >
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.innerImageContainer}>
              <Image source={imageSource} style={styles.image} />
            </View>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 200,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: GlobalStyles.colors.light300,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  contentContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  innerImageContainer: {
    flex: 1,
    borderRadius: 24,
    maxHeight: 130,
    maxWidth: 130,
    overflow: "hidden",
  },
  image: {
    maxHeight: 130,
    maxWidth: 130,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
