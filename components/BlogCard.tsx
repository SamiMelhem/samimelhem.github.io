// components/BlogCard.tsx
import Link from "next/link";

export interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
  type?: 'industry-update' | 'personal';
  tags?: string[];
  compact?: boolean; // For featured section display
}

export default function BlogCard({ slug, title, date, excerpt, image, type, tags, compact }: BlogCardProps) {
  // Define gradient backgrounds that match blog post backgrounds
  const getGradientClass = (imageType?: string) => {
    switch (imageType) {
      case 'bare-minimum-gradient':
        return 'bg-gradient-to-br from-blue-900 via-black to-emerald-900';
      case 'gradient-gray-blue':
        return 'bg-gradient-to-br from-gray-900 via-black to-blue-900';
      case 'gradient-purple-pink':
        return 'bg-gradient-to-br from-purple-900 via-black to-pink-900';
      case 'gradient-indigo-purple':
        return 'bg-gradient-to-br from-indigo-900 via-black to-purple-900';
      default:
        return 'bg-gradient-to-br from-gray-800 to-gray-900';
    }
  };

  return (
    <Link 
        href={`/blog/${slug}/`} 
        className={`
            group block h-full w-full ${compact ? 'min-h-[280px]' : 'min-h-[400px]'}
            transition-all hover:scale-[1.02]
        `}
    >
      <div className={`relative w-full h-full flex flex-col ${getGradientClass(image)}`}>
        {/* Full gradient background that fills entire card */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Content overlay */}
        <div className={`relative z-10 p-6 flex flex-col justify-between h-full ${compact ? 'min-h-[280px]' : 'min-h-[400px]'}`}>
          {/* Type badge */}
          {type && (
            <div className="flex justify-center mb-2">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                type === 'industry-update' 
                  ? 'bg-purple-500/30 text-purple-200 border border-purple-500/50' 
                  : 'bg-teal-500/30 text-teal-200 border border-teal-500/50'
              }`}>
                {type === 'industry-update' ? 'Industry Update' : 'Personal'}
              </span>
            </div>
          )}
          
          <div className="flex-1 flex flex-col justify-center text-center">
            <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-semibold mb-3 group-hover:text-teal-400 transition-colors text-white`}>
                {title}
            </h3>
            <time className="block text-sm text-gray-300 mb-4">{date}</time>
            {excerpt && (
              <p className={`text-gray-200 leading-relaxed ${compact ? 'line-clamp-2' : 'line-clamp-4'} max-w-none`}>
                {excerpt}
              </p>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {tags.slice(0, compact ? 2 : 3).map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {tags.length > (compact ? 2 : 3) && (
                <span className="px-2 py-1 text-xs bg-white/10 text-gray-400 rounded-md">
                  +{tags.length - (compact ? 2 : 3)}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
