export  default function Gallery() {
  const images = [
    {
      url: "https://unsplash.com/photos/mother-hands-holding-ribbons-and-helping-dressing-beautiful-bride-in-morning-bridal-getting-ready-in-the-morning-mom-and-daughter-moments-PEH8C2qh2Lg",
      alt: "A beautiful wedding stage decorated with flowers"
    },
    {
      url: "https://images.unsplash.com/photo-1745573673043-43a4f3b91466?ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Elegant venue decorated with flowers for an event"
    },
    {
      url: "https://images.unsplash.com/photo-1745573673235-5f2cee3ff9a8?ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Elegant wedding hall with floral decorations"
    },
    {
      url: "https://images.unsplash.com/photo-1614469261904-d77e1254d8f0?ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "Elegant wedding decoration details"
    },
    {
      url: "https://images.unsplash.com/photo-1745573673333-1ab84d648d2a?ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "A beautifully decorated stage for a wedding ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1745573674360-644c2edec427?ixlib=rb-4.1.0&fit=fillmax&h=600&w=800",
      alt: "A beautifully decorated wedding stage"
    }
  ];

  return (
       <div className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Wedding Gallery</h1>
          <p className="text-xl text-gray-300">
            Explore our portfolio of beautiful wedding decorations and transformations.
          </p>
        </div>
 

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 