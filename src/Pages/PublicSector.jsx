import { motion } from 'framer-motion';
import TeamMember from '../components/TeamMember';
import DanieleGuariso from '../assets/daniele-guariso.png';
import OmarGuerrero from '../assets/omar-guerrero.png';
import RajabMbaruk from '../assets/rajab-mbaruk.png';
import LawrenceNderu from '../assets/lawrence-nderu.png';
import GeofreyKagombe from '../assets/geofrey-kagombe.png';
import DeepikaRavikrishnan from '../assets/deepika-ravikrishnan.png';
import MarcoCarreras from '../assets/marco-carreras.png';
import PatrickGikunda from '../assets/patrick-gikunda.png';
import LeahWambugu from '../assets/leah-wambugu.png';
import LinahNgumba from '../assets/linah-ngumba.png';
import MacdonaldObudho from '../assets/macdonald-obudho.png';
import BenjaminMuchiri from '../assets/benjamin-muchiri.png';
import HiramMbatia from '../assets/hiram-mbatia.png';
import SamuelWanjau from '../assets/samuel-wanjau.png';
import BenJackson from '../assets/ben-jackson.png';

// Institution logos
import JKUATLogo from '../assets/jkuat-logo.png';
import TuringLogo from '../assets/turing-logo.png';
import KNBSLogo from '../assets/knbs-logo.png';
import KICTANetLogo from '../assets/kictanet-logo.png';
import IDSLogo from '../assets/ids-logo.png';
import ACTSLogo from '../assets/acts-logo.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98 }
};

const cardVariants = {
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  tap: { scale: 0.98 }
};

