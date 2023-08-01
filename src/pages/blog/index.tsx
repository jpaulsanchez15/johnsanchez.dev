import ReactMarkdown from "react-markdown";
import { readMarkdownFile } from "@/lib/markdown";
import path from "path";
import fs from "fs";

export async function getServerSideProps() {
  const markdownFilePath = path.join(
    process.cwd(),
    "src/pages/blog/markdownFiles/pc-build.md"
  );
  const markdownContent = fs.readFileSync(markdownFilePath, "utf-8");

  return {
    props: {
      markdownContent,
    },
  };
}

const BlogIndex = ({ markdownContent }: { markdownContent: string }) => {
  const components = {
    h1: ({ node, ...props }: { node: React.ReactNode }) => (
      <h1 style={{ fontSize: "32px", margin: "1rem" }} {...props} />
    ),
    h2: ({ node, ...props }: { node: React.ReactNode }) => (
      <h2 style={{ fontSize: "28px", margin: "1rem" }} {...props} />
    ),
    h3: ({ node, ...props }: { node: React.ReactNode }) => (
      <h3 style={{ fontSize: "24px", margin: "1rem" }} {...props} />
    ),
    h4: ({ node, ...props }: { node: React.ReactNode }) => (
      <h4 style={{ fontSize: "20px", margin: "1rem" }} {...props} />
    ),
    h5: ({ node, ...props }: { node: React.ReactNode }) => (
      <h5 style={{ fontSize: "16px", margin: "1rem" }} {...props} />
    ),
    h6: ({ node, ...props }: { node: React.ReactNode }) => (
      <h6 style={{ fontSize: "14px", margin: "1rem" }} {...props} />
    ),
  } as any;

  return (
    <ReactMarkdown
      components={components}
      className="text-slate-100 text-center m-auto border rounded-sm tracking-tight md:lg:w-1/3 p-4 my-12"
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export default BlogIndex;
