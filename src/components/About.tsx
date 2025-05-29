
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Coffee, Camera, Plane } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Heart,
      title: "Warsaw Life",
      description: "Living and exploring the vibrant culture of Poland's capital city"
    },
    {
      icon: Coffee,
      title: "Coffee Culture",
      description: "Discovering the best cafes and coffee spots around the city"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing beautiful moments and scenic views like the one by the waterway"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new places and experiencing different cultures"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm Mehmet Nuri Yilmaz, currently calling Warsaw home. I believe in the power of 
            genuine connections and am always excited to meet new people and explore new opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <interest.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Living in Warsaw</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Warsaw has become my second home, and I'm constantly amazed by its rich history, 
              vibrant culture, and the warmth of its people. From the historic Old Town to the 
              modern business districts, every corner of this city tells a unique story.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether it's enjoying a peaceful walk along the Vistula River or discovering 
              new places in the city, I'm always ready for the next adventure that Warsaw has to offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
