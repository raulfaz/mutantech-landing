// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';

const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Debug: Verificar variables al cargar el componente
  console.log('Variables de entorno:');
  console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
  console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
  console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

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
      // Validaciones básicas
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Todos los campos son obligatorios');
      }

      // Verificar que las variables de entorno existan
      if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
          !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
          !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
        throw new Error('Variables de entorno no configuradas correctamente');
      }

      // Preparar datos para EmailJS
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        sent_date: new Date().toLocaleString('es-ES'),
        to_email: 'mutantech.dev@gmail.com'
      };

      console.log('Enviando con EmailJS - templateParams:', templateParams);

      // CORRECCIÓN: Enviar email con EmailJS (4 parámetros en orden correcto)
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Template ID
        templateParams,                             // Datos del formulario
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // Public Key
      );

      console.log('Email enviado exitosamente:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error detallado:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${theme.card} rounded-lg p-8 transition-all duration-300`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nombre *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            maxLength={100}
            className={`w-full px-4 py-3 ${theme.input} rounded-lg focus:border-green-500 focus:outline-none transition-colors ${theme.text}`}
            placeholder="Tu nombre completo"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            maxLength={255}
            className={`w-full px-4 py-3 ${theme.input} rounded-lg focus:border-green-500 focus:outline-none transition-colors ${theme.text}`}
            placeholder="tu@email.com"
            disabled={isSubmitting}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Mensaje *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            maxLength={2000}
            rows={5}
            className={`w-full px-4 py-3 ${theme.input} rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none ${theme.text}`}
            placeholder="Cuéntanos sobre tu proyecto..."
            disabled={isSubmitting}
          />
          <div className="text-sm text-gray-500 mt-1">
            {formData.message.length}/2000 caracteres
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400">
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400">
            Error al enviar el mensaje. Por favor verifica tus datos e intenta de nuevo.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
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
        
        <div className="text-xs text-gray-500 text-center">
          Los mensajes son enviados de forma segura a través de EmailJS.
        </div>
      </form>
    </div>
  );
};

export default ContactForm;