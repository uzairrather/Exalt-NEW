const Testimonials = ({ isDarkMode }) => {
  const testimonials = [
    {
      quote: "ExaltSystem turned our digital presence around. From 0 to 5x leads in 90 days.",
      name: "Ravi Kumar",
      role: "Real Estate Entrepreneur",
      avatar: "RK"
    },
    {
      quote: "They just get it. Fast, creative, and always on point.",
      name: "Dr. Swetha",
      role: "Healthcare Business Owner",
      avatar: "DS"
    },
    {
      quote: "Working with ExaltSystem was a game-changer for our online store. Their comprehensive approach helped us scale from startup to market leader.",
      name: "Priya Sharma",
      role: "E-commerce Founder",
      avatar: "PS"
    }
  ];

  const stats = [
    { number: "100+", label: "5-Star Reviews" },
    { number: "50+", label: "Success Stories" },
    { number: "2x", label: "Faster Results" },
    { number: "24/7", label: "Dedicated Support" }
  ];

  return (
    <section id="testimonials" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Success <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Don't just take our word for it. Here's what our clients say about the results we've delivered together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border hover:scale-105 transition-all hover-lift cursor-pointer`}
            >
              <div className="text-pink-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} italic mb-6`}>"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;