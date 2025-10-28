import { Code, Database, Users, BarChart3, Brain, Briefcase } from 'lucide-react';

export const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "MERN Stack Development",
    description: "Full-stack web applications using MongoDB, Express.js, React, and Node.js with scalable architecture and modern best practices.",
    page: "mern"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Odoo Implementation",
    description: "Custom Odoo ERP solutions to streamline your business operations with tailored modules and seamless integration.",
    page: "odoo"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Salesforce Solutions",
    description: "Expert Salesforce consulting, customization, and integration to optimize your CRM and enhance customer relationships.",
    page: "salesforce"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Advanced data analytics and visualization solutions to transform your business data into actionable insights.",
    page: "analytics"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & ML",
    description: "Cutting-edge artificial intelligence and machine learning solutions to drive innovation and competitive advantage.",
    page: "ai"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "US Staffing",
    description: "Expert recruitment and staffing solutions to build high-performing teams tailored to your business needs.",
    page: "staffing"
  }
];