import  { Package, Star, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Wedding Decorations",
      description: "Stunning floral arrangements and elegant venue decorations",
      icon: Star,
      features: ["Custom Floral Designs", "Venue Styling", "Centerpieces", "Backdrop Design"]
    },
    {
      title: "Suit Rentals",
      description: "Premium suits for grooms and groomsmen",
      icon: Package,
      features: ["Designer Suits", "Perfect Fitting", "Accessories Included", "Delivery Service"]
    },
    {
      title: "Full Planning",
      description: "Complete wedding planning and coordination services",
      icon: Users,
      features: ["Event Coordination", "Vendor Management", "Timeline Planning", "Day-of Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need for your perfect wedding day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-black p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 