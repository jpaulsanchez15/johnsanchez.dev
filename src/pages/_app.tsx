import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Head>
        <title>John Sanchez | Welcome</title>
        <meta
          name="description"
          content="Welcome to John Sanchez's developer page."
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
