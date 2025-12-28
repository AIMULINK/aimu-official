import React from 'react';

export const COMPANY_NAME = "AiMU";
export const FULL_COMPANY_NAME = "Asset Investment Management U Link";
export const SLOGAN_PRIMARY = "Maximizing land potential through visionary development";
export const SLOGAN_SECONDARY = "Redefining the Residential Future.";

export const CONTACT_INFO = {
  phone: "206-324-8845",
  email: "info@aimulink.com",
  website: "www.aimulink.com",
  address: "Premium Residential District, Seattle, WA"
};

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-1 group cursor-pointer ${className}`}>
    <span className="font-display text-2xl font-black tracking-tighter text-white transition-colors group-hover:text-aimu-orange">Ai</span>
    <div className="relative">
      <span className="font-display text-2xl font-black tracking-tighter text-white transition-colors group-hover:text-aimu-orange">M</span>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:scale-125">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#f26b52" strokeWidth="2.5"/>
            <circle cx="12" cy="12" r="5" stroke="#f26b52" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="2" fill="#f26b52"/>
            <path d="M15 9L21 3" stroke="#f26b52" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
    <span className="font-display text-2xl font-black tracking-tighter text-white transition-colors group-hover:text-aimu-orange">U</span>
  </div>
);