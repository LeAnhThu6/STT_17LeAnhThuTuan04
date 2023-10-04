const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  LoginScreen,
  RateScreen,
  GeneratePasswordScreen,
  TikiOKScreen,
} from "./screens";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="TikiOKScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="RateScreen" component={RateScreen} />
            <Stack.Screen
              name="GeneratePasswordScreen"
              component={GeneratePasswordScreen}
            />
            <Stack.Screen name="TikiOKScreen" component={TikiOKScreen} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
