import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";

const ComponentCategory = ({ label, imageSource, onPress }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && [styles.pressed]}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              {imagesLoaded ? null : (
                <ActivityIndicator
                  style={styles.activityIndicator}
                  size="large"
                />
              )}
              <Image
                style={styles.image}
                source={imageSource}
                onLoad={handleImageLoad}
              />
            </View>
            <Text style={styles.text}>{label}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ComponentCategory;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: GlobalStyles.colors.light300,
    margin: 16,
    borderRadius: 24,
  },
  container: {
    flex: 1,
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
    borderRadius: 36,
    width: 100,
    height: 100,
    overflow: "hidden",
    marginRight: 30,
  },
  image: {
    maxHeight: 100,
    maxWidth: 100,
  },
  activityIndicator: {
    marginTop: 30,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    flex: 2,
    fontSize: 24,
    color: GlobalStyles.colors.dark900,
    textAlign: "center",
    fontWeight: "bold",
  },
});
