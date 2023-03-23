import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Sanchez | Home</title>
      </Head>
      <Navbar />
      <header>
        <h1 className="mt-4 py-2 text-center text-4xl font-extrabold tracking-tight text-white">
          <span className="block bg-gradient-to-r from-white via-orange-400 to-orange-800 bg-clip-text text-8xl text-transparent">
            Hi, I&apos;m John Sanchez
          </span>
          <span className="block mt-3 text-6xl text-gray-300">
            Software Developer
          </span>
        </h1>
      </header>
    </>
  );
};

export default Home;
