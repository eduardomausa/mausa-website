import React, { useState } from "react";
import {
  HamburgerMenuNavigation,
  HamburguerMenuButton,
  StyledHamburguerMenu,
} from "./hamburguer-menu.style";
import { Menu, X as Close } from "react-feather";
import { useAppSelector } from "../../redux/hooks/redux-hooks";
import Link from "next/link";

export default function HamburguerMenu() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const [isOpen, setIsOpen] = useState(false);

  function toggleHamburguerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledHamburguerMenu>
      <HamburguerMenuButton onClick={toggleHamburguerMenu} isMenuOpen={isOpen}>
        {themeMode === "dark" ? (
          isOpen ? (
            <Close color="#FFF" />
          ) : (
            <Menu color="#FFF" />
          )
        ) : isOpen ? (
          <Close color="#000" />
        ) : (
          <Menu color="#000" />
        )}
      </HamburguerMenuButton>
      {isOpen ? (
        <HamburgerMenuNavigation themeMode={themeMode}>
          <Link href="/">Home</Link>
          <Link href="/about">Sobre mim</Link>
          <Link href="/">Currículo</Link>
        </HamburgerMenuNavigation>
      ) : null}
    </StyledHamburguerMenu>
  );
}
