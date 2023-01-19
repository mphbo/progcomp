import "@/styles/globals.css";
import { grommet, Grommet } from "grommet";
import type { AppProps } from "next/app";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={theme} full>
      <Component {...pageProps} />
    </Grommet>
  );
}
