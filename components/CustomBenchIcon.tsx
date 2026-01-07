import React from "react";

// CustomBench icon - LLM benchmarking with leaderboard/chart elements
const CustomBenchIcon = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      {/* Outer circle - benchmark cycle */}
      <circle cx="60" cy="60" r="50" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 4" opacity="0.4"/>
      
      {/* Bar chart representing benchmarks */}
      <rect x="25" y="65" width="14" height="30" rx="2" fill="#22d3ee" opacity="0.9"/>
      <rect x="43" y="45" width="14" height="50" rx="2" fill="#8b5cf6" opacity="0.9"/>
      <rect x="61" y="35" width="14" height="60" rx="2" fill="#6366f1" opacity="0.9"/>
      <rect x="79" y="55" width="14" height="40" rx="2" fill="#a78bfa" opacity="0.9"/>
      
      {/* Trophy/crown on top - winner indicator */}
      <path 
        d="M68 28 L60 20 L52 28 L56 28 L56 35 L64 35 L64 28 Z" 
        fill="#fbbf24" 
        stroke="#f59e0b" 
        strokeWidth="1"
      />
      
      {/* AI brain nodes */}
      <circle cx="30" cy="40" r="4" fill="#22d3ee"/>
      <circle cx="90" cy="40" r="4" fill="#22d3ee"/>
      <circle cx="30" cy="100" r="3" fill="#a78bfa"/>
      <circle cx="90" cy="100" r="3" fill="#a78bfa"/>
      
      {/* Connection lines */}
      <path d="M30 44 L30 61" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
      <path d="M90 44 L90 51" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
      
      {/* Project name */}
      <text x="60" y="108" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="bold">
        CustomBench
      </text>
    </svg>
  </div>
);

export default CustomBenchIcon;

