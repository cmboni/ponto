import { useEffect, useState } from "react";
import Head from "next/head";
import { CssBaseline, Grid, ThemeProvider, Container } from "@material-ui/core";
import theme from "../src/theme";
import firebase from "../src/firebase";
import SignInScreen from "../components/SignInScreen";
import "../styles.css";

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
        {user ? (
          <Component {...pageProps} />
        ) : (
          <Container>
            <Grid
              container
              spacing={3}
              justify="center"
              alignItems="center"
              style={{ height: "100vh", overflow: "hidden" }}
            >
              <Grid item>
                <SignInScreen />
              </Grid>
            </Grid>
          </Container>
        )}
      </ThemeProvider>
    </>
  );
}
