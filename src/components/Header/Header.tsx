import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.scss";
import { Sun, Moon } from "react-feather";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux-hooks";
import { toggled } from "../../redux/slices/theme-mode/theme-mode-slice";
import * as S from "./header-styles";

export function Header() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useAppDispatch();

  function handleChangeTheme() {
    dispatch(toggled());
  }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Title>
          <Link href="/">Mausa blog</Link>
        </S.Title>
        <S.NavContainer>
          <S.StyledLink href="/">Home</S.StyledLink>
          <S.StyledLink href="/posts">Posts</S.StyledLink>
          <S.StyledLink href="/about">About</S.StyledLink>
        </S.NavContainer>

        <S.ChangeThemeContainer>
          <S.ChangeThemeButton onClick={handleChangeTheme}>
            {themeMode === "dark" ? (
              <Sun size={24} color="#FFF" />
            ) : (
              <Moon size={24} color="#000" />
            )}
          </S.ChangeThemeButton>
        </S.ChangeThemeContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
