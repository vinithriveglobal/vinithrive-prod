export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details?: string[];
  benefits?: string[];
  caseStudy?: {
    title: string;
    result: string;
  };
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PROCESS = 'process',
  SERVICES = 'services',
  FAQ = 'faq',
  CONTACT = 'contact'
}