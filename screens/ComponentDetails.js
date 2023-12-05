import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

const ComponentDetails = ({ navigation, route }) => {
  const data = route.params.data;
  const isConfigurating = route.params.isConfigurating;
  const componentNavigation = route.params.componentNavigation;
  console.log(componentNavigation);

  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIcon, setExpandedIcon] = useState("chevron-up");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const handleChoose = () => {
    console.log(data.imgSource);
    console.log(data);
    navigation.navigate(componentNavigation, {
      image: data.imgSource,
      data: data,
      isChoosed: true,
      name: data.name,
    });
  };

  const setExpandedHandler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setExpandedIcon("chevron-up");
    } else {
      setIsExpanded(true);
      setExpandedIcon("chevron-down");
    }
  };

  const setGoBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            {imagesLoaded ? null : (
              <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color="black"
              />
            )}
            <Image
              source={data.imgSource}
              style={styles.image}
              resizeMode="contain"
              onLoad={handleImageLoad}
            />
          </View>
          <Text style={styles.componentName}>{data.name}</Text>
          <View style={styles.textContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Parametry</Text>
              <View style={styles.expandedIconContainer}>
                <IconButton
                  onPress={setExpandedHandler}
                  icon={expandedIcon}
                  color={GlobalStyles.colors.dark900}
                  size={36}
                />
              </View>
            </View>
            <View style={styles.parametersContainer}>
              <View style={styles.parametrContainer}>
                {isExpanded && (
                  <FlatList
                    data={data.parameters}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                      <View style={styles.parametrItemContainer}>
                        <View style={styles.parametrItemInnerContainer}>
                          <Text style={styles.parametrLabelText}>
                            {item.label}
                          </Text>
                        </View>
                        <View style={styles.parametrItemInnerContainer}>
                          <Text style={styles.parametrValueText}>
                            {item.value}
                          </Text>
                        </View>
                      </View>
                    )}
                    keyExtractor={(item) => item.label}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            {isConfigurating && (
              <Button
                label="Wybierz"
                buttonColor={GlobalStyles.colors.primary500}
                buttonTextColor="black"
                onPress={handleChoose}
              />
            )}
            <Button
              label="Wróć"
              buttonColor={GlobalStyles.colors.triary700}
              buttonTextColor="white"
              onPress={setGoBackHandler}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ComponentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light300,
  },
  imageContainer: {
    marginTop: 20,
    borderRadius: 12,
    maxHeight: 300,
    maxWidth: 300,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  expandedIconContainer: {
    marginBottom: 8,
  },
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.light300,
    paddingBottom: 40,
    marginBottom: 24,
    borderRadius: 64,
    maxWidth: 350,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: GlobalStyles.colors.light300,
  },
  componentName: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 6,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 24,
    marginRight: 12,
  },
  activityIndicator: {
    marginTop: "50%",
  },
  parametersContainer: {
    flex: 1,
    flexDirection: "row",
  },
  parametrContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  parametrLabelText: {
    textAlign: "left",
    fontWeight: "bold",
  },
  parametrValueText: {
    textAlign: "center",
  },
  parametrItemContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 0.2,
    minHeight: 60,
    padding: 6,
    marginBottom: 4,
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  parametrItemInnerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
