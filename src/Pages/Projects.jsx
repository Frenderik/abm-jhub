import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import InfectiousDiseaseImage from '../assets/infectious-disease.png';
import PublicSectorImage from '../assets/simulation-graph.png';

export default function Projects() {
  const projects = [
    {
      title: "Infectious Disease Modeling",
      description: "Developing agent-based models to predict disease spread and evaluate intervention strategies in Kenya.",
      link: "/projects/infectious-disease",
      image: InfectiousDiseaseImage,
      icon: (
        <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      borderColor: "border-red-400"
    },
    {
      title: "Public Sector Service Delivery",
      description: "Adapting the PPI Toolkit to Kenya's context to improve government service delivery efficiency.",
      link: "/projects/public-sector",
      image: PublicSectorImage,
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-white-800 to-gray-900",
      borderColor: "border-blue-400"
    }
  ];

  const methodologySteps = [
    {
      title: "Problem Definition",
      description: "Collaborate with stakeholders to precisely define the challenge and project objectives.",
      icon: "",
      color: "text-blue-400"
    },
    {
      title: "Data Collection",
      description: "Gather and curate local datasets to accurately represent agent behaviors and environments.",
      icon: "",
      color: "text-purple-400"
    },
    {
      title: "Agent Specification",
      description: "Define agent types, behaviors, and decision-making rules based on empirical evidence.",
      icon: "",
      color: "text-emerald-400"
    },
    {
      title: "Model Implementation",
      description: "Develop the computational model using appropriate simulation frameworks and tools.",
      icon: "",
      color: "text-yellow-400"
    },
    {
      title: "Validation & Calibration",
      description: "Verify model accuracy against real-world data and adjust parameters accordingly.",
      icon: "",
      color: "text-red-400"
    },
    {
      title: "Scenario Testing",
      description: "Run simulations to test various policy interventions and their potential outcomes.",
      icon: "",
      color: "text-indigo-400"
    },
    {
      title: "Policy Recommendations",
      description: "Translate model insights into actionable recommendations for stakeholders.",
      icon: "",
      color: "text-pink-400"
    },
    {
      title: "Implementation Support",
      description: "Assist with real-world deployment and monitor outcomes for continuous improvement.",
      icon: "",
      color: "text-cyan-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
  const handleEmailClick = () => {
    // Try regular mailto first
    const mailto = document.createElement('a');
    mailto.href = 'mailto:info.jhub@jkuat.ac.ke';
    mailto.click();
    
    // Fallback after delay if nothing happened
    setTimeout(() => {
      if (!document.hidden) {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info.jhub@jkuat.ac.ke');
      }
    }, 500);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Applying agent-based modeling to solve complex challenges in Kenya's development landscape
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-8"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
                icon={project.icon}
                bgColor={project.bgColor}
                borderColor={project.borderColor}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Methodology Section */}
        <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Our ABM Methodology
            </h2>
            
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 transform -translate-x-1/2"></div>
              
              <div className="space-y-8 md:space-y-12">
                {methodologySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
                  >
                    {/* Timeline dot */}
                    <div className={`hidden md:flex absolute left-1/2 w-8 h-8 rounded-full transform -translate-x-1/2 items-center justify-center shadow-lg ${step.color.replace('text', 'bg')} bg-opacity-20 border-2 ${step.color.replace('text', 'border')}`}>
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className={`p-5 md:p-6 rounded-xl border ${index % 2 === 0 ? 'border-blue-500/20' : 'border-emerald-500/20'} bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-800 to-gray-900' : 'from-gray-800 to-gray-900'}`}>
                        <div className="flex items-center mb-3">
                          <h3 className={`text-lg md:text-3xl font-bold ${step.color}`}>
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 text-xl leading-relaxed">
                          {step.description}
                        </p>
                        <div className="mt-3 text-sm font-medium text-gray-400">
                          Step {index + 1} of {methodologySteps.length}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
            Interested in our approach?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is available to discuss potential collaborations or answer questions about our methodology.
          </p>
  
          <button 
            onClick={handleEmailClick}
            className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-medium text-lg hover:shadow-lg transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:brightness-95"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}