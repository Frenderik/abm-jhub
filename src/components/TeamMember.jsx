export default function TeamMember({ name, role, image }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center h-full">
      <div className="flex flex-col items-center h-full">
        <img 
          src={image} 
          alt={name} 
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-100"
        />
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{name}</h3>
        <p className="text-indigo-600 text-sm mb-2">{role}</p>
      </div>
    </div>
  );
}