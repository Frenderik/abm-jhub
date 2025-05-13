import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            About Agent-Based Modeling
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto space-y-20"
        >
          {/* What is ABM Section */}
          <motion.section 
            variants={itemVariants} 
            whileHover="hover"
            className="group relative"
          >
            <motion.div 
              variants={cardHoverVariants}
              className="bg-gray-800 p-10 rounded-2xl shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:border-emerald-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-4xl font-bold mb-8 text-blue-400 group-hover:text-emerald-400 transition-colors duration-300">
                What is Agent-Based Modeling?
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Agent-based modeling (ABM) is a computational approach that simulates the interactions of autonomous agents to understand the behavior of complex systems. Unlike traditional modeling approaches that look at aggregate data, ABM examines how individual entities (agents) with specific behaviors and decision-making capabilities interact with each other and their environment.
                </p>
                <p>
                  According to <a href="https://math.libretexts.org/Bookshelves/Applied_Mathematics/Agent-Based_Evolutionary_Game_Dynamics_(Izquierdo_Izquierdo_and_Sandholm)/01%3A_Introduction/1.02%3A_Introduction_to_agent-based_modeling" 
                  className="text-blue-400 hover:text-emerald-400 underline transition-colors duration-300 hover:no-underline" target="_blank" rel="noopener noreferrer">Agent-Based Evolutionary Game Dynamics</a>, ABM is particularly useful for studying systems where the global behavior emerges from the interactions of many individuals following relatively simple rules.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Key Characteristics Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
              Key Characteristics of ABM
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Agents with Personality",
                  content: "Think of each agent like a person with their own thoughts and habits. They're not all the same - just like in real life, some might be more cautious while others take risks. They make decisions based on their unique circumstances and what's happening around them.",
                  icon: ""
                },
                {
                  title: "The Magic of Many",
                  content: "When all these individual agents interact, something fascinating happens. Patterns emerge that no single agent intended - much like how traffic jams form without anyone planning them. This 'emergence' helps us understand complex real-world phenomena.",
                  icon: ""
                },
                {
                  title: "Learning and Adapting",
                  content: "Our digital agents aren't stuck in their ways. They learn from experience and change their behavior over time - just like people do. This means our models can show how systems evolve, not just how they work at one moment.",
                  icon: ""
                },
                {
                  title: "Handling Real-World Messiness",
                  content: "Unlike traditional models that need everything neat and predictable, ABM thrives on complexity. It can handle the messy, interconnected nature of real communities - where small changes can have big, unexpected consequences.",
                  icon: ""
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-400 h-full"
                  >
                    <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 group-hover:text-emerald-400 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{item.content}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Applications Section */}
          <motion.section variants={itemVariants} className="group relative">
            <motion.div 
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-gray-800 p-10 rounded-2xl shadow-2xl border-l-4 border-emerald-500 transition-all duration-300 hover:border-blue-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-4xl font-bold mb-8 text-emerald-400 group-hover:text-blue-400 transition-colors duration-300">
                Applications in Kenya
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                As highlighted by <a href="https://www.anylogic.com/use-of-simulation/agent-based-modeling" className="text-emerald-400 hover:text-blue-400 underline transition-colors duration-300 hover:no-underline" target="_blank" rel="noopener noreferrer">AnyLogic</a>, agent-based modeling has numerous applications in developing contexts like Kenya:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "Urban Development", 
                    desc: "Simulating migration patterns, housing markets, and infrastructure needs",
                    icon: "🏙️"
                  },
                  { 
                    title: "Agriculture", 
                    desc: "Modeling farmer decision-making and crop adoption patterns",
                    icon: "🌾"
                  },
                  { 
                    title: "Healthcare", 
                    desc: "Predicting disease spread and healthcare resource allocation",
                    icon: "🏥"
                  },
                  { 
                    title: "Transportation", 
                    desc: "Optimizing public transport routes and infrastructure",
                    icon: "🚌"
                  }
                ].map((app, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300 group/item"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl group-hover/item:text-emerald-400 transition-colors duration-300">
                        {app.icon}
                      </span>
                      <div>
                        <h3 className="font-bold text-xl text-emerald-300 group-hover/item:text-blue-300 transition-colors duration-300">
                          {app.title}
                        </h3>
                        <p className="text-gray-400 mt-2 text-lg">{app.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Our Approach Section */}
          <motion.section 
            variants={itemVariants} 
            className="relative group"
          >
            <motion.div
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-gradient-to-r from-gray-800 to-gray-700 p-12 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-emerald-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Our Approach
              </h2>
              <p className="text-gray-300 text-center max-w-4xl mx-auto text-xl leading-relaxed">
                We combine international best practices in agent-based modeling with deep local knowledge of Kenya's socioeconomic context. Our models incorporate real-world data and are developed in collaboration with international stakeholders to ensure relevance and applicability to Kenya's unique challenges.
              </p>
              
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}