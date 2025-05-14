import { motion } from 'framer-motion';
import TeamMember from '../components/TeamMember';
// Import images from assets folder
import susanImage from '../assets/susan-mambo.png';
import betsyImage from '../assets/betsy-rono.png';
import lawrenceImage from '../assets/lawrence-nderu.png';

export default function DiseaseModeling() {
  const teamMembers = [
    {
      name: "Dr. Susan Mambo",
      role: "Project Lead",
      bio: "Public Health Expert | Health Systems Strengthening | Research & Academia",
      image: susanImage
    },
    {
      name: "Dr. Betsy Cheriro Rono",
      role: "Public Health Advisor",
      bio: "BscN,MPH,Cert(Enhanced Research) Phd (Epi)|Adjunct Research Scientist, African Institute for Capacity Development (AICAD)",
      image: betsyImage
    },
    {
      name: "Dr Lawrence Nderu",
      role: "AI and ML Specialist",
      bio: "Chairman, Lecturer, and Researcher in AI/ML, Software Engineering | Digital Ecosystem Builder | Founder - JHUB Africa | Co-Founder - gDIH - | Digital Africa Connector",
      image: lawrenceImage
    }
  ];

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
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
            Zero-Dose Vaccination Modeling
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Using agent-based modeling to predict vaccination coverage and reduce zero-dose children in Kenya by 2025
          </p>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Key Findings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red-500">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">Current Status</h3>
                <p className="text-gray-300">
                  Kenya's zero-dose vaccination rate is 7%, meaning 7 in 100 children under 1 year receive no vaccinations (KDHS 2022).
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-orange-500">
                <h3 className="text-2xl font-semibold mb-4 text-orange-400">Model Predictions</h3>
                <p className="text-gray-300">
                  Halving zero-dose cases from 3,338 to 1,670 will reduce tetanus cases from 130 to 65 by 2025.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-yellow-500">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Global Impact</h3>
                <p className="text-gray-300">
                  Vaccination prevents 2.5 million deaths annually among under-fives worldwide (Ozigbu 2022).
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modeling Approach Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Modeling Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">ABM Framework</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▹</span>
                  <span><strong>Model:</strong> StarSim with SIS (Susceptible → Infectious → Susceptible) structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▹</span>
                  <span><strong>Agents:</strong> Under-five children in Kenya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▹</span>
                  <span><strong>Interactions:</strong> Caretakers, health workers, vaccination environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">Disease Parameters</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">▹</span>
                  <span><strong>Tetanus:</strong> Beta=1.3, gamma=3/12, waning=0.055</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">▹</span>
                  <span><strong>Vaccination:</strong> Prob=0.25, efficacy=0.9</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">▹</span>
                  <span><strong>Target:</strong> 50% reduction in zero-dose DTP1 vaccination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention Strategies */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Intervention Strategies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-700 p-10 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Key Recommendations</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 text-xl mr-3">•</span>
                <span>Increase community-based tetanus vaccination programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 text-xl mr-3">•</span>
                <span>Develop tetanus vaccines with 10-year potency to reduce susceptibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 text-xl mr-3">•</span>
                <span>Implement targeted vaccine campaigns to reach zero-dose children</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 text-xl mr-3">•</span>
                <span>Strengthen monitoring of DTP1 coverage as key indicator</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Research Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div variants={itemVariants} key={index}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  darkMode={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Project Partners</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-700 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">Research Institutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▹</span>
                  <span>African Population and Health Research Center (APHRC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▹</span>
                  <span>Institute for Disease Modeling (IDM)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-700 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">Supporting Organizations</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">▹</span>
                  <span>Bill & Melinda Gates Foundation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">▹</span>
                  <span>Kenya Ministry of Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">▹</span>
                  <span>World Health Organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-orange-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission to Eliminate Zero-Dose Vaccination</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
            Contribute to achieving Kenya's Immunization Agenda 2030 targets and saving children's lives
          </p>
          <a 
  href="https://www.linkedin.com/company/jhubafrica/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="px-8 py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
    Learn More About the Project
  </button>
</a>
        </div>
      </section>
    </div>
  );
}