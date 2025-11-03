import { Code, Database, Server, Settings, BarChart3, ArrowRight, Users, ShoppingCart, FileText, Truck, Calendar, DollarSign } from 'lucide-react';

const OdooPage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Odoo ERP
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Implementation Services
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Transform your business operations with comprehensive Odoo ERP solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* What is Odoo Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
              <h2 className="text-4xl font-bold mb-6">
                What is <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Odoo?</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                Odoo is a comprehensive suite of open-source business applications that covers all your company needs: CRM, eCommerce, accounting, inventory, point of sale, project management, and more.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                With its modular approach, you can start with what you need and add more apps as your business grows, making it perfect for companies of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Sales & CRM', icon: <Users className="w-12 h-12" />, color: 'from-blue-500 to-cyan-600', desc: 'Customer Management' },
                { name: 'Accounting', icon: <DollarSign className="w-12 h-12" />, color: 'from-green-600 to-emerald-800', desc: 'Financial Management' },
                { name: 'Inventory', icon: <Database className="w-12 h-12" />, color: 'from-blue-500 to-cyan-500', desc: 'Stock Management' },
                { name: 'Manufacturing', icon: <Settings className="w-12 h-12" />, color: 'from-orange-600 to-red-800', desc: 'Production Planning' }
              ].map((module, i) => (
                <div
                  key={i}
                  className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Odoo Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Odoo?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Powerful benefits that make Odoo the preferred choice for business management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'All-in-One Solution',
                description: 'Integrate all business operations in one platform - from CRM and sales to inventory and accounting. No more juggling between multiple software solutions.',
                icon: <Database className="w-8 h-8" />
              },
              {
                title: 'Highly Customizable',
                description: 'Tailor Odoo to your exact business needs with custom modules, workflows, and integrations. Build features specific to your industry and processes.',
                icon: <Code className="w-8 h-8" />
              },
              {
                title: 'Cost-Effective',
                description: 'Open-source foundation means lower licensing costs. Pay only for what you use with flexible pricing models that scale with your business.',
                icon: <DollarSign className="w-8 h-8" />
              },
              {
                title: 'User-Friendly Interface',
                description: 'Intuitive design ensures quick adoption by your team. Modern, responsive interface works seamlessly across desktop and mobile devices.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Scalable & Flexible',
                description: 'Start small and grow without limits. Add modules as needed, from 1 to 1000+ users. Perfect for startups to large enterprises.',
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: 'Active Community',
                description: 'Benefit from thousands of ready-made apps and modules. Large global community provides continuous improvements and support.',
                icon: <Server className="w-8 h-8" />
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo Modules Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Odoo <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Implementation Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Comprehensive Odoo solutions covering all aspects of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sales & CRM',
                description: 'Streamline your sales pipeline, manage customer relationships, and automate quotations and invoicing for improved efficiency.',
                features: ['Lead Management', 'Opportunity Tracking', 'Sales Automation', 'Customer Portal'],
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Inventory & Warehouse',
                description: 'Complete inventory control with real-time tracking, automated replenishment, and multi-warehouse management.',
                features: ['Stock Management', 'Barcode Scanning', 'Warehouse Operations', 'Inventory Valuation'],
                icon: <Database className="w-8 h-8" />
              },
              {
                title: 'Accounting & Finance',
                description: 'Automated accounting processes, financial reporting, and multi-currency support for complete financial control.',
                features: ['General Ledger', 'Invoicing', 'Bank Reconciliation', 'Financial Reports'],
                icon: <DollarSign className="w-8 h-8" />
              },
              {
                title: 'Manufacturing',
                description: 'Plan, schedule, and track your production processes with bill of materials, work orders, and quality control.',
                features: ['MRP', 'Work Orders', 'Quality Control', 'Maintenance'],
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: 'eCommerce & Website',
                description: 'Build beautiful online stores integrated with your backend operations for seamless order fulfillment.',
                features: ['Product Catalog', 'Payment Gateway', 'Order Management', 'SEO Tools'],
                icon: <ShoppingCart className="w-8 h-8" />
              },
              {
                title: 'HR & Payroll',
                description: 'Manage your workforce with employee records, attendance tracking, leave management, and payroll processing.',
                features: ['Employee Database', 'Attendance', 'Leave Management', 'Payroll'],
                icon: <FileText className="w-8 h-8" />
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                      <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Implementation <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A proven methodology to ensure successful Odoo deployment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Analyze business processes and requirements' },
              { step: '02', title: 'Design', desc: 'Create customized solution architecture' },
              { step: '03', title: 'Development', desc: 'Build and configure Odoo modules' },
              { step: '04', title: 'Testing', desc: 'Rigorous testing and quality assurance' },
              { step: '05', title: 'Go-Live & Support', desc: 'Deployment and ongoing maintenance' }
            ].map((process, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industries <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Tailored Odoo solutions for diverse business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Manufacturing', icon: <Settings className="w-8 h-8" /> },
              { name: 'Retail & eCommerce', icon: <ShoppingCart className="w-8 h-8" /> },
              { name: 'Healthcare', icon: <FileText className="w-8 h-8" /> },
              { name: 'Construction', icon: <Server className="w-8 h-8" /> },
              { name: 'Food & Beverage', icon: <Truck className="w-8 h-8" /> },
              { name: 'Education', icon: <Calendar className="w-8 h-8" /> },
              { name: 'Professional Services', icon: <Users className="w-8 h-8" /> },
              { name: 'Logistics', icon: <Truck className="w-8 h-8" /> }
            ].map((industry, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-4 mx-auto`}>
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business with Odoo?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your business needs and implement a customized Odoo solution that drives efficiency and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigateToPage('contact')}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigateToPage('home')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooPage;