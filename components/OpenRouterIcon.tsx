import React from "react";

interface OpenRouterIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const OpenRouterIcon = ({ size = 24, className = '', style, ...props }: OpenRouterIconProps) => (
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
    {/* OpenRouter icon - routing/connecting multiple paths representing LLM API gateway */}
    {/* Central hub node */}
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    
    {/* Outer connection nodes */}
    <circle cx="4" cy="6" r="2" fill="currentColor"/>
    <circle cx="20" cy="6" r="2" fill="currentColor"/>
    <circle cx="4" cy="18" r="2" fill="currentColor"/>
    <circle cx="20" cy="18" r="2" fill="currentColor"/>
    
    {/* Connection lines from center to outer nodes */}
    <path 
      d="M9.5 10.5L5.5 7.5M14.5 10.5L18.5 7.5M9.5 13.5L5.5 16.5M14.5 13.5L18.5 16.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      fill="none"
    />
    
    {/* Outer ring suggesting routing/gateway */}
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeDasharray="3 2"
      opacity="0.5"
    />
  </svg>
);

export default OpenRouterIcon;

