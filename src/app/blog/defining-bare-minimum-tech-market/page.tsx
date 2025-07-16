import DefiningBareMinimumClient from "./DefiningBareMinimumClient";

export default function DefiningBareMinimumPost() {
  const postData = {
    title: "Defining the Bare Minimum in Today's Tech Market",
    date: "July 16th, 2025",
    readTime: "15 min read",
    author: "Sami Melhem",
    excerpt: "The tech industry's entry requirements have fundamentally shifted. It's no longer about 'Do you know how to code?' but 'Do you know how to code with AI?' Here's what the new bare minimum looks like and how to excel beyond it.",
    tags: ["Career Development", "AI Integration", "Tech Skills", "Market Trends", "Professional Growth"]
  };

  return <DefiningBareMinimumClient postData={postData} />;
} 