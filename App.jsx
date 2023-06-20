import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { ThemeProvider } from "styled-components/native";
import { theme } from './src/infrastructure/theme'

import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp } from 'firebase/app';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB7O4KgqPBR6eCDEew4ZMkBgj1EkFgOxt4",
  authDomain: "mealstogo-9b3f3.firebaseapp.com",
  projectId: "mealstogo-9b3f3",
  storageBucket: "mealstogo-9b3f3.appspot.com",
  messagingSenderId: "1020668582248",
  appId: "1:1020668582248:web:648b211cfe31fc48785edd"
};

const app = initializeApp(firebaseConfig);


export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
