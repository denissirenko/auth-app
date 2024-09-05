import Container from "./container";
import { Text } from "@radix-ui/themes";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Text align="center" as="div">
          © {new Date().getFullYear()} Copyright Text
        </Text>
      </Container>
    </footer>
  );
}
