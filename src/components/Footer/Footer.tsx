import { useAppSelector } from "../../redux/hooks/redux-hooks";
import {
  StyledFooter,
  CopyrightIcon,
  CopyrightContainer,
  CopyrightText,
  CopyrightTextContainer,
  CopyrightTitleContainer,
} from "./footer.style";

export default function Footer() {
  const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <StyledFooter themeMode={themeMode}>
      <CopyrightContainer>
        <CopyrightTitleContainer>
          <CopyrightText>Todos os direitos reservados</CopyrightText>
        </CopyrightTitleContainer>
        <CopyrightTextContainer>
          <CopyrightText>&#169; Eduardo Mausa 2023</CopyrightText>
        </CopyrightTextContainer>
      </CopyrightContainer>
    </StyledFooter>
  );
}
