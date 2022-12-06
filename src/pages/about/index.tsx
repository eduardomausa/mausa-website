import React from "react";
import * as S from "./about-styles";

export default function About() {
  return (
    <S.ContentContainer>
      <h1>About me</h1>
      <S.SectionContent>
        <p>
          I&apos;m a software developer living in Brazil. My journey in the tech
          industry started back in my high school
        </p>
      </S.SectionContent>
    </S.ContentContainer>
  );
}
