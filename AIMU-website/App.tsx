
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Map, 
  PenTool, 
  TrendingUp, 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X,
  ChevronRight,
  Landmark,
  Hammer,
  Key,
  LayoutGrid,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Logo, FULL_COMPANY_NAME, CONTACT_INFO, SLOGAN_PRIMARY, SLOGAN_SECONDARY, COMPANY_NAME } from './constants';

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
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-aimu-orange text-sm font-semibold tracking-wide transition-all duration-300 uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-aimu-orange text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#ff806b] hover:shadow-[0_0_20px_rgba(242,107,82,0.4)] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-aimu-orange transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] absolute w-full top-full left-0 py-8 shadow-2xl border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-aimu-orange block px-4 py-3 text-xl font-bold transition-all border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-aimu-orange text-white py-4 rounded-xl font-bold uppercase tracking-widest mt-6"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
        alt="Premium Residential Home" 
        className="w-full h-full object-cover opacity-50 transition-transform duration-[10000ms] scale-110 animate-pulse-slow"
        style={{ animation: 'slowZoom 30s infinite alternate linear' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="h-[2px] w-12 bg-aimu-orange"></div>
          <span className="text-aimu-orange font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
            {FULL_COMPANY_NAME}
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-[1.05] animate-in fade-in slide-in-from-left-12 duration-1000">
          {SLOGAN_SECONDARY.split(' ')[0]} <span className="text-aimu-orange">{SLOGAN_SECONDARY.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light animate-in fade-in slide-in-from-left-16 duration-[1300ms]">
          {SLOGAN_PRIMARY}. We transform raw land into prestigious residential landscapes through visionary planning and expert construction.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <a href="#services" className="bg-aimu-orange text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#ff806b] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
            Our Services <ArrowRight size={20} />
          </a>
          <a href="#contact" className="backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-center transition-all duration-300">
            View Projects
          </a>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-12 right-12 z-10 hidden lg:block animate-in fade-in duration-1000 delay-1000">
      <div className="flex gap-8">
        <div className="text-right">
          <p className="text-aimu-orange font-bold text-4xl leading-none">01</p>
          <p className="text-white text-xs uppercase tracking-tighter mt-1 opacity-50">Discovery</p>
        </div>
        <div className="text-right">
          <p className="text-white/20 font-bold text-4xl leading-none">02</p>
          <p className="text-white text-xs uppercase tracking-tighter mt-1 opacity-20">Design</p>
        </div>
        <div className="text-right">
          <p className="text-white/20 font-bold text-4xl leading-none">03</p>
          <p className="text-white text-xs uppercase tracking-tighter mt-1 opacity-20">Result</p>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes slowZoom {
        from { transform: scale(1); }
        to { transform: scale(1.15); }
      }
    `}</style>
  </section>
);

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  image: string;
  index: number;
}> = ({ title, description, icon, image, index }) => {
  return (
    <div className="group relative bg-[#111] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:border-aimu-orange/50 hover:-translate-y-3">
      <div className="absolute top-6 right-6 z-20 text-white/10 font-display font-black text-6xl group-hover:text-aimu-orange/20 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-125 brightness-75 grayscale-[0.3] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-6 left-6 p-4 bg-aimu-orange/90 backdrop-blur-sm rounded-2xl text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <div className="p-8 relative">
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-aimu-orange transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-8 text-sm group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        <div className="flex items-center gap-2 text-aimu-orange font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
          Inquire Detail <ChevronRight size={14} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

const PhilosophySection = () => (
  <section id="philosophy" className="py-32 bg-[#080808] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Residential Architecture" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-aimu-orange/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 bg-[#111] border border-white/10 p-12 rounded-[2.5rem] shadow-2xl hidden md:block">
            <div className="flex flex-col items-center">
              <span className="text-aimu-orange text-6xl font-black mb-2">100%</span>
              <span className="text-gray-400 text-xs uppercase tracking-widest font-bold text-center">Residential<br/>Dedication</span>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-12 bg-aimu-orange"></div>
            <span className="text-aimu-orange font-bold tracking-[0.2em] uppercase text-xs">The AiMU Philosophy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">Crafting Spaces for <br/><span className="italic text-aimu-orange">Modern Living.</span></h2>
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-aimu-orange/10 border border-aimu-orange/20 rounded-2xl flex items-center justify-center text-aimu-orange">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold text-white">Ethical Growth</h4>
              <p className="text-gray-500 text-sm">Transparent acquisition and community-focused planning at every stage.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-aimu-orange/10 border border-aimu-orange/20 rounded-2xl flex items-center justify-center text-aimu-orange">
                <LayoutGrid size={28} />
              </div>
              <h4 className="text-xl font-bold text-white">Superior Design</h4>
              <p className="text-gray-500 text-sm">Collaborating with elite architects to redefine suburban residential aesthetics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Acquisition",
      description: "Direct land purchasing with fair market valuation. We simplify the selling process for landowners looking for reliable institutional partners.",
      icon: <Landmark size={24} />,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Utilization Strategy",
      description: "Maximizing land value through expert analysis. We determine the most effective residential development model for every unique site.",
      icon: <Map size={24} />,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Design & Permitting",
      description: "End-to-end architectural planning and rigorous municipal permitting. We handle the complexity of local regulations seamlessly.",
      icon: <PenTool size={24} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Construction",
      description: "Crafting high-quality residential homes. From foundation to finishes, our construction team delivers excellence in every home.",
      icon: <Hammer size={24} />,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Brokerage & Sales",
      description: "Full-service real estate marketing and sales. We connect our finished residential products with the perfect future owners.",
      icon: <Key size={24} />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-aimu-orange"></div>
              <span className="text-aimu-orange font-bold tracking-[0.2em] uppercase text-xs">Our Core Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">End-to-End <br/>Residential Solutions</h2>
          </div>
          <p className="text-gray-400 max-w-sm mb-2 text-lg font-light leading-relaxed">
            Five distinct pillars of land development, working in perfect harmony to deliver superior residential assets.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => <ServiceCard key={idx} index={idx} {...s} />)}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-aimu-orange/5 blur-[120px] rounded-full translate-y-1/2"></div>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-gradient-to-br from-aimu-orange/20 to-transparent">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Start Your <br/><span className="text-aimu-orange">Legacy</span> with Us</h2>
            <p className="text-gray-400 text-lg mb-12 font-light">
              Contact our development team today for a confidential consultation regarding land acquisition or project partnership.
            </p>
            
            <div className="space-y-10">
              {[
                { icon: <Phone />, label: "Direct Line", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { icon: <Mail />, label: "Email Inquiry", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: <Globe />, label: "Global Access", value: CONTACT_INFO.website, href: `https://${CONTACT_INFO.website}` }
              ].map((item, idx) => (
                <a key={idx} href={item.href} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-aimu-orange group-hover:bg-aimu-orange group-hover:text-white transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-aimu-orange transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="p-12 lg:p-20 bg-[#0c0c0c]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-aimu-orange transition-colors">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange transition-all text-xl font-light placeholder:text-gray-800" placeholder="Enter your full name" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-aimu-orange transition-colors">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange transition-all text-xl font-light placeholder:text-gray-800" placeholder="name@company.com" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-aimu-orange transition-colors">Interested Service</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange transition-all text-xl font-light text-gray-400 appearance-none cursor-pointer">
                    <option className="bg-black">Land Acquisition</option>
                    <option className="bg-black">Design & Strategy</option>
                    <option className="bg-black">Residential Construction</option>
                    <option className="bg-black">Buying a Home</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-aimu-orange transition-colors">Brief Message</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-aimu-orange transition-all text-xl font-light placeholder:text-gray-800 resize-none" placeholder="How can we help you?"></textarea>
                </div>
              </div>
              <button type="submit" className="w-full bg-aimu-orange hover:bg-[#ff806b] text-white font-bold uppercase tracking-[0.2em] py-6 rounded-2xl transition-all shadow-[0_20px_40px_rgba(242,107,82,0.3)] hover:shadow-[0_25px_50px_rgba(242,107,82,0.4)] hover:-translate-y-1">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white pt-32 pb-16 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="grid md:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Logo className="mb-8" />
          <p className="text-gray-500 text-lg max-w-md font-light leading-relaxed">
            Redefining the residential landscape through superior asset management and visionary land development strategies.
          </p>
          <div className="flex gap-4 mt-10">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-aimu-orange hover:text-aimu-orange transition-all cursor-pointer">
                 <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
               </div>
             ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-aimu-orange">Company</h4>
          <ul className="space-y-5 text-gray-500 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">About AiMU</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Expertise</a></li>
            <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-aimu-orange">Regional</h4>
          <ul className="space-y-5 text-gray-500 font-medium">
            <li className="flex items-start gap-3">
              <Map size={18} className="mt-1 flex-shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0" />
              {CONTACT_INFO.phone}
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. REDEFINING THE RESIDENTIAL FUTURE.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-aimu-orange transition-colors">Privacy</a>
          <a href="#" className="hover:text-aimu-orange transition-colors">Terms</a>
          <a href="#" className="hover:text-aimu-orange transition-colors">Licensing</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PhilosophySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
