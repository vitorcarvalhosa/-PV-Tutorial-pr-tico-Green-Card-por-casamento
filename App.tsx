import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ComparisonTable } from './components/ComparisonTable';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { OfferStack } from './components/OfferStack';
import { Pricing } from './components/Pricing';
import { Bio } from './components/Bio';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      <Hero />
      <ProblemSolution />
      <ComparisonTable />
      <Steps />
      <Testimonials />
      <OfferStack />
      <Pricing />
      <Bio />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;