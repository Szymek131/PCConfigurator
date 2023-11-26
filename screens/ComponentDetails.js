import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../constants/styles";
const ComponentDetails = ({ route }) => {
  const data = route.params.data;
  const id = route.params.componentId;
  console.log(id);
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={data.imgSource}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.componentName}>{data.name}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Parametry</Text>
            <View style={styles.parametersContainer}>
              {/* <View style={styles.parametrContainer}>
                <FlatList
                  data={data.parameters}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                    <View style={styles.parametrItemContainer}>
                      <Text style={styles.parametrLabelText}>{item.label}</Text>
                    </View>
                  )}
                />
              </View> */}
              <View style={styles.parametrContainer}>
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
                />
              </View>
            </View>
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
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
    paddingBottom: 40,
    borderRadius: 64,
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
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  parametrItemInnerContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
