import React from "react";

// BMAuth icon - Biometric authentication with fingerprint and shield
const BMAuthIcon = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900">
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
        fill="url(#shieldGradient)" 
        stroke="#10b981" 
        strokeWidth="2"
        opacity="0.9"
      />
      
      {/* Shield gradient definition */}
      <defs>
        <linearGradient id="shieldGradient" x1="60" y1="15" x2="60" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#065f46"/>
          <stop offset="100%" stopColor="#064e3b"/>
        </linearGradient>
      </defs>
      
      {/* Fingerprint pattern */}
      <g transform="translate(60, 58)">
        {/* Outer arcs */}
        <path 
          d="M-20 0 C-20 -15 -10 -25 0 -25 C10 -25 20 -15 20 0" 
          fill="none" 
          stroke="#34d399" 
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path 
          d="M-15 5 C-15 -8 -8 -18 0 -18 C8 -18 15 -8 15 5" 
          fill="none" 
          stroke="#6ee7b7" 
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path 
          d="M-10 8 C-10 -3 -5 -10 0 -10 C5 -10 10 -3 10 8" 
          fill="none" 
          stroke="#a7f3d0" 
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path 
          d="M-5 10 C-5 3 -2 -2 0 -2 C2 -2 5 3 5 10" 
          fill="none" 
          stroke="#d1fae5" 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Center dot */}
        <circle cx="0" cy="5" r="2" fill="#10b981"/>
      </g>
      
      {/* Checkmark in corner */}
      <circle cx="85" cy="85" r="12" fill="#10b981"/>
      <path 
        d="M79 85 L83 89 L91 81" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Lock icon at top */}
      <g transform="translate(60, 25)">
        <rect x="-6" y="0" width="12" height="10" rx="2" fill="#10b981"/>
        <path 
          d="M-4 0 V-4 C-4 -7 -2 -9 0 -9 C2 -9 4 -7 4 -4 V0" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="2"
        />
      </g>
      
      {/* Project name */}
      <text x="60" y="100" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="bold">
        BMAuth
      </text>
    </svg>
  </div>
);

export default BMAuthIcon;

