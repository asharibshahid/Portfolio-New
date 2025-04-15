import { CheckCircle } from "lucide-react";
import { Icon } from '@iconify/react';
const services = [
  { name: "Web Development", description: "Building scalable and robust web applications tailored to your needs." },
  { name: "UI/UX Designing", description: "Crafting intuitive and visually stunning user experiences." },
  { name: "I.T Services", description: "Providing reliable tech solutions for your business growth." },
  { name: "Web Designing", description: "Creating modern, responsive, and elegant website designs." },
  { name: "Shopify", description: "Empowering e-commerce businesses with Shopify expertise." },
  { name: "CMS", description: "Customizing and optimizing content management systems." },
  { name: "Prompt Engineering", description: "Delivering advanced AI prompt engineering solutions." },
];
const skills = [
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
      { name: "Python", icon: "logos:python" },
    { name: "Typescript", icon: "logos:typescript" },
    { name: "React.js", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs" },
    { name: "Sanity", icon: "logos:sanity" },
    { name: "Headless CMS", icon: "logos:headless-cms" },
    { name: "Shopify", icon: "logos:shopify" },
    { name: "API Integration", icon: "logos:api" },
    { name: "Stripe Integration", icon: "logos:stripe" },
    { name: "Clerk", icon: "logos:clerk" },
  ];
  
// 
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-800 text-white px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <br />
        <br />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
          Our Premium Services
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our range of professional services designed to elevate your business and streamline your workflows.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-800"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-lime-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">{service.name}</h2>
            </div>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg shadow-2xl transition-all hover:scale-105 hover:shadow-2xl border-t-2 border-x-amber-600"
            >
              <Icon icon={skill.icon} className="w-20 h-20 mb-4 text-white" />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Ready to transform your business? Let’s create something extraordinary together.
        </p>
        
        <button className="px-6 py-3 bg-gradient-to-r from-lime-300 to-emerald-300 text-black font-semibold rounded-full hover:from-emerald-300 hover:to-lime-300 transition-colors">
          Contact Us On WhatsApp <span className="text-lg ml-2">🚀 </span>
          03212558027
        </button>
      </div>
    </div>
  );
}
