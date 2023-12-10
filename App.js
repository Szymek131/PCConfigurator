import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "./constants/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ComponentsCategories from "./screens/ComponentsCategories";
import BrowseComponents from "./screens/BrowseComponents";
import ComponentDetails from "./screens/ComponentDetails";

import Configurator from "./screens/Configurator";
import MotherboardStep from "./screens/Configurator/MotherboardStep";
import CPUStep from "./screens/Configurator/CPUStep";
import GPUStep from "./screens/Configurator/GPUStep";
import RAMStep from "./screens/Configurator/RAMStep";
import MemoryStep from "./screens/Configurator/MemoryStep";
import CaseStep from "./screens/Configurator/CaseStep";
import PowerSupplyStep from "./screens/Configurator/PowerSupplyStep";
import CoolerStep from "./screens/Configurator/CoolerStep";

import ConfiguratorContextProvider from "./store/context/configurator-context";

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
      <ConfiguratorContextProvider>
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
            <Stack.Screen
              name="MotherboardStep"
              component={MotherboardStep}
              options={{
                title: "MotherboardStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="CPUStep"
              component={CPUStep}
              options={{
                title: "CPUStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="GPUStep"
              component={GPUStep}
              options={{
                title: "GPUStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="RAMStep"
              component={RAMStep}
              options={{
                title: "RAMStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="MemoryStep"
              component={MemoryStep}
              options={{
                title: "MemoryStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="CoolerStep"
              component={CoolerStep}
              options={{
                title: "CoolerStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="PowerSupplyStep"
              component={PowerSupplyStep}
              options={{
                title: "PowerSupplyStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
            <Stack.Screen
              name="CaseStep"
              component={CaseStep}
              options={{
                title: "CaseStep",
                headerBackTitleStyle: {
                  fontSize: 22,
                  fontWeight: "bold",
                },
                headerTintColor: GlobalStyles.colors.dark900,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ConfiguratorContextProvider>
    </>
  );
}
