import { Grid } from "@material-ui/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../src/firebase";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
};

function SignInScreen() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Grid item>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Grid>
    </Grid>
  );
}

export default SignInScreen;
