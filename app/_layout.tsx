import "../global.css";
import React from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import * as ExpoNavigationBar from "expo-navigation-bar";

SplashScreen.preventAutoHideAsync();

if (Platform.OS === "android") {
  ExpoNavigationBar.setVisibilityAsync("hidden");
  ExpoNavigationBar.setBehaviorAsync("overlay-swipe");
}

export default function RootLayout() {
  const [loaded] = useFonts({
    "Epilogue-Regular": require("@/assets/fonts/Epilogue/Epilogue-Regular.ttf"),
    "Epilogue-Bold": require("@/assets/fonts/Epilogue/Epilogue-Bold.ttf"),
    "Epilogue-SemiBold": require("@/assets/fonts/Epilogue/Epilogue-SemiBold.ttf"),
    "Epilogue-Medium": require("@/assets/fonts/Epilogue/Epilogue-Medium.ttf"),
    "Epilogue-Light": require("@/assets/fonts/Epilogue/Epilogue-Light.ttf"),
    "Epilogue-ExtraLight": require("@/assets/fonts/Epilogue/Epilogue-ExtraLight.ttf"),
    "Epilogue-Thin": require("@/assets/fonts/Epilogue/Epilogue-Thin.ttf"),
    "Epilogue-Black": require("@/assets/fonts/Epilogue/Epilogue-Black.ttf"),
    "Epilogue-ExtraBold": require("@/assets/fonts/Epilogue/Epilogue-ExtraBold.ttf"),
    "Rubik-Black": require("@/assets/fonts/Rubik/Rubik-Black.ttf"),
    "Rubik-Bold": require("@/assets/fonts/Rubik/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("@/assets/fonts/Rubik/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("@/assets/fonts/Rubik/Rubik-Light.ttf"),
    "Rubik-Medium": require("@/assets/fonts/Rubik/Rubik-Medium.ttf"),
    "Rubik-Regular": require("@/assets/fonts/Rubik/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("@/assets/fonts/Rubik/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar
        style="dark"
        hidden={false}
        translucent={false}
        backgroundColor="#FBFBFB"
      />
    </>
  );
}
