import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { ExitToApp, Menu } from "@material-ui/icons";
import firebase from "../src/firebase";

export default function IndexPage() {
  return (
    <>
      <AppBar position="static">
        <Container disableGutters>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" disabled>
              <Menu />
            </IconButton>
            <Typography variant="h6">Ponto</Typography>
            <IconButton
              style={{ marginLeft: "auto" }}
              aria-label="logout"
              edge="end"
              color="inherit"
              onClick={(event) => firebase.auth().signOut()}
            >
              <ExitToApp />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>Ponto</Container>
    </>
  );
}
