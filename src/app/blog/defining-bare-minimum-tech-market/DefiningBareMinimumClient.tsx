"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactIcons from "../../../../components/ContactIcons";

interface PostData {
  title: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  tags: string[];
}

export default function DefiningBareMinimumClient({ postData }: { postData: PostData }) {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      {/* Animated background that covers entire viewport */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-blue-900 via-black to-emerald-900 -z-50"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.1) 2px, transparent 0),
            linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05)),
            linear-gradient(to bottom right, rgb(30, 58, 138), rgb(0, 0, 0), rgb(6, 78, 59))
          `,
          backgroundSize: '30px 30px, 100% 100%, 100% 100%'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <div className="relative z-10 flex-1">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="pt-24 pb-16 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {postData.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-100 to-blue-300 bg-clip-text text-transparent leading-tight">
              {postData.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {postData.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex items-center justify-center gap-4 text-gray-400 text-lg">
              <span className="font-medium">{postData.author}</span>
              <span>•</span>
              <span>{postData.date}</span>
              <span>•</span>
              <span>{postData.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="max-w-4xl mx-auto px-6 pb-24 overflow-x-hidden"
        >
          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <p className="text-lg text-gray-200 leading-relaxed">
              {`I've spent this entire summer trying to figure out what the bare minimum is for getting into tech in 2025. The landscape has changed dramatically from just a few years ago. Pre-2019, you could get into big tech with basic coding skills and determination. Today, the question has shifted from "Do you know how to code?" to "Do you know how to code with AI?" This fundamental change has created a new baseline that everyone entering tech needs to understand.`}
            </p>
          </div>

          {/* The New Bare Minimum */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The New Bare Minimum: Coding with AI</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-emerald-300">The Fundamental Shift:</strong> {`You must know how to code with AI, period. No exceptions. This is the number one thing that people going into tech need to figure out. AI hasn't been fully integrated into our infrastructure yet, but over the next decades, it will become ubiquitous.`}
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">{`What "Coding with AI" Actually Means`}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-3">Core AI Integration Skills:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• AI-assisted project development</li>
                        <li>• Workflow optimization in school and work</li>
                        <li>• AI-powered meeting scheduling and networking</li>
                        <li>• Prompt engineering for code generation</li>
                        <li>• AI tool selection and integration</li>
                      </ul>
                    </div>
                    
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-3">Why This Matters Now:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• AI tools are becoming standard in development</li>
                        <li>• Companies expect AI proficiency</li>
                        <li>• Competitive advantage in job market</li>
                        <li>• Future-proofing your career</li>
                        <li>• Increased productivity and efficiency</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-emerald-300 font-semibold mb-3">The Infrastructure Gap</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      {`AI hasn't been fully implemented into our infrastructure yet, but it's happening rapidly. Getting good at using AI now means you'll be ahead of the curve when it becomes the standard.`}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3 text-center">
                        <div className="text-blue-300 font-bold text-lg">Today</div>
                        <div className="text-gray-300 text-xs">AI tools are optional but valuable</div>
                      </div>
                      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded p-3 text-center">
                        <div className="text-emerald-300 font-bold text-lg">Next 5 Years</div>
                        <div className="text-gray-300 text-xs">AI integration becomes standard</div>
                      </div>
                      <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3 text-center">
                        <div className="text-purple-300 font-bold text-lg">Next Decade</div>
                        <div className="text-gray-300 text-xs">AI-first development is the norm</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">Getting Started with AI Integration</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-2">Learning Phase</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Start with ChatGPT for code explanations</li>
                        <li>• Use GitHub Copilot for code completion</li>
                        <li>• Experiment with AI-powered debugging</li>
                        <li>• Practice prompt engineering</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-2">Workflow Integration</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• AI-assisted project planning</li>
                        <li>• Automated code documentation</li>
                        <li>• AI-powered testing strategies</li>
                        <li>• Intelligent code review assistance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-2">Networking & Communication</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• AI-powered meeting scheduling</li>
                        <li>• Automated follow-up emails</li>
                        <li>• Intelligent networking suggestions</li>
                        <li>• AI-assisted presentation preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                <p className="text-emerald-200 font-medium">
                  <strong>Key Insight:</strong> {`The bare minimum is no longer about coding proficiency alone—it's about coding proficiency combined with AI integration skills. This combination is your foundation for success in today's market.`}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Standing Out Beyond the Minimum */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Standing Out: The Three Key Differentiators</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-emerald-300">Beyond the Minimum:</strong> {`Having the bare minimum will give you a starting point, but there are three specific skillsets that will make you stand out in today's competitive market. These aren't just nice-to-haves—they're what separates good candidates from exceptional ones.`}
              </p>
              
              <div className="space-y-8">
                {/* AI Engineering */}
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <h3 className="text-xl font-semibold text-purple-300">AI Engineering</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-3">What It Means:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Developing AI systems from scratch</li>
                        <li>• Creating RAG (Retrieval-Augmented Generation) systems</li>
                        <li>• Building AI systems in any domain</li>
                        <li>• Understanding AI architecture and deployment</li>
                        <li>• Custom AI model development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
                      <h4 className="text-pink-300 font-semibold mb-3">Why It Matters:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• High demand in current market</li>
                        <li>• Premium salary potential</li>
                        <li>• Future-proof career path</li>
                        <li>• Competitive advantage</li>
                        <li>• Innovation leadership</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                    <p className="text-purple-200 text-sm">
                      <strong>Getting Started:</strong> {`Start with building simple RAG systems, experiment with different AI models, and work on projects that require custom AI solutions. The key is hands-on experience with AI system development.`}
                    </p>
                  </div>
                </div>

                {/* System Design */}
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <h3 className="text-xl font-semibold text-blue-300">System Design</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-3">What It Means:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Software architecture principles</li>
                        <li>• Scalable system design</li>
                        <li>• Distributed systems understanding</li>
                        <li>• Performance optimization</li>
                        <li>• Infrastructure planning</li>
                      </ul>
                    </div>
                    
                    <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                      <h4 className="text-cyan-300 font-semibold mb-3">The AI Advantage:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• AI makes system design easier to learn</li>
                        <li>• Previously required years of experience</li>
                        <li>• Now accessible to motivated learners</li>
                        <li>• Highly attractive to recruiters</li>
                        <li>• Essential for senior roles</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <p className="text-blue-200 text-sm">
                      <strong>Key Insight:</strong> {`AI has democratized system design knowledge. What used to require years of experience can now be learned more efficiently, making this skill more accessible than ever while remaining highly valuable.`}
                    </p>
                  </div>
                </div>

                {/* Cybersecurity Skills */}
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <h3 className="text-xl font-semibold text-red-300">Cybersecurity Skills</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold mb-3">What It Means:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Security best practices in development</li>
                        <li>• Secure coding principles</li>
                        <li>• Application security awareness</li>
                        <li>• Threat modeling</li>
                        <li>• Security testing and validation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="text-orange-300 font-semibold mb-3">{`Why It's Overlooked:`}</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Most developers avoid security</li>
                        <li>• {`Seen as cybersecurity team's job`}</li>
                        <li>• Perceived as complex and difficult</li>
                        <li>• Not prioritized in learning</li>
                        <li>• Creates competitive advantage</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-200 text-sm">
                      <strong>Real Impact:</strong> {`Having cybersecurity skills makes you a more valuable developer. You can build applications faster and more securely, and you make the cybersecurity team's job easier. This combination is rare and highly sought after.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                <p className="text-emerald-200 font-medium">
                  <strong>Strategic Advantage:</strong> {`These three skills combined create a powerful differentiator. While most candidates focus on basic coding skills, you'll be building AI systems, designing scalable architectures, and implementing security best practices.`}
                </p>
              </div>
            </div>
          </motion.section>

          {/* There's No Right Path */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{`There's No Right Path—Just Start and Keep Going`}</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-emerald-300">My Personal Journey:</strong> {`When I was interested in getting into tech back in high school, I originally wanted to get into tech for the money. But then I fell in love with the process of solving problems using software and creating positive impact on businesses.`}
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">The Motivation Shift</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold mb-3">Initial Motivation (Money):</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Focused on salary and benefits</li>
                        <li>• Chased trendy technologies</li>
                        <li>• Superficial learning approach</li>
                        <li>• Limited long-term vision</li>
                        <li>• Easily discouraged by setbacks</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-3">Evolved Motivation (Impact):</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Focused on problem-solving</li>
                        <li>• Deep learning and understanding</li>
                        <li>• Long-term skill development</li>
                        <li>• Positive business impact</li>
                        <li>• Resilience through challenges</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                    <p className="text-emerald-200 text-sm">
                      <strong>Key Learning:</strong> {`I realized that a lot of people going into and already in tech were the same way. The most successful developers I've met are driven by curiosity and impact, not just financial gain.`}
                    </p>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">The Reality Check</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-2">Common Misconceptions</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• {`"I just need a degree and good grades"`}</li>
                        <li>• {`"I have the drive, that's enough"`}</li>
                        <li>• {`"I'll learn everything on the job"`}</li>
                        <li>• {`"The market will always need developers"`}</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold mb-2">The Harsh Reality</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Degrees alone are no longer sufficient</li>
                        <li>• Drive without direction leads nowhere</li>
                        <li>• Companies expect immediate value</li>
                        <li>• The market is increasingly competitive</li>
                        <li>• AI is changing what {`"good enough"`} means</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-200 text-sm">
                      <strong>Sad Truth:</strong> {`I sadly hear about many stories of people who are being delusional about thinking all they have to do is get a degree, good grades, and have the drive to get into tech. That is far below the bare minimum in today's market.`}
                    </p>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">The Path Forward</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-2">What Works</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Start with AI integration skills</li>
                        <li>• Build projects that solve real problems</li>
                        <li>• Focus on one of the three differentiators</li>
                        <li>• Continuous learning and adaptation</li>
                        <li>• Networking and community involvement</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-emerald-300 font-semibold mb-2">The Mindset Shift</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Embrace continuous learning</li>
                        <li>• Focus on impact over income</li>
                        <li>• Build for the future, not just today</li>
                        <li>• Develop resilience and adaptability</li>
                        <li>• Stay curious and open to new technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                <p className="text-emerald-200 font-medium">
                  <strong>Final Thought:</strong> {`There's no perfect roadmap to success in tech. The key is to start with the new bare minimum (AI + coding), develop your differentiators, and keep moving forward. The journey is more important than the destination.`}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">The New Reality</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-200 leading-relaxed">
                  {`The tech industry has fundamentally changed. The bare minimum is no longer about basic coding skills—it's about coding with AI. But that's just the starting point. To truly excel, you need to develop skills that make you stand out: AI engineering, system design, and cybersecurity awareness.`}
                </p>
                
                <p className="text-lg text-gray-200 leading-relaxed">
                  {`Most importantly, there's no single right path. You have to start somewhere and keep going. Focus on solving real problems, creating positive impact, and continuously learning. The market is competitive, but it's also full of opportunities for those who are willing to adapt and grow.`}
                </p>
                
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">Your Action Plan</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded p-4 text-center">
                      <div className="text-blue-300 font-bold text-lg mb-2">Start</div>
                      <div className="text-gray-300 text-sm">Learn to code with AI tools</div>
                    </div>
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded p-4 text-center">
                      <div className="text-emerald-300 font-bold text-lg mb-2">Build</div>
                      <div className="text-gray-300 text-sm">Develop your differentiators</div>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded p-4 text-center">
                      <div className="text-purple-300 font-bold text-lg mb-2">Grow</div>
                      <div className="text-gray-300 text-sm">Keep learning and adapting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Define Your Path in Tech?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {`The tech industry is evolving rapidly, and the bare minimum has changed. Whether you're just starting your journey or looking to stay ahead of the curve, understanding these new requirements is crucial for your success.`}
            </p>
            <Link 
              href="/contact/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
            >
              {`Let's Discuss Your Tech Journey`}
            </Link>
          </motion.div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <Link 
              href="/blog/" 
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-lg font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </motion.article>
      </div>
      
      <ContactIcons />
    </main>
  );
} 