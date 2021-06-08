import Link from "next/link";
import { Container } from "@material-ui/core";

export default function IndexPage() {
  return (
    <Container>
      Hello World.{" "}
      <Link href="/about" passHref>
        <a>About</a>
      </Link>
    </Container>
  );
}
