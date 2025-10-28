import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-2 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get In Touch With Us,
                <br /><span className="bg-gradient-to-r from-white/90 to-cyan-200 bg-clip-text text-transparent">We Answer You</span>
              </h2>
              <p className="text-xl text-blue-100">
                Ready to transform your business with cutting-edge technology solutions? Let's discuss how we can help you succeed.
              </p>
              <div className="space-y-4 pt-8">
                <a href="tel:+1234567890" className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@exaltsystem.com" className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>info@exaltsystem.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                rows="5"
                placeholder="Type Your Message Here..."
                className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              ></textarea>
              <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white transition-all hover:shadow-2xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;