import Link from "next/link";
import React from "react";
import { StyledHamburguerMenu } from "./hamburguer-menu.style";
import { Menu } from "react-feather";
import { useAppSelector } from "../../redux/hooks/redux-hooks";

export default function HamburguerMenu() {
  const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <StyledHamburguerMenu>
      {themeMode === "dark" ? (
        <Menu size={24} color="#FFF" />
      ) : (
        <Menu size={24} color="#000" />
      )}
    </StyledHamburguerMenu>
  );
}
