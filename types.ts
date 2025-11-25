export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialVideo {
  title: string;
  description: string;
  thumbnail?: string;
}

export interface OfferItem {
  title: string;
  description: string;
  features: string[];
  originalValue: number;
}