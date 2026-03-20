import React from "react";

const PyAuthIcon = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      {/* Shield background */}
      <path 
        d="M60 15 L95 30 V60 C95 82 78 100 60 108 C42 100 25 82 25 60 V30 L60 15Z" 
        fill="url(#pyAuthShieldGradient)" 
        stroke="#6366f1" 
        strokeWidth="2"
        opacity="0.9"
      />
      
      <defs>
        <linearGradient id="pyAuthShieldGradient" x1="60" y1="15" x2="60" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#312e81"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </linearGradient>
      </defs>
      
      {/* Python logo stylized - two intertwined snakes */}
      <g transform="translate(60, 52)">
        {/* Blue snake */}
        <path 
          d="M-2 -20 C-2 -24 -8 -24 -12 -20 C-16 -16 -16 -8 -12 -4 L-4 4 C0 8 0 14 -4 18" 
          fill="none" 
          stroke="#60a5fa" 
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="-8" cy="-18" r="2" fill="#93c5fd"/>
        
        {/* Yellow snake */}
        <path 
          d="M2 -18 C6 -14 6 -8 2 -4 L-6 4 C-10 8 -10 16 -6 20 C-2 24 4 24 8 20" 
          fill="none" 
          stroke="#fbbf24" 
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="4" cy="-14" r="2" fill="#fde68a"/>
      </g>
      
      {/* Key icon at top */}
      <g transform="translate(60, 24)">
        <circle cx="0" cy="0" r="5" fill="none" stroke="#a5b4fc" strokeWidth="2"/>
        <line x1="5" y1="0" x2="12" y2="0" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="0" x2="10" y2="3" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="0" x2="12" y2="3" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      
      {/* Checkmark in corner */}
      <circle cx="85" cy="85" r="12" fill="#6366f1"/>
      <path 
        d="M79 85 L83 89 L91 81" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Project name */}
      <text x="60" y="100" textAnchor="middle" fill="#c7d2fe" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="bold">
        PyAuth
      </text>
    </svg>
  </div>
);

export default PyAuthIcon;
