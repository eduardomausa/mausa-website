import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.div`
  height: 5rem;
`;

export const HeaderContent = styled.div`
  max-width: 80%;
  height: 5rem;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Comfortaa";
  font-size: 1.5rem;
  font-weight: 700;
`;

export const NavContainer = styled.nav``;

export const StyledLink = styled(Link)`
  padding: 0 2.5rem;
  font-weight: 600;

  transition: 0.2s;

  &:hover {
    color: var(--gray-300);
  }
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
