import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { FiDownload, FiExternalLink, FiFileText, FiBookOpen, FiSearch } from 'react-icons/fi';
import searchAnimation from '../assets/features/user_friendly.json';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const resourceCategories = [
    {
      title: "Public Sector Resources",
      description: "Research papers, toolkits, and frameworks for improving public service delivery",
      icon: <FiFileText className="w-5 h-5" />,
      color: "text-indigo-400",
      bgColor: "bg-indigo-900/50",
      resources: [
        {
          title: "PPI Implementation Book",
          description: "Guerrero, O. A., & Castañeda, G. (2024). Complexity economics and sustainable development: A computational framework for policy priority inference. Cambridge University Press.",
          type: "PDF",
          link: "/PPI-Book.pdf",
          download: "/PPI-Book.pdf"
        },
        {
          title: "An Agent-Based Model of Conflict in East Africa And the Effect of Watering Holes",
          description: "Case studies of ABM applications in East African public sector",
          type: "External Link",
          size: "",
          link: "https://www.researchgate.net/publication/229042947_An_Agent-Based_Model_of_Conflict_in_East_Africa_And_the_Effect_of_Watering_Holes",
          download: ""
        }
      ]
    },
    {
      title: "Infectious Disease Resources",
      description: "Research papers, models, and datasets for disease modeling and intervention planning",
      icon: <FiBookOpen className="w-5 h-5" />,
      color: "text-emerald-400",
      bgColor: "bg-emerald-900/50",
      resources: [
        {
          title: "Agent-Based Modeling (ABM) Estimates the Number of Vaccinations Required to Achieve a 50% Reduction in Zero-Dose Vaccination Among Children Under Five in Kenya by 2025.",
          description: "The model demonstrated that halving zero-dose vaccination cases from 3338 to 1670",
          type: "PDF",
          size: "2.5 MB",
          link: "/Zero-Dose-Vaccination-final.pdf",
          download: "/Zero-Dose-Vaccination-final.pdf"
        },
        {
          title: "Malaria Transmission Model",
          description: "Open-source ABM model for malaria transmission in Africa",
          type: "PDF",
          size: "2.5 MB",
          link: "/Agent-Based-Book.pdf",
          download: "/Agent-Based-Book.pdf"
        },
        {
          title: "Kenya Health Data Compendium",
          description: "Curated dataset of health indicators from 2015-2022",
          type: "External Link",
          size: "1.8 MB",
          link: "https://data.humdata.org/dataset/who-data-for-ken",
          download: ""
        }
      ]
    }
  ];

  // Filter resources based on search query
  const filteredCategories = resourceCategories.map(category => ({
    ...category,
    resources: category.resources.filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.resources.length > 0);

  const handleSearch = (e) => {
    e.preventDefault();
    // The filtering happens automatically as searchQuery state updates
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400 mb-4">
            Research Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access publications, datasets, and tools for public sector innovation and disease modeling
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600 p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <Player
                autoplay
                loop
                src={searchAnimation}
                style={{ height: '150px', width: '150px' }}
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">Find Specific Resources</h2>
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-indigo-300" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-4 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Search resources, papers, datasets..."
                />
                <button 
                  type="submit"
                  className="absolute right-2.5 bottom-2.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium text-white transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Resource Categories */}
        {filteredCategories.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {filteredCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600 overflow-hidden"
              >
                <div className={`px-6 py-5 ${category.bgColor} flex items-center border-b border-gray-600`}>
                  <div className={`p-2 rounded-lg ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="divide-y divide-gray-600">
                  {category.resources.map((resource, resIndex) => (
                    <div 
                      key={resIndex} 
                      className="p-6 hover:bg-gray-700/20 transition-colors group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-gray-300 mt-1 text-sm">{resource.description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          {resource.type !== "External Link" && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-600 text-gray-200 self-start">
                              {resource.type} • {resource.size}
                            </span>
                          )}
                          <div className="flex gap-2">
                            {resource.download && (
                              <a
                                href={resource.download}
                                download
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-shrink-0"
                              >
                                <FiDownload className="mr-1.5 h-3 w-3" />
                                Download
                              </a>
                            )}
                            <a
                              href={resource.link}
                              target={resource.type === "External Link" ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 border border-gray-500 text-xs font-medium rounded-lg text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-shrink-0"
                            >
                              {resource.type === "External Link" ? (
                                <>
                                  <FiExternalLink className="mr-1.5 h-3 w-3" />
                                  Visit
                                </>
                              ) : (
                                <>
                                  <FiFileText className="mr-1.5 h-3 w-3" />
                                  Preview
                                </>
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium text-gray-300 mb-4">
              No resources found matching "{searchQuery}"
            </h3>
            <button 
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-900/50 to-emerald-900/50 rounded-xl border border-gray-600 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Finding Resources?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team can help you locate specific research materials or provide custom analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:info.jhub@jkuat.ac.ke"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}