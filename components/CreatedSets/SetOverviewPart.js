import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";

const SetOverviewPart = ({ label, imageSource, onPress }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };
  return (
    <View style={styles.rootContainer}>
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
          <View style={styles.textContainer}>
            <Text style={styles.text}>{label}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SetOverviewPart;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: GlobalStyles.colors.light300,
    margin: 10,
    borderRadius: 30,
  },
  pressed: {
    opacity: 0.5,
  },
  contentContainer: {
    flex: 1,
    width: 200,
    height: 230,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
  imageContainer: {
    flex: 4,
    paddingTop: 10,
    overflow: "hidden",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 24,
  },
  textContainer: {
    flex: 2,
    backgroundColor: "white",
    borderRadius: 24,
    margin: 10,
  },
  text: {
    flex: 2,
    fontSize: 14,
    color: GlobalStyles.colors.dark900,
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  activityIndicator: {
    flex: 1,
    marginTop: 50,
  },
});
