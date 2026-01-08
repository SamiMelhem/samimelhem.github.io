// src/app/page.tsx
import Hero from '../../components/Hero';
import AboutPreview from '../../components/AboutPreview';
import FeaturedInFront from '../../components/FeaturedInFront';
import ContactIcons from '../../components/ContactIcons';
import projects from '../../data/projects';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export default function Home() {
  // ---- data loading stays here on the server ----
  // Filter featured projects from the actual projects data
  const featured = projects
    .filter(project => project.featured)
    .map(project => ({
      title: project.title,
      description: project.description,
      href: project.href ?? `/projects/${project.slug}/`,
      image: project.image || '/images/project-placeholder.png',
      techs: project.techs || [],
      slug: project.slug,
      github: project.github,
      liveDemo: project.liveDemo,
      date: project.date
    }));

  // Define our blog posts manually since we're using React components instead of MDX
  const posts: BlogPost[] = [
    {
      slug: "defining-bare-minimum-tech-market",
      title: "Defining the Bare Minimum in Today's Tech Market",
      date: "July 16th, 2025",
      excerpt: "The tech industry's entry requirements have fundamentally shifted. It's no longer about 'Do you know how to code?' but 'Do you know how to code with AI?' Here's what the new bare minimum looks like and how to excel beyond it.",
      image: "bare-minimum-gradient"
    },
    {
      slug: "lessons-learned-making-website",
      title: "5 Key Lessons I Learned from Making This Website (So You Don't Have To)",
      date: "June 28th, 2025",
      excerpt: "Five critical lessons I discovered while building my developer portfolio with Next.js, TypeScript, and modern web technologies - and how you can apply them to your own projects.",
      image: "gradient-gray-blue"
    },
    {
      slug: "why-blogging-matters-today", 
      title: "Why Blogging Matters in Today's Market",
      date: "June 29th, 2025",
      excerpt: "In an AI-driven job market where everyone has access to the same information, your unique perspective and ability to communicate complex ideas clearly has become your most valuable differentiator.",
      image: "gradient-purple-pink"
    }
  ]
  .sort((a,b) => {
    const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    return dateB.getTime() - dateA.getTime();
  })
  .slice(0, 2);

  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedInFront featured={featured} posts={posts} />
      <ContactIcons />
    </>
  );
}
