import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1`
  font-size: 16px;
`;

export const ChangeThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeThemeButton = styled.button`
  all: unset;
  cursor: pointer;
`;
