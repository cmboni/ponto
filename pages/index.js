import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

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
          </Toolbar>
        </Container>
      </AppBar>
      <Container>Ponto</Container>
    </>
  );
}
