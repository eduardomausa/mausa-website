import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store/store";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../../styles/ThemeConfig";
import { useAppSelector } from "../redux/hooks/redux-hooks";

function App({ Component, pageProps }: AppProps) {
  const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App)
