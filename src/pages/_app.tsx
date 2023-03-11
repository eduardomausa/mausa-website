import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store/store";
import { useAppSelector } from "../redux/hooks/redux-hooks";
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default wrapper.withRedux(App);
