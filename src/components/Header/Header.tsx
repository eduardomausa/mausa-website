import {
  Container,
  Content,
  Title,
  ChangeThemeContainer,
  ChangeThemeButton,
} from "./header.style";
import { Sun, Moon } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hooks";
import { toggled } from "../../redux/slices/theme-mode/theme-mode-slice";
import Link from "next/link";
import Menu from "../Menu/Menu";
import HamburguerMenu from "../HamburguerMenu/HamburguerMenu";

export default function Header() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useAppDispatch();

  function handleChangeTheme() {
    dispatch(toggled());
  }

  return (
    <Container>
      <Content>
        <HamburguerMenu />
          <Title>
            <Link href="/">Eduardo Mausa</Link>
          </Title>
        <Menu />
        <ChangeThemeContainer>
          <ChangeThemeButton onClick={handleChangeTheme}>
            {themeMode === "dark" ? (
              <Sun size={24} color="#FFF" />
            ) : (
              <Moon size={24} color="#000" />
            )}
          </ChangeThemeButton>
        </ChangeThemeContainer>
      </Content>
    </Container>
  );
}
