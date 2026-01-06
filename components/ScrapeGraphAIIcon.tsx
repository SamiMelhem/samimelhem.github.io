import React from "react";

interface ScrapeGraphAIIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ScrapeGraphAIIcon = ({ size = 24, className = '', style, ...props }: ScrapeGraphAIIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
    style={style}
    {...props}
  >
    {/* ScrapeGraphAI icon - representing web scraping and AI graph processing */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
    <path d="M8 10h2v4H8zm3 0h2v6h-2zm3 0h2v5h-2z" fill="currentColor"/>
    <path d="M7 16l3-3 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ScrapeGraphAIIcon;

