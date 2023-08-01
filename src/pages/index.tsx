import { type NextPage } from "next";
import Link from "next/link";

import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

type Project = {
  title: string;
  href: string;
  description: string;
};

type CardProps = {
  href: string;
  title: string;
  description: string;
};

const Cards = (props: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

const projects: Project[] = [
  // TODO: Change these to be real projects
  {
    title: "Internal Use Application",
    href: "https://github.com/jpaulsanchez15/forward-science-automation-public",
    description:
      "Led the development of an internal application that revolutionized order processing, resulting in a remarkable 70% increase in efficiency and a 40% improvement in delinquent payment recovery. By automating tasks and reducing manual data entry by 90%, equivalent to the work of 3 employees, significant cost savings were achieved.",
  },
  {
    title: "Sales Growth Display",
    href: "https://github.com/jpaulsanchez15/sales-display-public",
    description:
      "Designed and implemented a dynamic sales trends display showcased on TV, effectively presenting real-time sales data to stakeholders, potential investors, partners, and clients",
  },
  {
    title: "Texas Showcase League",
    href: "https://github.com/jpaulsanchez15/forward-science-automation-public",
    description: "Come play for the worlds best baseball league.",
  },
  {
    title: "Texas Blackhawks Baseball",
    href: "https://github.com/jpaulsanchez15/sales-display-public",
    description:
      "Displayed on a TV for stakeholders, potential investors, partners, and clients to see the current trends in sales.",
  },
  {
    title: "Roaring Renovations",
    href: "https://github.com/jpaulsanchez15/forward-science-automation-public",
    description: "Come play for the worlds best baseball league.",
  },
  {
    title: "Reizes Law",
    href: "https://github.com/jpaulsanchez15/sales-display-public",
    description: "Come join one of the best teams in Texas.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div id="home" className="p-7 md:p-5" />
      <header>
        <h1 className="text-center ml-3 mr-3 mt-12 text-4xl font-extrabold tracking-tight text-white m-auto">
          <span className="block bg-gradient-to-r from-white via-orange-300 to-red-600 bg-clip-text text-6xl md:text-8xl text-transparent">
            Hi, I&apos;m John Sanchez
          </span>
          <span className="block mt-3 text-4xl md:text-6xl text-slate-100">
            Web Developer
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
        <div id="about" className="p-7" />
        <h2 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
          About me
        </h2>

        <section>
          <div className="flex text-2xl md:text-2xl flex-col items-center justify-center mt-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-center w-1/2 text-slate-200 font-semibold">
                I&apos;m a web developer with a passion for collaboration and
                learning. I&apos;m an avid gamer, reader, and love to build
                PC&apos;s.
              </p>
            </div>
          </div>
        </section>

        <h2 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
          Projects
        </h2>
        <section className="flex flex-col items-center my-12 m-auto justify-between">
          {projects.map((project) => (
            <Cards
              key={project.title}
              description={project.description}
              title={project.title}
              href={project.title}
            />
          ))}
        </section>

        <section id="blog">
          <h2 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
            Blog
          </h2>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
