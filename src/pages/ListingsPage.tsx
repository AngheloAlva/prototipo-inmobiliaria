import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

// Sample properties data
const allProperties = [
  {
    id: '1',
    title: 'Parcela Vista Montaña',
    location: 'Santa Bárbara, Bío Bío',
    price: '35.000.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Hermosa parcela con impresionantes vistas a la montaña y acceso a senderos naturales.',
    features: ['Vista a la montaña', 'Senderos', 'Agua de vertiente'],
  },
  {
    id: '2',
    title: 'Parcela Río Claro',
    location: 'Los Ángeles, Bío Bío',
    price: '42.000.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Parcela con acceso a río, ideal para amantes de la pesca y deportes acuáticos.',
    features: ['Acceso a río', 'Zona de pesca', 'Terreno plano'],
  },
  {
    id: '3',
    title: 'Parcela Bosque Nativo',
    location: 'Alto Bío Bío, Bío Bío',
    price: '38.500.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Parcela rodeada de bosque nativo, perfecta para quienes buscan privacidad y conexión con la naturaleza.',
    features: ['Bosque nativo', 'Privacidad', 'Fauna local'],
  },
  {
    id: '4',
    title: 'Parcela Valle Verde',
    location: 'Mulchén, Bío Bío',
    price: '36.500.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Parcela en valle con hermosas vistas panorámicas y excelente conectividad.',
    features: ['Valle fértil', 'Vistas panorámicas', 'Buena conectividad'],
  },
  {
    id: '5',
    title: 'Parcela Mirador',
    location: 'Nacimiento, Bío Bío',
    price: '39.900.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Parcela en altura con impresionantes vistas al valle y montañas nevadas en invierno.',
    features: ['Vista privilegiada', 'Altura', 'Vista a montañas nevadas'],
  },
  {
    id: '6',
    title: 'Parcela Los Robles',
    location: 'Yumbel, Bío Bío',
    price: '32.000.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/2437295/pexels-photo-2437295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Parcela con abundante vegetación y antiguos robles, ideal para quienes valoran la flora nativa.',
    features: ['Robles centenarios', 'Flora nativa', 'Caminos sombreados'],
  },
];

const ListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique locations for filter
  const locations = [...new Set(allProperties.map(property => property.location.split(',')[0].trim()))];

  // Filter properties based on search and filters
  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice = parseInt(property.price.replace(/\./g, '')) >= priceRange[0] &&
      parseInt(property.price.replace(/\./g, '')) <= priceRange[1];

    const matchesLocation = selectedLocations.length === 0 ||
      selectedLocations.includes(property.location.split(',')[0].trim());

    return matchesSearch && matchesPrice && matchesLocation;
  });

  const handleLocationChange = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(loc => loc !== location)
        : [...prev, location]
    );
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="h-64 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Terrenos Disponibles</h1>
          <p className="text-xl text-white/90 max-w-2xl text-center">
            Encuentra tu parcela ideal en la hermosa región del Bío Bío
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 -mt-12 relative z-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, ubicación o características..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
            <button
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
              Filtros
            </button>
          </div>

          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Rango de Precio</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$ {(priceRange[0] / 1000000).toFixed(1)}M</span>
                      <span>$ {(priceRange[1] / 1000000).toFixed(1)}M</span>
                    </div>
                    <input
                      type="range"
                      min="20000000"
                      max="50000000"
                      step="1000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Ubicación</h3>
                  <div className="space-y-2">
                    {locations.map(location => (
                      <label key={location} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(location)}
                          onChange={() => handleLocationChange(location)}
                          className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                        />
                        <span className="text-gray-700">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Mostrando <span className="font-medium text-gray-800">{filteredProperties.length}</span> terrenos
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No se encontraron terrenos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange([0, 50000000]);
                setSelectedLocations([]);
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;