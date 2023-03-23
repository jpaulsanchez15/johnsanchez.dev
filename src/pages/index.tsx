import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Pane from "@/components/Pane";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Contact from "@/components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>John Sanchez | Home</title>
        <meta
          name="description"
          content="Welcome to John Sanchez's developer page."
        />
      </Head>
      <header id="home">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-white m-auto">
          <span className="block bg-gradient-to-r from-white via-orange-300 to-red-600 bg-clip-text text-8xl text-transparent">
            Hi, I&apos;m John Sanchez
          </span>
          <span className="block mt-3 text-6xl text-gray-300">
            Software Developer
          </span>
        </h1>
        <div className="flex flex-row items-center justify-center mt-1 space-x-4">
          <Link
            href="https://github.com/jpaulsanchez15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="hover:bg-gray-600 py-2 pl-3 pr-3 pb-2"
              size="3x"
              color="white"
              icon={faGithub}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-sanchez-1225b222a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="hover:bg-gray-600 py-2 pl-3 pr-3 pb-2"
              size="3x"
              color="white"
              icon={faLinkedin}
            />
          </Link>
        </div>
      </header>
      <main>
        <Contact />
      </main>
    </>
  );
};

export default Home;
