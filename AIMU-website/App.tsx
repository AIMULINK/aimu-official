import React, { useState, useEffect } from 'react';
import { 
  Map, 
  PenTool, 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X,
  ChevronRight,
  Landmark,
  Hammer,
  Key,
  ArrowRight
} from 'lucide-react';
import { Logo, FULL_COMPANY_NAME, CONTACT_INFO, SLOGAN_PRIMARY, SLOGAN_SECONDARY } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-aimu-orange text-xs font-bold tracking-widest transition-all uppercase">{link.name}</a>
            ))}
            <a href="#contact" className="bg-aimu-orange text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#ff806b] transition-all">Get Started</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white"><Menu /></button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black fixed inset-0 h-screen p-8 z-[60] flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 text-3xl font-bold">{link.name}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-aimu-orange text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest">Get Started</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center bg-black overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-60 animate-slow-zoom" 
        alt="Modern Home" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
      <div className="max-w-4xl space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-12 bg-aimu-orange"></div>
          <span className="text-aimu-orange font-bold tracking-[0.3em] uppercase text-xs">{FULL_COMPANY_NAME}</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-none">
          {SLOGAN_SECONDARY.split(' ')[0]} <br/> <span className="text-aimu-orange">{SLOGAN_SECONDARY.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">{SLOGAN_PRIMARY}</p>
        <div className="flex flex-col sm:flex-row gap-5 pt-4">
          <a href="#services" className="bg-aimu-orange text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#ff806b] transition-all flex items-center justify-center gap-3 shadow-xl shadow-aimu-orange/20">Our Services <ArrowRight size={18}/></a>
          <a href="#contact" className="border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center backdrop-blur-sm">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, icon, image }: any) => (
  <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-aimu-orange/40 hover:-translate-y-2">
    <div className="h-64 overflow-hidden relative">
      <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-80" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      <div className="absolute bottom-6 left-6 w-14 h-14 bg-aimu-orange flex items-center justify-center rounded-2xl text-white shadow-2xl transition-transform group-hover:scale-110">
        {icon}
      </div>
    </div>
    <div className="p-10">
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-aimu-orange transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">{description}</p>
      <div className="flex items-center gap-2 text-aimu-orange font-bold text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
        Learn More <ChevronRight size={14}/>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    { title: "Acquisition", description: "Direct land purchasing with professional valuation and streamlined processes for quick, fair transactions.", icon: <Landmark />, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
    { title: "Design & Permitting", description: "Seamlessly bridging architectural vision with municipal compliance to clear the path for development.", icon: <PenTool />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { title: "Construction", description: "Expert building teams focused on modern aesthetics, structural perfection, and timely delivery.", icon: <Hammer />, image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800" },
    { title: "Sales & Brokerage", description: "Connecting our high-end residential assets with qualified buyers through strategic marketing.", icon: <Key />, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
    { title: "Land Utilization", description: "Maximizing potential for underused parcels through smart analysis and creative development strategies.", icon: <Map />, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
  ];
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 space-y-4 max-w-2xl">
          <div className="h-0.5 w-12 bg-aimu-orange"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Full-Cycle <br/>Development</h2>
          <p className="text-gray-500 text-lg">From the first acre to the final key, we manage every step of the real estate journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-32 bg-[#050505] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/5">
        <div className="p-12 lg:p-20 bg-gradient-to-br from-aimu-orange/5 to-transparent">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">Partner with <br/> the Experts.</h2>
          <p className="text-gray-400 text-lg mb-12">Ready to discuss your land or project? Our executive team is standing by to provide expert consultation.</p>
          <div className="space-y-10">
            {[
              { icon: <Phone/>, label: "Call Us", val: CONTACT_INFO.phone },
              { icon: <Mail/>, label: "Email Us", val: CONTACT_INFO.email },
              { icon: <Globe/>, label: "Web", val: CONTACT_INFO.website }
            ].map((it, i) => (
              <div key={i} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-aimu-orange group-hover:bg-aimu-orange group-hover:text-white transition-all shadow-lg">{it.icon}</div>
                <div><p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{it.label}</p><p className="text-xl font-bold text-white group-hover:text-aimu-orange transition-colors">{it.val}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-12 lg:p-20">
          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange text-white transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange text-white transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Inquiry Type</label>
              <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange text-white transition-colors appearance-none">
                <option className="bg-black">Land Acquisition</option>
                <option className="bg-black">Design & Permitting</option>
                <option className="bg-black">Construction Inquiry</option>
                <option className="bg-black">Sales & Investment</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange text-white transition-colors" placeholder="Tell us about your land or project..." />
            </div>
            <button className="w-full bg-aimu-orange text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-[#ff806b] transition-all shadow-2xl shadow-aimu-orange/20 active:scale-[0.98]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Logo />
        <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">Leading the way in premium residential land development and utilization.</p>
      </div>
      <div className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-bold text-center">
        © {new Date().getFullYear()} AiMU. {SLOGAN_SECONDARY}
      </div>
      <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
        <a href="#" className="hover:text-aimu-orange transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-aimu-orange transition-colors">Terms of Use</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-aimu-orange selection:text-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}