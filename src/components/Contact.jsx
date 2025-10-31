import { useState } from 'react';
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: true, message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ loading: false, success: false, error: true, message: 'Please enter a valid email' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ loading: false, success: false, error: true, message: 'Please enter a message' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ loading: false, success: false, error: false, message: '' });
    
    if (!validateForm()) {
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: 'Sending...' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are missing. Please contact support.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'GoExalt System',
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully! We\'ll get back to you soon.'
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      }
    } catch (error) {
      let errorMessage = 'Failed to send message. ';
      
      if (error.message && error.message.includes('missing')) {
        errorMessage = 'Service configuration error. Please contact support.';
      } else if (error.text) {
        errorMessage += 'Please try again later or contact us directly.';
      } else {
        errorMessage += 'Please check your connection and try again.';
      }
      
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: errorMessage
      });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 8000);
    }
  };

  const handleEmailClick = () => {
  window.location.href = 'mailto:info@exaltsystem.com';
};

  return (
    <section id="contact" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Get In Touch With Us,
                <br />
                <span className="bg-gradient-to-r from-white/90 to-cyan-200 bg-clip-text text-transparent">
                  We Answer You
                </span>
              </h2>
              <p className="text-xl text-blue-100">
                Ready to transform your business with cutting-edge technology solutions? Let&apos;s discuss how we can help you succeed.
              </p>
              <div className="space-y-4 pt-8">
                <a 
                  href="tel:+16674520819" 
                  className="flex items-center gap-4 text-lg text-white hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+1 (667) 452-0819</span>
                </a>
                <a 
  href="mailto:info@exaltsystem.com"
  onClick={handleEmailClick}
  className="flex items-center gap-4 text-lg text-white hover:translate-x-2 transition-transform cursor-pointer"
>
  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
    <Mail className="w-6 h-6" />
  </div>
  <span>info@exaltsystem.com</span>
</a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  disabled={status.loading}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  disabled={status.loading}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type Your Message Here..."
                  className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all"
                  disabled={status.loading}
                ></textarea>
                
                <button 
                  type="submit"
                  disabled={status.loading}
                  className={`w-full py-4 bg-white text-blue-600 rounded-xl font-bold transition-all hover:shadow-2xl flex items-center justify-center gap-2 ${
                    status.loading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white'
                  }`}
                >
                  {status.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Started
                    </>
                  )}
                </button>

                {status.success && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-white backdrop-blur-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                {status.error && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-white backdrop-blur-lg">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;