export default function PublicSector() {
  const teamMembers = [
    {
      name: "Dr Daniele Guariso",
      role: "The Alan Turing Institute",
      image: DanieleGuariso
    },
    {
      name: "Dr Omar A. Guerrero",
      role: "The Alan Turing Institute",
      image: OmarGuerrero
    },
    {
      name: "Mr Rajab Mbaruk",
      role: "Kenya National Bureau of Statistics",
      image: RajabMbaruk
    },
    {
      name: "Dr. Lawrence Nderu",
      role: "Jomo Kenyatta University of Agriculture and Technology",
      image: LawrenceNderu
    },
    {
      name: "Mr Geofrey Kagombe",
      role: "Jomo Kenyatta University of Agriculture and Technology",
      image: GeofreyKagombe
    },
    {
      name: "Ms Deepika Ravikrishnan",
      role: "Institute of Development Studies",
      image: DeepikaRavikrishnan
    },
    {
      name: "Dr Marco Carreras",
      role: "Institute of Development Studies",
      image: MarcoCarreras
    },
    {
      name: "Dr Patrick Gikunda",
      role: "Declan Kimathi University of Technology",
      image: PatrickGikunda
    },
    {
      name: "Ms Leah Wambugu",
      role: "Kenya National Bureau of Statistics",
      image: LeahWambugu
    },
    {
      name: "Ms Linah Ngumba",
      role: "Kenya National Bureau of Statistics",
      image: LinahNgumba
    },
    {
      name: "Dr Macdonald Obudho",
      role: "Kenya National Bureau of Statistics",
      image: MacdonaldObudho
    },
    {
      name: "Mr Benjamin Muchiri",
      role: "Kenya National Bureau of Statistics",
      image: BenjaminMuchiri
    },
    {
      name: "Mr Hiram Mbatia",
      role: "Kenya National Bureau of Statistics",
      image: HiramMbatia
    },
    {
      name: "Mr Samuel Wanjau",
      role: "African Centre for Technology Studies",
      image: SamuelWanjau
    },
    {
      name: "Mr Ben Jackson",
      role: "Institute of Development Studies",
      image: BenJackson
    }
  ];

  const collaborators = [
    {
      name: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      description: "Lead institution for public sector service delivery project",
      role: "Project leadership and coordination",
      link: "https://www.jkuat.ac.ke/",
      logo: JKUATLogo,
      isLead: true
    },
    {
      name: "The Alan Turing Institute",
      description: "UK's national institute for AI and data science",
      role: "PPI methodology development",
      link: "https://www.turing.ac.uk/",
      logo: TuringLogo
    },
    {
      name: "Kenya National Bureau of Statistics",
      description: "Kenya's principal agency for statistical data collection and analysis",
      role: "Provided critical datasets for model calibration",
      link: "https://www.knbs.or.ke/",
      logo: KNBSLogo
    },
    {
      name: "Kenya ICT Action Network",
      description: "Digital policy and technology governance expertise",
      role: "Ensuring ICT considerations in policy impact assessment",
      link: "https://www.kictanet.or.ke/",
      logo: KICTANetLogo
    },
    {
      name: "Institute of Development Studies",
      description: "Global development expertise",
      role: "Shaping impact assessment frameworks",
      link: "https://www.ids.ac.uk/",
      logo: IDSLogo
    },
    {
      name: "African Center for Technology Studies",
      description: "Science and innovation policy expertise",
      role: "Integrating technology change considerations",
      link: "https://www.acts-net.org/",
      logo: ACTSLogo
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400"
          >
            Public Sector Service Delivery
          </motion.h1>
          <motion.p 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            A JKUAT-led initiative adapting the PPI Toolkit to improve government services in Kenya
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Overview Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400/30 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Project Overview</h2>
              <p className="text-gray-300 mb-4">
                Led by <span className="font-semibold text-indigo-300">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</span>, this project adapts the <a href="https://policypriority.org/" className="text-indigo-300 hover:underline" target="_blank" rel="noopener noreferrer">PPI Toolkit</a> (developed by the Alan Turing Institute) to Kenya's context.
              </p>
              <p className="text-gray-300">
                We use agent-based modeling to simulate citizen-government interactions and optimize service delivery.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400/30 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Key Objectives</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Model citizen access to government services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Simulate bureaucratic processes and bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Test alternative service delivery models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Develop performance indicators for service quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>Build local capacity in public sector modeling</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400/30 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">JKUAT's Leadership Role</h2>
              <p className="text-gray-300 mb-4">
                As the lead institution, JKUAT provides technical oversight, coordinates research activities, and ensures the project aligns with Kenya's development priorities.
              </p>
              <p className="text-gray-300">
                The university's Department of Computing brings expertise in data science and computational modeling to the project.
              </p>
            </motion.div>
          </motion.div>

          {/* Team Members Section */}
          <div className="mb-16 py-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-indigo-400 font-semibold tracking-wider text-lg md:text-xl">OUR TEAM</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">Project Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-emerald-400/30 transition-all"
                >
                  <TeamMember
                    name={member.name}
                    role={member.role}
                    image={member.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Collaborators Section */}
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-emerald-400 font-semibold tracking-wider text-lg md:text-xl">COLLABORATION</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">Project Partners</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-700 hover:border-emerald-400/30 ${collaborator.isLead ? 'ring-2 ring-indigo-500' : ''}`}
                >
                  {collaborator.isLead && (
                    <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-indigo-100 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit mx-auto">
                      Lead Institution
                    </div>
                  )}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center mb-4"
                  >
                    <img 
                      src={collaborator.logo} 
                      alt={`${collaborator.name} logo`} 
                      className="h-16 object-contain"
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-emerald-400 text-center">{collaborator.name}</h3>
                  <p className="text-gray-300 mb-1 text-center font-medium">{collaborator.role}</p>
                  <p className="text-gray-300 mb-4 text-center">{collaborator.description}</p>
                  <div className="mt-auto text-center">
                    <motion.a 
                      href={collaborator.link} 
                      className="inline-flex items-center text-indigo-300 hover:text-indigo-100 group"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                    >
                      <span className="group-hover:underline">Visit website</span>
                      <svg 
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}