import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  Users, 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  Send
} from 'lucide-react';

const MutantechLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Datos del equipo (original)
  const team = [
    { name: 'Josué Brazales', role: 'Ingeniero ITIN', specialty: 'QA Tester' },
    { name: 'Jair Sánchez', role: 'Ingeniero ITIN', specialty: 'Mobile Developer' },
    { name: 'Josué Espinoza', role: 'Ingeniero ITIN', specialty: 'Backend Developer' },
    { name: 'Raúl Faz', role: 'Ingeniero ITIN', specialty: 'Frontend Developer' },
    { name: 'Lesly Gaibor', role: 'Ingeniera ITIN', specialty: 'UI/UX Designer' }
  ];

  // Servicios (original)
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desarrollo de Software a Medida',
      description: 'Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.',
      features: ['Análisis de requerimientos', 'Arquitectura escalable', 'Testing completo', 'Mantenimiento continuo']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones nativas e híbridas para iOS y Android con las últimas tecnologías y mejores prácticas.',
      features: ['Apps nativas', 'Cross-platform', 'UI/UX optimizada', 'Store deployment']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Administración de Páginas Web',
      description: 'Gestión completa de sitios web, desde el desarrollo hasta el mantenimiento y optimización.',
      features: ['CMS personalizado', 'SEO optimización', 'Hosting y dominio', 'Actualizaciones regulares']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Chatbots Inteligentes',
      description: 'Automatiza la atención al cliente con chatbots inteligentes que mejoran la experiencia del usuario.',
      features: ['IA conversacional', 'Integración multicanal', 'Analytics avanzados', 'Personalización completa']
    }
  ];

  // Tecnologías (original)
  const technologies = [
    'JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'React', 'Node.js', 
    'Laravel', 'Spring Boot', 'MySQL', 'MongoDB', 'AWS', 'Docker'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'nosotros', 'equipo', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulación de envío de email a mutantech.dev@gmail.com
      // En producción, integrar con EmailJS, Formspree o tu backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular éxito
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Aquí iría la integración real con el servicio de email
      console.log('Enviando email a mutantech.dev@gmail.com:', {
        from: formData.email,
        name: formData.name,
        message: formData.message
      });
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-green-500/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold text-green-500">MT</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Servicios', 'Nosotros', 'Equipo', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-green-500 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-green-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg">
              {['Inicio', 'Servicios', 'Nosotros', 'Equipo', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 hover:text-green-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section con nuevo fondo */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Nuevo fondo con patrones geométricos animados */}
        <div className="absolute inset-0">
          {/* Gradiente base */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          
          {/* Patrones geométricos */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff88" strokeWidth="0.5"/>
                </pattern>
                <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1.5" fill="#00ff88" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          
          {/* Formas geométricas flotantes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500/10 rounded-lg rotate-45 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-yellow-500/10 rotate-12 blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Líneas dinámicas */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-pulse"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        {/* Gradiente adicional para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-green-500">MUTAN</span>
              <span className="text-white">TECH</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Transformamos ideas en soluciones tecnológicas innovadoras
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Somos una empresa especialistas en Tecnologías de la Información, 
              comprometidos con la excelencia en desarrollo de software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ver Servicios <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contactanos
              </button>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-green-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 border border-green-500/20 rounded-lg p-8 hover:border-green-500/40 transition-all duration-300">
                <div className="text-green-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Quiénes <span className="text-green-500">Somos?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Mutantech es un equipo de 6 ingenieros especializados en Tecnologías de la Información.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Nos caracterizamos por nuestra pasión por la innovación y nuestro compromiso con la 
                excelencia técnica. Cada proyecto es una oportunidad para aplicar las mejores prácticas 
                y las tecnologías más avanzadas del mercado.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">6+</div>
                  <div className="text-gray-400">Ingenieros Expertos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">10+</div>
                  <div className="text-gray-400">Tecnologías</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {technologies.slice(0, 9).map((tech, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center border border-green-500/20">
                  <div className="text-green-500 font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro <span className="text-green-500">Equipo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ingenieros ITIN especializados en diferentes áreas del desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 border border-green-500/20 rounded-lg p-6 text-center hover:border-green-500/40 transition-all duration-300">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-green-500 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hablemos de tu <span className="text-green-500">Proyecto</span>
            </h2>
            <p className="text-xl text-gray-300">
              ¿Tienes una idea? Nosotros tenemos la experiencia para hacerla realidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-500" />
                  <span>mutantech.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-500" />
                  <span>+593 99 123 4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-green-500" />
                  <span>Quito, Ecuador</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Síguenos</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-green-500/20 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400">
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400">
                    Error al enviar el mensaje. Por favor intenta de nuevo.
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code className="w-6 h-6 text-green-500" />
            <span className="text-xl font-bold text-green-500">MUTANTECH</span>
          </div>
          <p className="text-gray-400">
            © 2025 Mutantech. Transformando ideas en realidad digital.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MutantechLanding;