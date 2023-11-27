import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ComponentItem = ({ label, imageSource, onPress }) => {
  return (
    <View style={styles.rootContainer}>
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
    </View>
  );
};

export default ComponentItem;

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
    borderRadius: 12,
  },
  container: {
    flex: 1,
    borderRadius: 12,
    maxHeight: 150,
    width: 350,
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
    color: GlobalStyles.colors.dark900,
    textAlign: "center",
    fontWeight: "bold",
  },
});
