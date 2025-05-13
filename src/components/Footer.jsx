export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABM Kenya</h3>
            <p className="text-gray-300">
              Using agent-based modeling to solve complex problems in Kenya's development landscape.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">info.jhub@jkuat.ac.ke</p>
            <p className="text-gray-300">Nairobi, Kenya</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ABM Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}