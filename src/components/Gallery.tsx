export  default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1745573674471-e057af420757?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjBlbGVnYW50JTIwZmxvd2Vyc3xlbnwwfHx8fDE3NTcyNjI5MjV8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Beautiful wedding stage decorated with flowers"
    },
    {
      url: "https://images.unsplash.com/photo-1745573673043-43a4f3b91466?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjBlbGVnYW50JTIwZmxvd2Vyc3hlbnwwfHx8fDE3NTcyNjI5MjV8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Elegant venue decorated with flowers"
    },
    {
      url: "https://images.unsplash.com/photo-1745573673333-1ab84d648d2a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjBlbGVnYW50JTIwZmxvd2Vyc3xlbnwwfHx8fDE3NTcyNjI5MjV8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Beautifully decorated stage for wedding"
    },
    {
      url: "https://images.unsplash.com/photo-1745573673235-5f2cee3ff9a8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjBlbGVnYW50JTIwZmxvd2Vyc3hlbnwwfHx8fDE3NTcyNjI5MjV8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Wedding hall with floral decorations"
    },
    {
      url: "https://images.unsplash.com/photo-1745573674357-1d6e917927cf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjBlbGVnYW50JTIwZmxvd2Vyc3hlbnwwfHx8fDE3NTcyNjI5MjV8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Decorated stage ready for ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1750071021956-aab36f67f651?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjBlbGVnYW50JTIwZmxvd2Vyc3hlbnwwfHx8fDE3NTcyNjI5MjV8MA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Flowers and decorations hanging from ceiling"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-300">Recent weddings we've decorated</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 