import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { LoginScreen } from "~screens/auth";
import { Loader } from "~components";
import ScreenNames from "./routes";
import { Chat, HomeScreen } from "~screens/app";
import { selectIsLoggedIn } from "~redux/slices/user";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Loader />
      <Stack.Navigator
        initialRouteName={ScreenNames.CHAT}
        screenOptions={{ header: () => false }}
      >
        <Stack.Screen name={ScreenNames.CHAT} component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
