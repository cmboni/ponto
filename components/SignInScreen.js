import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../src/firebase";
import { uiConfig } from "../src/firebaseui";

function SignInScreen() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default SignInScreen;
