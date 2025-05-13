import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import simulationAnimation from '../assets/features/impact.json';
import agentsAnimation from '../assets/features/ai.json';
import applicationsAnimation from '../assets/features/transparency.json';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
            Agent-Based Modeling(ABM) JHUB for Solving Problems
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            We create computational models to simulate complex systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              Learn About ABM
            </Link>
            <Link 
              to="/projects" 
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* What is ABM Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-semibold tracking-wider text-lg md:text-xl">APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">What is Agent-Based Modeling?</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 mb-6 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={simulationAnimation}
                  style={{ height: '50%', width: '50%' }}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Simulation Approach</h3>
              <p className="text-gray-300 text-base md:text-lg">
                ABM simulates the actions and interactions of autonomous agents to assess their effects on the system as a whole.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 mb-6 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={agentsAnimation}
                  style={{ height: '50%', width: '50%' }}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Individual Agents</h3>
              <p className="text-gray-300 text-base md:text-lg">
                Each agent has behaviors and decision-making capabilities, allowing for complex emergent phenomena.
              </p>
            </div>
            
            <div className="bg-gray-700 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 mb-6 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={applicationsAnimation}
                  style={{ height: '50%', width: '50%' }}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Real-World Applications</h3>
              <p className="text-gray-300 text-base md:text-lg">
                From epidemiology to urban planning, ABM helps understand and predict complex systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold tracking-wider text-lg md:text-xl">OUR WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">Focus Areas in Kenya</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-indigo-500">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">Healthcare Systems</h3>
              </div>
              <p className="text-gray-400 mb-6 text-base md:text-lg">
                Modeling disease spread and healthcare resource allocation to inform public health policy.
              </p>
              <Link 
                to="/projects/infectious-disease" 
                className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors text-base md:text-lg"
              >
                View our disease modeling project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-emerald-400">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">Public Sector Efficiency</h3>
              </div>
              <p className="text-gray-400 mb-6 text-base md:text-lg">
                Optimizing service delivery through simulation of government processes and citizen interactions.
              </p>
              <Link 
                to="/projects/public-sector" 
                className="inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors text-base md:text-lg"
              >
                View our public sector project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}