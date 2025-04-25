import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Home, Ruler, Trees, Mountain, CloudSnow, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample property data
const properties = [
  {
    id: '1',
    title: 'Parcela Vista Montaña',
    location: 'Santa Bárbara, Bío Bío',
    price: '35.000.000',
    area: '5.000',
    images: [
      'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1578749/pexels-photo-1578749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Hermosa parcela con impresionantes vistas a la montaña y acceso a senderos naturales. Esta propiedad única ofrece la combinación perfecta entre tranquilidad y accesibilidad, situándose a solo 15 minutos del centro urbano más cercano.\n\nEl terreno cuenta con una leve pendiente que permite tener vistas panorámicas de los alrededores, incluyendo montañas que en invierno se cubren de nieve, creando un espectáculo visual incomparable.\n\nIdeal para construir su casa de descanso o para vivir permanentemente en contacto con la naturaleza, sin renunciar a las comodidades de la vida moderna.',
    features: ['Vista a la montaña', 'Senderos', 'Agua de vertiente', 'Terreno con pendiente suave', 'Acceso todo el año'],
    services: ['Electricidad cercana', 'Factibilidad de agua potable', 'Factibilidad de internet rural'],
    amenities: ['A 15 minutos del centro urbano', 'A 45 minutos de centros de ski', 'A 20 minutos de río para pesca'],
  },
  {
    id: '2',
    title: 'Parcela Río Claro',
    location: 'Los Ángeles, Bío Bío',
    price: '42.000.000',
    area: '5.000',
    images: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1587699/pexels-photo-1587699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Parcela con acceso a río, ideal para amantes de la pesca y deportes acuáticos. Este terreno privilegiado ofrece acceso directo al río, permitiéndole disfrutar de actividades como pesca, kayak o simplemente relajarse junto al agua.\n\nEl terreno es mayormente plano, facilitando la construcción y el desarrollo de jardines o huertos. La naturaleza abundante de la zona atrae diversas especies de aves y fauna local, creando un entorno perfecto para los amantes de la observación de la naturaleza.\n\nLa parcela cuenta con árboles maduros que proporcionan sombra natural y belleza al entorno. Una oportunidad única para invertir en su bienestar y calidad de vida.',
    features: ['Acceso a río', 'Zona de pesca', 'Terreno plano', 'Árboles maduros', 'Fauna local diversa'],
    services: ['Electricidad en el terreno', 'Agua potable cercana', 'Internet rural disponible'],
    amenities: ['A 20 minutos del centro urbano', 'A 35 minutos de centro comercial', 'Cerca de rutas de trekking'],
  },
  {
    id: '3',
    title: 'Parcela Bosque Nativo',
    location: 'Alto Bío Bío, Bío Bío',
    price: '38.500.000',
    area: '5.000',
    images: [
      'https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Parcela rodeada de bosque nativo, perfecta para quienes buscan privacidad y conexión con la naturaleza. Este terreno único está inmerso en un entorno de bosque nativo chileno, ofreciendo una experiencia de vida en completa armonía con la naturaleza.\n\nLa parcela cuenta con una pequeña área despejada ideal para la construcción, mientras que el resto mantiene su vegetación nativa intacta, creando un refugio natural de incalculable valor.\n\nLa abundante vegetación proporciona privacidad natural y un microclima agradable durante todo el año. Los amantes de la fotografía, la observación de aves y el senderismo encontrarán en esta propiedad un verdadero paraíso.',
    features: ['Bosque nativo', 'Privacidad', 'Fauna local', 'Senderos naturales', 'Naciente de agua'],
    services: ['Factibilidad de electricidad', 'Agua de vertiente', 'Camino de acceso mantenido'],
    amenities: ['A 25 minutos del pueblo más cercano', 'A 50 minutos de la ciudad principal', 'Cerca de atractivos turísticos'],
  },
  {
    id: '4',
    title: 'Parcela Valle Verde',
    location: 'Mulchén, Bío Bío',
    price: '36.500.000',
    area: '5.000',
    images: [
      'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1165897/pexels-photo-1165897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3874894/pexels-photo-3874894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Parcela en valle con hermosas vistas panorámicas y excelente conectividad. Ubicada en un fértil valle, esta parcela ofrece un terreno excepcionalmente productivo para quienes deseen desarrollar pequeños cultivos o jardines.\n\nLa configuración del terreno permite tener vistas panorámicas al valle circundante y las montañas en la distancia, creando un entorno visual espectacular.\n\nUna de las grandes ventajas de esta propiedad es su excelente conectividad, con acceso a caminos bien mantenidos durante todo el año y cercanía a servicios básicos, sin sacrificar la tranquilidad y privacidad.',
    features: ['Valle fértil', 'Vistas panorámicas', 'Buena conectividad', 'Terreno productivo', 'Buen acceso'],
    services: ['Electricidad disponible', 'Pozo profundo', 'Internet de alta velocidad disponible'],
    amenities: ['A 10 minutos del centro urbano', 'A 30 minutos de hospital', 'Escuelas cercanas'],
  },
  {
    id: '5',
    title: 'Parcela Mirador',
    location: 'Nacimiento, Bío Bío',
    price: '39.900.000',
    area: '5.000',
    images: [
      'https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Parcela en altura con impresionantes vistas al valle y montañas nevadas en invierno. Esta propiedad única se sitúa en un punto elevado que ofrece vistas de 360 grados a los valles circundantes y a la cordillera, que en invierno se cubre de nieve creando un paisaje de ensueño.\n\nEl terreno tiene una superficie plana ideal para construcción en la parte alta, con una suave pendiente que desciende hacia un pequeño arroyo estacional.\n\nLa ubicación elevada proporciona excelente luz natural durante todo el día y atardeceres espectaculares que deleitan los sentidos. Una propiedad verdaderamente especial para quienes valoran las vistas panorámicas y la belleza natural.',
    features: ['Vista privilegiada', 'Altura', 'Vista a montañas nevadas', 'Arroyo estacional', 'Atardeceres espectaculares'],
    services: ['Electricidad cercana', 'Agua de pozo', 'Acceso a internet satelital'],
    amenities: ['A 18 minutos del centro urbano', 'A 40 minutos de centros turísticos', 'Cerca de rutas de ciclismo'],
  },
  {
    id: '6',
    title: 'Parcela Los Robles',
    location: 'Yumbel, Bío Bío',
    price: '32.000.000',
    area: '5.000',
    images: [
      'https://images.pexels.com/photos/2437295/pexels-photo-2437295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    description: 'Parcela con abundante vegetación y antiguos robles, ideal para quienes valoran la flora nativa. Esta propiedad excepcional cuenta con varios robles centenarios que aportan carácter y majestuosidad al terreno, creando espacios naturalmente sombreados y un ecosistema único.\n\nEl terreno presenta una topografía suavemente ondulada, con claros naturales perfectos para la construcción, rodeados por la vegetación nativa que proporciona privacidad y belleza.\n\nLos amantes de la botánica encontrarán en esta parcela un verdadero tesoro de biodiversidad, con especies vegetales nativas que cambian con las estaciones, creando un paisaje dinámico y siempre interesante.',
    features: ['Robles centenarios', 'Flora nativa', 'Caminos sombreados', 'Terreno ondulado', 'Biodiversidad'],
    services: ['Electricidad en el límite', 'Agua de vertiente', 'Internet rural'],
    amenities: ['A 15 minutos del pueblo más cercano', 'A 35 minutos de servicios completos', 'Cerca de ruta escénica'],
  },
];

const ListingDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the property by ID
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Terreno no encontrado</h2>
          <p className="text-gray-600 mb-6">El terreno que estás buscando no existe o ha sido removido.</p>
          <Link
            to="/listings"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a Terrenos
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          Volver
        </button>
      </div>

      {/* Property Images */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="relative h-[60vh] overflow-hidden">
          {property.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image}
                alt={`${property.title} - Imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Image Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevImage}
              className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center p-2 bg-gray-800">
          <div className="flex space-x-2 overflow-x-auto">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded ${index === currentImageIndex ? 'ring-2 ring-emerald-500' : 'opacity-70'
                  }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header */}
              <div className="p-8">
                <div className="flex items-center text-emerald-600 mb-2">
                  <MapPin size={18} className="mr-1" />
                  <span className="font-medium">{property.location}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.title}</h1>
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center">
                    <Ruler className="text-gray-400 mr-2" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Superficie</p>
                      <p className="font-semibold text-gray-800">{property.area} m²</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Home className="text-gray-400 mr-2" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Tipo</p>
                      <p className="font-semibold text-gray-800">Parcela</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Trees className="text-gray-400 mr-2" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Entorno</p>
                      <p className="font-semibold text-gray-800">Natural</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {['Descripción', 'Características', 'Ubicación'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${tab === 'Descripción'
                          ? 'text-emerald-600 border-b-2 border-emerald-600'
                          : 'text-gray-600 hover:text-emerald-600'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Descripción</h2>
                <div className="text-gray-600 space-y-4">
                  {property.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Características del terreno</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Servicios</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amenities */}
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Cercanías</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Precio</p>
                <p className="text-3xl font-bold text-emerald-600">$ {property.price}</p>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Beneficios</h3>
                <ul className="space-y-3">
                  {[
                    { icon: <Mountain size={20} className="text-amber-600" />, text: 'Lugar de descanso ideal' },
                    { icon: <CloudSnow size={20} className="text-blue-500" />, text: 'Cerca de la nieve en invierno' },
                    { icon: <Trees size={20} className="text-emerald-600" />, text: 'Tranquilidad en ambiente natural' },
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-3">{benefit.icon}</div>
                      <span className="text-gray-600">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <Link
                  to={`/reserve/${property.id}`}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Reservar Ahora
                </Link>
                <Link
                  to="/contact"
                  className="w-full bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Contactar Agente
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;