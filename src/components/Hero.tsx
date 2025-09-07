import  { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <span className="ml-2 text-white font-medium">Premium Wedding Services</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Your Dream Wedding
          <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Awaits
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Exquisite decorations, elegant suits, and stunning dresses for your perfect day
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
            View Gallery
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-gray-400">Happy Couples</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-400">Venues</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
 