import { type NextPage } from "next";
import Link from "next/link";

import Contact from "@/components/Contact";
<<<<<<< HEAD
import Card from "@/components/Card";
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> restore

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
<<<<<<< HEAD

const Home: NextPage = () => {
=======
import path from "path";
import fs from "fs";

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
      <Link href={props.href} target="_blank">
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
      </Link>
    </Card>
  );
};

const projects: Project[] = [
  // TODO: Change these to be real projects
  {
    title: "Internal Use Application",
    href: "https://github.com/jpaulsanchez15/forward-science-automation-public",
    description:
      "I led the development of an internal application that revolutionized order processing, resulting in a remarkable 70% increase in efficiency and a 40% improvement in delinquent payment recovery. By automating tasks and reducing manual data entry by 90%, equivalent to the work of 3 employees, significant cost savings were achieved.",
  },
  {
    title: "Sales Growth Display",
    href: "https://github.com/jpaulsanchez15/sales-display-public",
    description:
      "I designed and implemented a dynamic sales trends display showcased on TV, effectively presenting real-time sales data to stakeholders, potential investors, partners, and clients",
  },
  {
    title: "Reizes Law",
    href: "https://www.reizeslaw.com",
    description:
      "I developed a professional website for Reizes Law, a dynamic law firm seeking to establish a strong online presence. The website was built using WordPress, following the client's specific requirements. They expressed great satisfaction with the final results.",
  },
  // !! COMING SOON !!
  // {
  //   title: "Texas Showcase League",
  //   href: "",
  //   description: "Come play for the worlds best baseball league.",
  // },
  // {
  //   title: "Texas Blackhawks Baseball",
  //   href: "",
  //   description:
  //     "",
  // },
  // {
  //   title: "Roaring Renovations",
  //   href: "",
  //   description: "",
  // },
];

const Home = ({ blogFiles }: BlogProps) => {
>>>>>>> restore
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
<<<<<<< HEAD
                I&apos;m a web developer with a passion for collaboration
                and learning. I&apos;m an avid gamer, reader, and love to build
=======
                I&apos;m a web developer with a passion for collaboration and
                learning. I&apos;m an avid gamer, reader, and love to build
>>>>>>> restore
                PC&apos;s.
              </p>
            </div>
          </div>
        </section>

        <h2 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
          Projects
        </h2>
<<<<<<< HEAD
        <section className="flex flex-col mx-12 md:flex md:flex-row md:items-stretch md:w-1/2 md:m-auto md:mt-12 gap-4 mt-12">
          <Card
            title="Internal Use Application"
            href={
              "https://github.com/jpaulsanchez15/forward-science-automation-public"
            }
            description="Increased order processing efficiency by 70%. Improved delinquent payment recovery by 40%. Reduced need for manual data entry by 90%. Did the work of 3 employees, which saved us money."
          />
          <Card
            title="Sales Growth Display"
            href={"https://github.com/jpaulsanchez15/sales-display-public"}
            description="Displayed on a TV for stakeholders, potential investors, partners, and clients to see the current trends in sales."
          />
        </section>

        <section id="contact">
=======
        <section className="flex flex-col items-center mx-4 my-6 m-auto justify-between">
          {projects.map((project) => (
            <Cards
              key={project.title}
              description={project.description}
              title={project.title}
              href={project.href}
            />
          ))}
        </section>

        <section id="blog">
          <h2 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
            Blog
          </h2>
          <div>
            <div className="flex flex-col items-center mx-4 my-6 m-auto justify-between">
              {/* limit the amount fetched, sort by date, then have a read more button */}
              {blogFiles.map((file) => (
                <Cards
                  key={file.fileName}
                  title={file.fileName.replace(/\.md$/, "")}
                  description={`${file.content}...`}
                  href={`/blog/${slugify(file.fileName.replace(/\.md$/, ""))}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="block mt-12 text-5xl text-slate-100 text-center font-extrabold">
            Contact
          </h2>
>>>>>>> restore
          <Contact />
        </section>
      </main>
    </>
  );
};

<<<<<<< HEAD
=======
type BlogFile = {
  fileName: string;
  content: string;
};

type BlogProps = {
  blogFiles: BlogFile[];
};

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\d]+/g, "-") // Replace non-alphanumeric characters with a hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

// Function to remove Markdown headings and get plain text
const removeMarkdownHeadings = (markdownContent: string): string => {
  return markdownContent.replace(/^#+\s+(.*)$/gm, "$1");
};

export async function getServerSideProps() {
  const directoryPath = path.join(
    process.cwd(),
    "/src/pages/blog/markdownFiles"
  );

  try {
    const fileNames = await fs.promises.readdir(directoryPath);
    const blogFiles: BlogFile[] = [];

    for (const fileName of fileNames) {
      const filePath = path.join(directoryPath, fileName);
      const fileContent = await fs.promises.readFile(filePath, "utf-8");

      const plainText = removeMarkdownHeadings(fileContent);
      const truncatedContent = plainText.substring(0, 100);

      blogFiles.push({ fileName, content: truncatedContent });
    }

    return {
      props: {
        blogFiles,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        blogFiles: [],
      },
    };
  }
}

>>>>>>> restore
export default Home;
