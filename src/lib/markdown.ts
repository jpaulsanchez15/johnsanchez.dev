import fs from "fs";

const readMarkdownFile = (filePath: string) => {
  try {
    const markdownContent = fs.readFileSync(filePath, "utf-8");
    return markdownContent;
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return "";
  }
};

export { readMarkdownFile };
