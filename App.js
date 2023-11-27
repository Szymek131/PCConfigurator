import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "./constants/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import ComponentsCategories from "./screens/ComponentsCategories";
import BrowseComponents from "./screens/BrowseComponents";
import Configurator from "./screens/Configurator";
import ComponentDetails from "./screens/ComponentDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabsScreens = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.secondary700,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.dark900,
      }}
    >
      <BottomTabs.Screen
        name="ComponentsCategories"
        component={ComponentsCategories}
        options={{
          title: "Kategorie komponentów",
          tabBarLabel: "Komponenty",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerTintColor: GlobalStyles.colors.dark900,
        }}
      />
      <BottomTabs.Screen
        name="Configurator"
        component={Configurator}
        options={{
          title: "Konfigurator",
          tabBarLabel: "Konfigurator",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="build" size={size} color={color} />
          ),
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerTintColor: GlobalStyles.colors.dark900,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="BottomTabsScreens"
            component={BottomTabsScreens}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BrowseComponents"
            component={BrowseComponents}
            options={({ route }) => ({
              title: route.params.name,
              headerTitleStyle: {
                fontSize: 22,
                fontWeight: "bold",
              },
              headerTintColor: GlobalStyles.colors.dark900,
            })}
          />
          <Stack.Screen
            name="ComponentDetails"
            component={ComponentDetails}
            options={{
              title: "",
              headerBackTitleStyle: {
                fontSize: 22,
                fontWeight: "bold",
              },
              headerTintColor: GlobalStyles.colors.dark900,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});
