import "@/styles/globals.css";
import { grommet, Grommet } from "grommet";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={theme} full>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Grommet>
  );
}
