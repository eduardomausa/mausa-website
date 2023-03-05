import styled from "styled-components";
import { darkTheme, lightTheme } from "../../../styles/ThemeConfig";

type HamburguerMenuProps = {
  isMenuOpen?: boolean;
  themeMode?: string;
};

export const StyledHamburguerMenu = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const HamburguerMenuButton = styled.button<HamburguerMenuProps>`
  all: unset;
  cursor: pointer;
  color: ${(props) => (props.isMenuOpen ? "green" : "red")};

  @media (min-width: 769px) {
    display: none;
  }
`;

export const HamburgerMenuNavigation = styled.div<HamburguerMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 60px;
  left: 0;
  width: 160px;
  height: 184px;
  padding: 20px;
  background-color: ${(props) =>
    props.themeMode === "dark" ? darkTheme.body : lightTheme.body};

  @media (min-width: 769px) {
    display: none;
  }
`;
