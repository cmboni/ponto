import { useEffect, useState } from "react";
import Head from "next/head";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import firebase from "../src/firebase";
import SignInScreen from "../components/login";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged(setUser);

  return (
    <>
      <Head>
        <title>Ponto</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {user ? <Component {...pageProps} /> : <SignInScreen />}
      </ThemeProvider>
    </>
  );
}
