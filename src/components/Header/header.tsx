import {
  Container,
  Content,
  TitleContainer,
  Title,
  ChangeThemeContainer,
  ChangeThemeButton,
} from "./header.style";
import { Sun, Moon } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hooks";
import { toggled } from "../../redux/slices/theme-mode/theme-mode-slice";
import Link from "next/link";

export default function Header() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useAppDispatch();

  function handleChangeTheme() {
    dispatch(toggled());
  }

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>
            <Link href="/">Eduardo Mausa</Link>
          </Title>
        </TitleContainer>
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
