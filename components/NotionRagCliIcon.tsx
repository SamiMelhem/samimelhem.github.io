import { SiNotion, SiGooglegemini } from 'react-icons/si'

export default function NotionRagCliIcon() {
  return (
    <div className="w-full h-full flex">
      {/* Left half - Notion */}
      <div className="w-1/2 h-full bg-black flex items-center justify-center">
        <SiNotion className="text-white text-4xl md:text-5xl lg:text-6xl" />
      </div>
      
      {/* Right half - Google Gemini */}
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <SiGooglegemini className="text-blue-600 text-4xl md:text-5xl lg:text-6xl" />
      </div>
    </div>
  )
} 