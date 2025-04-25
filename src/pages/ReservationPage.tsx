import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Download } from 'lucide-react';

// Sample property data
const properties = [
  {
    id: '1',
    title: 'Parcela Vista Montaña',
    location: 'Santa Bárbara, Bío Bío',
    price: '35.000.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Parcela Río Claro',
    location: 'Los Ángeles, Bío Bío',
    price: '42.000.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Parcela Bosque Nativo',
    location: 'Alto Bío Bío, Bío Bío',
    price: '38.500.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Parcela Valle Verde',
    location: 'Mulchén, Bío Bío',
    price: '36.500.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Parcela Mirador',
    location: 'Nacimiento, Bío Bío',
    price: '39.900.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'Parcela Los Robles',
    location: 'Yumbel, Bío Bío',
    price: '32.000.000',
    area: '5.000',
    image: 'https://images.pexels.com/photos/2437295/pexels-photo-2437295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rut: string;
  address: string;
  city: string;
  comments: string;
  terms: boolean;
}

const ReservationPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);
  const [step, setStep] = useState(1);
  const [reservationCompleted, setReservationCompleted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rut: '',
    address: '',
    city: '',
    comments: '',
    terms: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  if (!property) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Terreno no encontrado</h2>
          <p className="text-gray-600 mb-6">El terreno que estás buscando no existe o ha sido removido.</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear error when field is updated
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName) newErrors.firstName = 'Requerido';
    if (!formData.lastName) newErrors.lastName = 'Requerido';
    if (!formData.email) {
      newErrors.email = 'Requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone) newErrors.phone = 'Requerido';
    if (!formData.rut) newErrors.rut = 'Requerido';

    if (step === 2 && !formData.terms) {
      newErrors.terms = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (step === 1) {
        setStep(2);
      } else {
        // Process reservation
        setReservationCompleted(true);
      }
    }
  };

  const goBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={goBack}
          className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors mb-8"
        >
          <ArrowLeft size={18} className="mr-1" />
          {step === 1 ? 'Volver a detalles' : 'Volver al formulario'}
        </button>

        {!reservationCompleted ? (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-emerald-700 text-white">
              <h1 className="text-2xl font-bold">Reservar Parcela</h1>
              <p className="text-emerald-100">Complete el formulario para reservar esta parcela</p>
            </div>

            {/* Progress */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'
                  } mr-3`}>
                  {step > 1 ? <Check size={18} /> : '1'}
                </div>
                <div className={`flex-grow h-1 ${step > 1 ? 'bg-emerald-600' : 'bg-gray-200'
                  } mx-2`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500'
                  } mx-3`}>
                  2
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className={step >= 1 ? 'text-emerald-600 font-medium' : 'text-gray-500'}>
                  Información Personal
                </span>
                <span className={step >= 2 ? 'text-emerald-600 font-medium' : 'text-gray-500'}>
                  Confirmar Reserva
                </span>
              </div>
            </div>

            {/* Property Summary */}
            <div className="p-6 border-b border-gray-200 flex items-center">
              <img
                src={property.image}
                alt={property.title}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{property.title}</h2>
                <p className="text-gray-600 text-sm">{property.location}</p>
                <p className="text-emerald-600 font-medium">$ {property.price}</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Información Personal</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="rut" className="block text-gray-700 font-medium mb-2">
                        RUT *
                      </label>
                      <input
                        type="text"
                        id="rut"
                        name="rut"
                        value={formData.rut}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${errors.rut ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.rut && (
                        <p className="text-red-500 text-sm mt-1">{errors.rut}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
                        Comentarios adicionales
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Confirmar Reserva</h2>

                  {/* Reservation Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-gray-800 mb-3">Resumen de la reserva</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                      <div className="text-gray-600">Nombre completo:</div>
                      <div className="font-medium">{formData.firstName} {formData.lastName}</div>

                      <div className="text-gray-600">Email:</div>
                      <div className="font-medium">{formData.email}</div>

                      <div className="text-gray-600">Teléfono:</div>
                      <div className="font-medium">{formData.phone}</div>

                      <div className="text-gray-600">RUT:</div>
                      <div className="font-medium">{formData.rut}</div>

                      <div className="text-gray-600">Dirección:</div>
                      <div className="font-medium">{formData.address || 'No especificada'}</div>

                      <div className="text-gray-600">Ciudad:</div>
                      <div className="font-medium">{formData.city || 'No especificada'}</div>
                    </div>

                    {formData.comments && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-gray-600 mb-1">Comentarios:</div>
                        <div className="text-sm">{formData.comments}</div>
                      </div>
                    )}
                  </div>

                  {/* Terms */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className={`mt-1 rounded text-emerald-600 focus:ring-emerald-500 mr-2 ${errors.terms ? 'border-red-500' : ''
                          }`}
                      />
                      <label htmlFor="terms" className="text-gray-700 text-sm">
                        Al marcar esta casilla, acepto los términos y condiciones de la reserva.
                        Entiendo que esta es una carta de reserva y no constituye un contrato
                        definitivo de compraventa. La reserva tiene una vigencia de 5 días hábiles,
                        período durante el cual un agente inmobiliario se contactará conmigo para
                        concretar los siguientes pasos.
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-sm mt-1 ml-6">{errors.terms}</p>
                    )}
                  </div>

                  {/* Mini Contract Preview */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-800">Vista previa del contrato</h3>
                      <button
                        type="button"
                        className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center text-sm"
                      >
                        <Download size={16} className="mr-1" />
                        Descargar
                      </button>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 h-32 overflow-y-auto text-sm text-gray-600">
                      <p className="font-medium text-center mb-2">CARTA DE RESERVA</p>
                      <p>Por medio de la presente, {formData.firstName} {formData.lastName}, RUT {formData.rut}, manifiesta su intención de reservar la parcela "{property.title}", ubicada en {property.location}, con una superficie de {property.area} m², por un valor de ${property.price} pesos chilenos.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {step === 1 ? 'Cancelar' : 'Atrás'}
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {step === 1 ? 'Continuar' : 'Completar Reserva'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 bg-emerald-700 text-white text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                <Check size={32} className="text-emerald-600" />
              </div>
              <h1 className="text-2xl font-bold">¡Reserva Completada!</h1>
              <p className="text-emerald-100">Tu reserva ha sido procesada correctamente</p>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-6">
                Hemos recibido tu solicitud de reserva para la parcela "{property.title}".
                En los próximos días, un agente inmobiliario se pondrá en contacto contigo para
                coordinar los siguientes pasos.
              </p>
              <p className="text-gray-600 mb-8">
                Se ha enviado una copia de la carta de reserva a tu correo electrónico: <span className="font-semibold">{formData.email}</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Volver al Inicio
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contactar Agente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;