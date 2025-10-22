'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaCode, FaBrain, FaFileAlt, FaMusic, FaDumbbell, FaPlane, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { GiTennisRacket } from 'react-icons/gi'
import ContactIcons from '../../../components/ContactIcons'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        
        <div className="space-y-8 sm:space-y-12">
          {/* Introduction */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Hello, I am Sami Melhem
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hi, I&apos;m Sami Melhem, I&apos;m entering my senior year at Texas A&M majoring in Computer Science, with an emphasis in Data Science, and a minor in Cybersecurity. During my time at A&M academically, I focused on machine learning, big-data analytics, and AI workflows where I&apos;ve worked with 2 different startups on AI workflow products and recyclable battery material optimization pipelines.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              I have worked as an AI conversational developer & undergraduate researcher for the college of visualization where I develop tools for SANE Nurses at the Texas A&M Medical School. I blend my technical work with creative problem-solving in creating usable products for anyone to use in everyday life so I can not only improve productivity, but help others improve their life situations as well.
            </motion.p>
          </motion.section>

          {/* Skills & Expertise */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaCode className="text-teal-400" />
              Skills & Expertise
            </motion.h2>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { title: "Programming Languages", content: "Python (Advanced), JavaScript (Advanced), HTML/CSS (Advanced), SQL (Advanced),  C++ (Intermediate), Java (Intermediate), Go (Beginner), Rust (Beginner), R (Beginner)" },
                { title: "Frameworks & Libraries", content: "React.js, Node.js, TypeScript, Next.js, Flask, Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, PyTorch, FastAPI" },
                { title: "Tools & Platforms", content: "Git, Docker, Postman, Electron, Vercel, Power BI, Tableau, Visual Studio Code, PyCharm, IntelliJ, Cursor, Pytest, CLI" },
                { title: "Cloud & Databases", content: "AWS, GCP, MySQL, PostgreSQL, Linux, Firebase, NoSQL, SQLAlchemy, ChromaDB" },
                { title: "AI & Data Science", content: "Machine Learning, Computer Vision, Statistical Modeling, Feature Engineering, A/B Testing, Data Visualization, Embedding Generation, Prompt Engineering, Gemini 2.5 Flash-Lite, tiktoken" },
                { title: "APIs & Integrations", content: "Notion API, REST APIs, WebSocket APIs, Authentication Systems, Third-party Integrations" },
                { title: "Methodologies", content: "Agile, Waterfall, Scrum, Physics-Informed Neural Networks (PINNs), ETL Pipelines" }
              ].map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  className="bg-gray-700/50 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-300 text-sm">{skill.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Education & Background */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaGraduationCap className="text-teal-400" />
              Education & Background
            </motion.h2>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="border-l-4 border-teal-400 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h3 className="font-semibold text-white text-lg">Texas A&M University</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Master of Science in Computer Science</strong> (Expected May 2027)<br/>
                  <strong>GPA:</strong> 4.0/4.0<br/>
                  <strong>Bachelor of Science in Computer Science</strong> (Expected May 2026)<br/>
                  <strong>Minor:</strong> Cybersecurity | <strong>Emphasis:</strong> Data Science | <strong>GPA:</strong> 3.8/4.0
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Relevant Coursework:</strong> Machine Learning, Artificial Intelligence, Data Structures & Algorithms, 
                  Database Systems, Cloud Computing, Data Visualization, Cryptography, Cybersecurity Risk Management
                </p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-teal-400 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h3 className="font-semibold text-white text-lg">Honors & Awards</h3>
                <p className="text-gray-300">
                  • {`Association of Former Students Scholarship (2025-2026)`}<br /> 
                  • {`Michelle '88 & Todd Steudtner '87 Scholarship (2025-2026)`}<br/>
                  • {`Michael '78 & Dianne '79 Pfister Endowed Scholar (2024-2025, 2025-2026)`}<br/>
                  • Best Juniors at ACPC Spring Competition (Spring 2025)<br/>
                  • Distinguished Student (Fall 2024)
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Leadership & Extracurriculars */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaMusic className="text-teal-400" />
              Leadership & Activities
            </motion.h2>
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Music Leadership</h3>
                <p className="text-gray-300 text-sm">
                  • Principal Clarinet - TAMU Wind Symphony<br/>
                  • Principal Clarinet - TAMU Chamber Orchestra<br/>
                  • Treasurer - TAMU Wind Symphony (2024-2025, 2025-2026)<br/>
                  • Vice President - Carnival of Animals (2024-2025, 2025-2026)<br/>
                  • Treasurer & Secretary - Carnival of Animals (2024)
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Technical Leadership</h3>
                <p className="text-gray-300 text-sm">
                  • Projects Officer - Aggie Data Science Club (2024-2025)<br/>
                  • Project Manager - Aggie Data Science Club (2024-2025, 2025-2026)<br/>
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Campus Partners</h3>
                <p className="text-gray-300 text-sm">
                  • Perplexity (Fall 2025)<br/>
                  • BoodleBox (Spring 2025)<br/>
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Resume & CV Downloads */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaBrain className="text-teal-400" />
              Professional Documents
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Interested in learning more about my professional background and experience? 
              Download my resume and CV for detailed information about my projects, skills, and achievements.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/documents/sami_melhem.pdf"
                download
                className="group flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="/documents/sami_melhem_cv.pdf"
                download
                className="group flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold border border-gray-600 hover:border-gray-500"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
            </motion.div>
          </motion.section>

          {/* Research Paper */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaFileAlt className="text-teal-400" />
              Research & Publications
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I&apos;ve conducted research in artificial intelligence and machine learning, particularly focusing on 
              Large Language Models and their applications in engineering education. My research has been accepted 
              for presentation at major academic conferences.
            </motion.p>
            <motion.div 
              className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-teal-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="font-semibold text-white text-lg mb-2">An Assessment Of ChatGPT 4o Performance on Mechanical Engineering Concept Inventories</h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>2025 ASEE Annual Conference & Exposition</strong> (Accepted June 15, 2025)
              </p>
              <p className="text-gray-300 text-sm mb-4">
                Co-authored with Dr. Rujun Gao, Hillary E. Merzdorf, Xiaosu Guo, Dr. Kristi J. Shryock, and Prof. Arun R Srinivasa. 
                This research evaluates ChatGPT-4o&apos;s performance on mechanical engineering concept inventories, 
                examining AI&apos;s potential and limitations in engineering education support.
              </p>
              <a
                href="/documents/sami_melhem_research_paper_1.pdf"
                download
                className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
              >
                <FaDownload className="group-hover:animate-bounce text-xs" />
                Download Research Paper
              </a>
            </motion.div>
          </motion.section>

          {/* Media & Speaking Engagements */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaExternalLinkAlt className="text-teal-400" />
              Media & Speaking Engagements
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I&apos;ve been featured in various media outlets and speaking engagements, sharing insights on AI in education 
              and innovative learning methodologies that bridge technology and pedagogy.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Nature Feature */}
              <motion.div 
                className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-blue-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h3 className="font-semibold text-white text-lg mb-2">Featured in Nature - AI in Education</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Nature</strong> (March 2025)
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  Featured in Nature&apos;s comprehensive article on how students are creatively using ChatGPT and AI tools 
                  for learning, highlighting innovative approaches to AI-assisted education and the &quot;priming&quot; methodology.
                </p>
                <a
                  href="https://www.nature.com/articles/d41586-025-00621-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="group-hover:animate-pulse text-xs" />
                  Read Article
                </a>
              </motion.div>

              {/* UIUC Speaking Engagement */}
              <motion.div 
                className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-green-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h3 className="font-semibold text-white text-lg mb-2">Public Speaking - University of Illinois Urbana-Champaign</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>UIUC Graduate Students</strong> (March 2024)
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  Presented to 100+ graduate students on practical AI applications in education, demonstrating the 
                  &quot;priming&quot; methodology and innovative ways to leverage ChatGPT for academic success.
                </p>
                <a
                  href="https://www.linkedin.com/posts/sami-melhem_aiineducation-chatgpt4-classprimer-activity-7171281188806881280-l2Ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="group-hover:animate-pulse text-xs" />
                  View Details
                </a>
              </motion.div>

              {/* AI x Education Newsletter */}
              <motion.div 
                className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-purple-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <h3 className="font-semibold text-white text-lg mb-2">Featured in AI x Education Newsletter</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>AI x Education Substack</strong> (February 2024)
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  Featured in the &quot;Efficiency vs Ethics of AI in Education&quot; newsletter, sharing insights on the 
                  &quot;priming&quot; methodology and how students can effectively use AI tools for academic preparation 
                  while maintaining authentic learning experiences.
                </p>
                <a
                  href="https://aixeducation.substack.com/p/efficiency-vs-ethics-of-ai-in-education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="group-hover:animate-pulse text-xs" />
                  Read Newsletter
                </a>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Beyond Code - Personal Interests */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-8 text-teal-400 text-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Beyond Code
            </motion.h2>
            
            {/* Interest Cards Grid */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Music */}
              <motion.div 
                className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-purple-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
                  borderColor: "rgba(168, 85, 247, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(196, 181, 253)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <FaMusic className="text-4xl text-purple-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Music</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Principal Clarinet at TAMU Wind Symphony & Chamber Orchestra
                </p>
              </motion.div>

              {/* Fitness */}
              <motion.div 
                className="group bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 text-center border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)",
                  borderColor: "rgba(239, 68, 68, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(252, 165, 165)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <FaDumbbell className="text-4xl text-red-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fitness</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Weightlifting enthusiast & strength training
                </p>
              </motion.div>

              {/* Pickleball */}
              <motion.div 
                className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 text-center border border-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)",
                  borderColor: "rgba(34, 197, 94, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(134, 239, 172)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <GiTennisRacket className="text-4xl text-green-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pickleball</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Weekend warrior on the courts with friends
                </p>
              </motion.div>

              {/* Travel */}
              <motion.div 
                className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 text-center border border-blue-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)",
                  borderColor: "rgba(59, 130, 246, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(147, 197, 253)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <FaPlane className="text-4xl text-blue-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Travel</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Recent adventures: Spain, Mexico, Arkansas
                </p>
              </motion.div>
            </motion.div>

            {/* Recent Travel Highlights */}
            <motion.div 
              className="mt-8 bg-gray-700/30 rounded-lg p-6 border border-gray-600/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-teal-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Recent Adventures</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path fill="#f1c142" d="M1 10H31V22H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" fill="#a0251e"></path><path d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24.5)" fill="#a0251e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z" fill="#9b8028"></path><path d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z" fill="#9b8028"></path><path d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z" fill="#9b8028"></path><path d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z" fill="#a0251e"></path></svg>
                  </div>
                  <p className="text-white font-medium text-base mb-1">Spain</p>
                  <p className="text-xs text-gray-400">Performance Tour</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#2c6748"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#bb3433" d="M17.875 19.221L17.874 19.221 17.875 19.221 17.875 19.221z"></path><path fill="#bb3433" d="M19.08 17.788L19.08 17.788 19.08 17.788 19.08 17.788z"></path><path fill="#bb3433" d="M15.938 18.943L15.938 18.944 15.938 18.944 15.938 18.943z"></path><path fill="#bb3433" d="M16.305 19.76L16.305 19.76 16.305 19.76 16.305 19.76z"></path><path fill="#854a29" d="M16.196 16.434L16.196 16.434 16.196 16.434 16.196 16.434z"></path><path d="M14.757,12.878h0s0,0,0,0Z" fill="#854a29"></path><path fill="#854a29" d="M15.137 12.715L15.137 12.715 15.137 12.715 15.137 12.715z"></path><path d="M18.701,18.611c-.462-.69-.74,.319-1.215,.252,.125-.81-.778-.5-1.196-.312l.165-.241c-.625,.291-1.368-.712-1.816,.028-.095-.205-.882-.689-1.201-.328,.025-1.017-1.723-.957-.807,.081,.63,.179,.975,.964,1.915,.554,.129,.53,1.025,.583,1.413,.297-.052,.161-.027,.622-.041,.715,.479,.384,.485-.223,.822-.414,.489-.25,2.275,.502,1.96-.631Z" fill="#3b8288"></path><path d="M14.624,17.264s.004,.003,.012,.007c-.007-.004-.011-.007-.012-.007h0Z" fill="#a27037"></path><path d="M18.215,13.019c.002-.497-3.62-1.554-2.526,.068-.258,.037-.691-.15-.712-.352,0,0,0,0,0,0,0,0,0,0,0,0,.015,.04-.11,.248-.151,.267-.006-.1-.03-.192-.03-.192v.004c-.125-.31-.028,.433-.249,.37,.076-.029,.006-.364-.052-.32,.037,.024-.047,.41-.121,.427,.045-.065-.042-.324-.062-.272,0,0,0,0,0,0,.063,.263-.45,.571-.376,.701-.336,.119-.481,.946,.12,.757-.256-.134-.135-.469,.172-.434-.014-.003,.043,.021,.027,.032,.079,.371,.485-.072,.645-.128-.169,.942-.602,1.836,.288,2.773-.295-.311-.349,.054-.016,.163-.201,.01-.431,.205-.085,.313-.071,.072-.345-.137-.195,.009-.003-.001-.006-.003-.009-.004,0,0,.002,.002,.006,.005-.572-.025-.025,.2,.214,.222-.194,.305,.482,.023,.548,.016,0,0,0,0,0,0,.133,.335,.238,.032,.208-.217,.095,.109,.19,.217,.287,.324h0s0,0,0,0h0c.152,.041,.318,.718,.432,.365,.004-.014,.006-.028,.008-.042,.226,.254,.334,.35,.235-.053,.123,.202,.233,.26,.201-.004,.186,.195,.137-.07,.118-.206,.179,.711,1.985,.561,1.799,.083-.312-.304-2.294-1.415-1.782-2.109,.194,.099,1.156,1.304,.738,.599-.371-.965,.316,0,.418,.358,.23,.415-.128-.724-.204-.764,.635,.793,.576,1.491,.375,.027,.025,.048,.066,.086,.116,.105-.037-.074-.08-.103-.104-.114,.039,.009,.087,.068,.107,.115-.001,0-.002,0-.003-.001,.339,1.803,.462,1.494,.249-.132,.512,2.02,.44,2.008,.384-.037,.367,.526,.103,1.624,.26,2.125,.274-.584,.176-2.301,.355-2.761-.337-.32-1.113-2.012-1.631-2.085Zm-2.889,4.239s0-.001,0-.002h.002s-.001,.001-.002,.002Z" fill="#a27037"></path><path d="M14.715,16.587c.079-.641-.499-.553-.914-.554-.811-.68,1.523-1.254,.432-1.993h.004s-.008-.002-.007-.002l.007,.002s-.023-.023-.022-.023c-.094,.015-.235,.019-.282,.136,0,0,.003,.002,.006,.005l-.126,.148c0,.006,.21,.147,.201,.157,.008-.002,.019,.009,.025,.013,.11,.347-.585,.486-.724,.802-.445,.914,.373,1.211,1.023,1.217-.875,.946-.794,.138-1.382-.416,.083-.354,.237-.801-.251-.948,.003-.079-.13-.161-.165-.041,.033-.034-.086-.136-.135-.069-.19-.243-.413,.369-.078,.307,.008,.075,.133,.04,.152,.023-.003,.095,.142,.085,.161,.025,.33,.191-.146,.548,.001,.847,.195,.36,.548,.505,.559,.978,.29,.474,1.476-.153,1.506-.487,.005-.039,.007-.081,.01-.123h0Zm-.254-1.951s.004,.004,.005,.005h0s-.004-.003-.006-.005h0Zm-.572,.62s0,0,0,0c0,0,0,0,0,0h0Z" fill="#a9ac78"></path><path d="M13.746,13.936c.005,.021-.459,.125-.392-.081,.088,.028,.498-.271,.332-.237-.458,.313-.307-.073-.156-.339,.045,.015,.052,.236,.028,.25,.133-.089,.077-.573-.109-.321-.182-.073-.67,.401-.397,.595-.096,.419,.233,.596,.585,.507l.002-.006h.031c-.052-.007,.077-.344,.076-.367Z" fill="#a9ac78"></path></svg>
                  </div>
                  <p className="text-white font-medium text-base mb-1">Cancun</p>
                  <p className="text-xs text-gray-400">Beach Getaway</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-center mb-3 text-4xl">
                    🏔️
                  </div>
                  <p className="text-white font-medium text-base mb-1">Arkansas</p>
                  <p className="text-xs text-gray-400">Nature and State Exploration</p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.p 
              className="text-center text-gray-300 leading-relaxed mt-8 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              &quot;I believe in the power of technology to solve real-world problems and make a positive impact on society. 
              Through my work with startups, research labs, and various projects, I strive to create solutions that 
              not only improve productivity but also help others improve their life situations.&quot;
            </motion.p>
          </motion.section>
        </div>
      </div>
      
      <ContactIcons />
    </main>
  )
} 