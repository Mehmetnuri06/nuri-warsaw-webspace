
import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <img
            src="/lovable-uploads/6fe77a8f-f811-498c-9d42-f36dbad725e8.png"
            alt="Mehmet Nuri Yilmaz"
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1 text-blue-600" />
              Warsaw, Poland
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
          Mehmet Nuri Yilmaz
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Welcome to my digital space. I'm passionate about creating meaningful connections and experiences in the beautiful city of Warsaw.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
            <Github className="w-5 h-5 mr-2" />
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
