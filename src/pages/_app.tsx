import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store/store";
import { darkTheme, lightTheme, GlobalStyles } from "../../styles/ThemeConfig";
import { useAppSelector } from "../redux/hooks/redux-hooks";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
