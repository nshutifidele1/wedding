import  { Link } from 'react-router-dom';
import { Calendar, ShoppingBag, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: 'Wedding Decoration',
      description: 'Complete venue decoration with flowers, lighting, and elegant setup.',
      price: 'Starting from fwf$700'
    },
    {
      icon: ShoppingBag,
      title: 'Wedding Dresses',
      description: 'Premium collection of wedding dresses for your special day.',
      price: 'Starting from rwf800k'
    },
    {
      icon: Star,
      title: 'Suits Rental',
      description: 'Designer suits and formal wear rental for grooms and wedding party.',
      price: 'Starting from rwf15k'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete wedding solutions from decoration to attire, all with personalized 3D consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl">
                <Icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-white font-semibold text-lg mb-6">{service.price}</p>
                <Link 
                  to="/contact" 
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 inline-block"
                >
                  Get Quote
                </Link>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">3D Consultation Service</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Visualize Your Perfect Wedding</h3>
              <p className="text-gray-300 mb-4">
                Our advanced 3D consultation service allows you to see exactly how your wedding will look before the big day. 
                Walk through your venue virtually and make changes in real-time.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Virtual venue walkthrough</li>
                <li>• Real-time decoration changes</li>
                <li>• Multiple layout options</li>
                <li>• Color scheme visualization</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1745573673333-1ab84d648d2a?ixlib=rb-4.1.0&fit=fillmax&h=400&w=600" 
                alt="A beautifully decorated stage for a wedding ceremony"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 