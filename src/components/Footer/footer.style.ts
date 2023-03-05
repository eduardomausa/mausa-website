import styled from "styled-components";
import { darkTheme, lightTheme } from "../../../styles/ThemeConfig";

type FooterProps = {
  themeMode?: string;
};

export const StyledFooter = styled.div<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 0 32px;
  position: fixed;
  bottom: 0;
  margin-top: auto;

  @media (max-width: 767px) {
    position: relative;
    bottom: auto;
    margin-top: auto;
  }

  /* border-top: 1px solid; */
  border-color: ${(props) =>
    props.themeMode === "dark" ? lightTheme.body : darkTheme.body};
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`;

export const CopyrightTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CopyrightTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
`;
