import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, link, image, icon, bgColor, borderColor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`h-full ${bgColor} rounded-2xl overflow-hidden shadow-lg border ${borderColor} transition-all duration-300`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white-800">{title}</h3>
        </div>
<p className="text-white-600 text-xl mb-6">{description}</p>
        <Link 
          to={link} 
          className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          Explore Project
        </Link>
      </div>
    </motion.div>
  );
}