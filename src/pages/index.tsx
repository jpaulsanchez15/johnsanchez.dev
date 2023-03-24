import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Contact from "@/components/Contact";
import Card from "@/components/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
        <h1 className="text-center ml-3 mr-3 mt-12 text-4xl font-extrabold tracking-tight text-white m-auto">
          <span className="block bg-gradient-to-r from-white via-orange-300 to-red-600 bg-clip-text text-8xl text-transparent">
            Hi, I&apos;m John Sanchez
          </span>
          <span className="block mt-3 text-6xl text-slate-100">
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
              className="hover:bg-gray-800 py-2 pl-3 pr-3 pb-2"
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
              className="hover:bg-gray-800 py-2 pl-3 pr-3 pb-2"
              size="3x"
              color="white"
              icon={faLinkedin}
            />
          </Link>
        </div>
      </header>
      <main>
        <h1
          id="about"
          className="block mt-12 text-5xl text-slate-100 text-center font-extrabold"
        >
          About me
        </h1>
        <section>
          <div className="flex text-xl flex-col items-center justify-center mt-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-center w-1/3 text-slate-200 font-semibold">
                I&apos;m a software developer with a passion for collaboration
                and learning. I&apos;m an avid gamer, reader, and love to build
                PC&apos;s.
              </p>
            </div>
          </div>
        </section>
        <h1
          id="about"
          className="block mt-12 text-5xl text-slate-100 text-center font-extrabold"
        >
          Projects
        </h1>
        <div className="flex justify-center gap-4 mt-12">
          <Card
            href="https://github.com/jpaulsanchez15/forward-science-automation"
            title="Internal Use Application"
            description="Increased order processing efficiency by 70%. Improved deliquent payment recovery by 40%. Reduced need for manual data entry by 90%. Did the work of 3 employees, which saved us money."
          />
          <Card
            href="https://github.com/jpaulsanchez15/sales-display"
            title="Sales Display for Stakeholders"
            description="Displayed on a TV for stakeholders, potential investors, partners, and clients to see the current trends in sales."
          />
        </div>

        {/* <div className="flex justify-center gap-4 mt-6">
          <Card
            href="https://google.com"
            title="test"
            description="jkasdfjkasjdf jadsjfajsdfjas "
          />
          <Card
            href="https://google.com"
            title="test"
            description="jkasdfjkasjdf jadsjfajsdfjas "
          />
        </div> */}
        <Contact />
      </main>
    </>
  );
};

export default Home;
