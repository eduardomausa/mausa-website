import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  line-height: calc(1em + 0.5rem);
}

html, body, #__next {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

body, input, button, textarea, select {
  font: 400 1rem "Comfortaa", sans-serif;
}

body, input, textarea, select, button {
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const lightTheme = {
  body: "#e1e1e6",
  text: "#121214",
};

export const darkTheme = {
  body: "#121214",
  text: "#FFFFFF",
};
