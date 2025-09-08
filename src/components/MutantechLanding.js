// src/components/MutantechLanding.js
import React, { useState, useEffect } from 'react';
import Plasma from './Plasma'; // Importar el componente Plasma
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
  ArrowRight
} from 'lucide-react';

const MutantechLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Datos del equipo
  const team = [
    { name: 'Josué Brazales', role: 'Ingeniero ITIN', specialty: 'QA Tester' },
    { name: 'Jair Sánchez', role: 'Ingeniero ITIN', specialty: 'Mobile Developer' },
    { name: 'Josué Espinoza', role: 'Ingeniero ITIN', specialty: 'Backend Developer' },
    { name: 'Raúl Faz', role: 'Ingeniero ITIN', specialty: 'Frontend Developer' },
    { name: 'Lesly Gaibor', role: 'Ingeniera ITIN', specialty: 'UI/UX Designer' }
  ];

  // Servicios
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

  // Tecnologías
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-mutant-green/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-mutant-green rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold text-mutant-green">MT</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Servicios', 'Nosotros', 'Equipo', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-mutant-green transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-mutant-green' : ''
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
                  className="block w-full text-left px-4 py-2 hover:text-mutant-green transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section con GradientBlinds Background */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Efecto GradientBlinds como fondo */}
        <div className="absolute inset-0 opacity-95">
          <Plasma
            gradientColors={['#00ff88', '#5227FF', '#0088ff', '#ff0088']}
            angle={0}
            noise={0.6}
            blindCount={15}
            blindMinWidth={60}
            spotlightRadius={0.3}
            spotlightSoftness={0.5}
            spotlightOpacity={2.0}
            mouseDampening={0.02}
            distortAmount={1.2}
            shineDirection="left"
            mixBlendMode="lighten"
            mirrorGradient={true}
          />
        </div>
        
        {/* Gradiente adicional para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-mutant-green">MUTAN</span>
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
                className="btn-primary"
              >
                Ver Servicios <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-secondary"
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
              Nuestros <span className="text-mutant-green">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8">
                <div className="text-mutant-green mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle className="w-5 h-5 text-mutant-green flex-shrink-0" />
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
                ¿Quiénes <span className="text-mutant-green">Somos?</span>
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
                  <div className="text-3xl font-bold text-mutant-green">6+</div>
                  <div className="text-gray-400">Ingenieros Expertos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mutant-green">10+</div>
                  <div className="text-gray-400">Tecnologías</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {technologies.slice(0, 9).map((tech, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center border border-mutant-green/20">
                  <div className="text-mutant-green font-semibold">{tech}</div>
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
              Nuestro <span className="text-mutant-green">Equipo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ingenieros ITIN especializados en diferentes áreas del desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-20 h-20 bg-mutant-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-mutant-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-mutant-green mb-2">{member.role}</p>
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
              Hablemos de tu <span className="text-mutant-green">Proyecto</span>
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
                  <Mail className="w-6 h-6 text-mutant-green" />
                  <span>contacto@mutantech.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-mutant-green" />
                  <span>+593 99 123 4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-mutant-green" />
                  <span>Quito, Ecuador</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Síguenos</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-mutant-green/20 rounded-lg flex items-center justify-center hover:bg-mutant-green hover:text-gray-900 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-mutant-green/20 rounded-lg flex items-center justify-center hover:bg-mutant-green hover:text-gray-900 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-mutant-green focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-mutant-green focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-mutant-green focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('¡Gracias por tu interés! Te contactaremos pronto.')}
                  className="btn-primary w-full"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-mutant-green/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code className="w-6 h-6 text-mutant-green" />
            <span className="text-xl font-bold text-mutant-green">MUTANTECH</span>
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