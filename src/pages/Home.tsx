import  { Link } from 'react-router-dom';
import { Calendar, Star, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-black flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Your Dream Wedding <span className="text-gray-400">Awaits</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional wedding decoration services with 3D visualization and premium suit rentals.
            </p>
            <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200">
              Start Planning
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1745573674471-e057af420757?ixlib=rb-4.1.0&fit=fillmax&h=600&w=800" 
              alt="Beautiful wedding stage decorated with flowers"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Elite Weddings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <Star className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Premium Quality</h3>
              <p className="text-gray-300">Luxury decorations and premium materials for your special day.</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">3D Consultation</h3>
              <p className="text-gray-300">Visualize your wedding decoration in stunning 3D before the big day.</p>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-lg">
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Expert Team</h3>
              <p className="text-gray-300">Professional decorators with years of experience in wedding planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Recent Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1745573673043-43a4f3b91466?ixlib=rb-4.1.0&fit=fillmax&h=400&w=600" 
              alt="Elegant venue decorated with flowers"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1745573673235-5f2cee3ff9a8?ixlib=rb-4.1.0&fit=fillmax&h=400&w=600" 
              alt="Elegant wedding hall with floral decorations"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1745573674360-644c2edec427?ixlib=rb-4.1.0&fit=fillmax&h=400&w=600" 
              alt="A beautifully decorated wedding stage"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
 