import Link from "next/link";
import { StyledMenu } from "./menu.style";

export default function Menu() {
  return (
    <StyledMenu>
      <Link href="/">Home</Link>
      <Link href="/">Sobre mim</Link>
      <Link href="/">Currículo</Link>
      <Link href="/">Contato</Link>
    </StyledMenu>
  );
}
