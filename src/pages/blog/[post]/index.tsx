import ReactMarkdown from "react-markdown";
import path from "path";
import fs from "fs";

import { GetServerSidePropsContext } from "next";

/*
 * This is the individual blog post page. This will be used to display
 * the blog posts.
 * This will grab the params from the url and then use that to get the
 * markdown file.
 * This will also use gssp to get the markdown file
 * and pass it down to the parent component.
 */

const unslugify = (slug: string): string => {
  return slug.toLowerCase().replace(/-/g, " ");
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { post } = context.params as { post: string };

  const originalFileName = unslugify(post);

  const markdownFilePath = path.join(
    process.cwd(),
    `src/pages/blog/markdownFiles/${originalFileName}.md`
  );

  console.log("Markdown file path:", markdownFilePath);

  try {
    const markdownContent = fs.readFileSync(markdownFilePath, "utf-8");

    return {
      props: {
        markdownContent,
      },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        markdownContent: "",
      },
    };
  }
}

const BlogPost = ({ markdownContent }: { markdownContent: string }) => {
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
    // As any fixes this but its not ideal.
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

export default BlogPost;
