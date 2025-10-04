import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, ExternalLink, Check, AlertCircle } from "lucide-react";
import { submitFormToGoogleSheet, validateFormData } from "../utils/formSubmission";

export function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    customerType: "",
    message: ""
  });
  
  // Form submission state
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ""
  });
  
  // Form validation state
  const [formErrors, setFormErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[id]) {
      setFormErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }
    
    // Set submitting state
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ""
    });
    
    try {
      // Submit form to Google Sheet
      const result = await submitFormToGoogleSheet(formData, "contact_page");
      
      // Update form status
      setFormStatus({
        submitting: false,
        submitted: true,
        success: result.success,
        message: result.message
      });
      
      // Reset form if successful
      if (result.success) {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          customerType: "",
          message: ""
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({
            ...prev,
            submitted: false,
            message: ""
          }));
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: "Une erreur s'est produite. Veuillez réessayer."
      });
    }
  };
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SAN METAL BY BEN AMOR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre disposition 
            pour vous accompagner dans vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone Section */}
            <div className="bg-white shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-100">
                  <Phone className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600 text-sm">Appelez-nous directement</p>
                </div>
              </div>
              <div className="space-y-2 pl-16">
                <a href="tel:+21697712721" className="block text-gray-700 hover:text-red-700 transition-colors">
                  (+216) 97 712 721
                </a>
                <a href="tel:+21696607065" className="block text-gray-700 hover:text-red-700 transition-colors">
                  (+216) 96 607 065
                </a>
                <a href="tel:+21674830899" className="block text-gray-700 hover:text-red-700 transition-colors">
                  (+216) 74 830 899
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-white shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-100">
                  <Mail className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 text-sm">Envoyez-nous un message</p>
                </div>
              </div>
              <div className="space-y-2 pl-16">
                <a href="mailto:dg@sanmetal.com.tn" className="block text-gray-700 hover:text-red-700 transition-colors">
                  dg@sanmetal.com.tn
                </a>
                <a href="mailto:contact@sanmetal.com.tn" className="block text-gray-700 hover:text-red-700 transition-colors">
                  contact@sanmetal.com.tn
                </a>
                {/* Email removed */}
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-100">
                  <MapPin className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600 text-sm">Visitez notre siège</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-gray-700">Route Mahdia Km 8</p>
                <p className="text-gray-700">Sfax - Tunisie</p>
              </div>
            </div>

            {/* Hours Section */}
            <div className="bg-white shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-100">
                  <Clock className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
                  <p className="text-gray-600 text-sm">Nos heures d'ouverture</p>
                </div>
              </div>
              <div className="pl-16 space-y-1">
                <p className="text-gray-700">Lun - Ven: 8h00 - 17h00</p>
                <p className="text-gray-700">Sam: 8h00 - 12h00</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notre localisation</h3>
              <p className="text-gray-600">PPWX+CFX STE SAN METAL By BEN AMOR, Sfax</p>
            </div>
            <div className="aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d10.7484!3d34.7464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d3006e925ec5%3A0x9873d99edde1ae67!2sPPWX%2BCFX%20STE%20SAN%20METAL%20By%20BEN%20AMOR%2C%20Sfax!5e0!3m2!1sen!2stn!4v1234567890123!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAN METAL BY BEN AMOR Location"
              />
            </div>
            <div className="p-4">
              <Button 
                variant="outline" 
                className="w-full border-red-700 text-red-700 hover:bg-red-50"
                onClick={() => window.open('https://www.google.com/maps?q=PPWX+CFX+STE+SAN+METAL+By+BEN+AMOR,+Sfax&ftid=0x1301d3006e925ec5:0x9873d99edde1ae67', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ouvrir dans Google Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 mb-12">
          <div className="bg-white shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Envoyez-nous un message</h3>
            
            {/* Form Success Message */}
            {formStatus.submitted && formStatus.success && (
              <div className="mb-6 bg-green-50 text-green-800 p-4 rounded-md flex items-center">
                <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            )}
            
            {/* Form Error Message */}
            {formStatus.submitted && !formStatus.success && (
              <div className="mb-6 bg-red-50 text-red-800 p-4 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p>Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer plus tard.</p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom *</label>
                <input 
                  id="name"
                  type="text"
                  placeholder="Votre nom complet"
                  className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Entreprise</label>
                <input 
                  id="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="customerType" className="block text-sm font-medium text-gray-700">Type *</label>
                <select 
                  id="customerType"
                  className={`w-full px-4 py-2 border ${formErrors.customerType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  value={formData.customerType}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez votre type</option>
                  <option value="Prevendeur">Prevendeur</option>
                  <option value="Client">Client</option>
                  <option value="Distributeur">Distributeur</option>
                </select>
                {formErrors.customerType && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.customerType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input 
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                  <input 
                    id="phone"
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    className={`w-full px-4 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Détails de votre demande..."
                  className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>

              <Button 
                type="submit"
                variant="primary"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : 'Envoyer la demande'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Les champs marqués d'un * sont obligatoires
              </p>
            </form>
          </div>
        </div>
        
        {/* Redesigned Emergency Contact */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-10 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10"></div>
            
            <h3 className="text-2xl font-extrabold mb-4 relative z-10">
              Besoin d'une réponse urgente ?
            </h3>
            <p className="mb-8 text-white/90 text-lg max-w-2xl mx-auto relative z-10">
              Pour les demandes urgentes, appelez-nous directement ou envoyez un email
            </p>
            <div className="flex justify-center relative z-10">
              <Button 
                className="bg-red-600 text-white py-3 px-6 shadow-md flex items-center justify-center transition-all duration-300 hover:bg-red-700 hover:shadow-lg border-2 border-transparent hover:border-white"
                onClick={() => window.location.href = 'mailto:contact@sanmetal.com.tn'}
              >
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-bold">contact@sanmetal.com.tn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
