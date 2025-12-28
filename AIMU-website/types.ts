
// Import React to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  address?: string;
}
