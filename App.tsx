import React, { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';

// Code Splitting: Lazy load components that are not in the initial viewport
const ProblemSolution = lazy(() => import('./components/ProblemSolution').then(module => ({ default: module.ProblemSolution })));
const ComparisonTable = lazy(() => import('./components/ComparisonTable').then(module => ({ default: module.ComparisonTable })));
const Steps = lazy(() => import('./components/Steps').then(module => ({ default: module.Steps })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const OfferStack = lazy(() => import('./components/OfferStack').then(module => ({ default: module.OfferStack })));
const Pricing = lazy(() => import('./components/Pricing').then(module => ({ default: module.Pricing })));
const Bio = lazy(() => import('./components/Bio').then(module => ({ default: module.Bio })));
const Faq = lazy(() => import('./components/Faq').then(module => ({ default: module.Faq })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Simple loading placeholder
const SectionLoader = () => (
  <div className="w-full py-20 flex justify-center items-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-rose-200 border-t-rose-800 rounded-full animate-spin"></div>
  </div>
);

function App() {
  // CLEAN VERSION: Removed GTM and Pixel scripts to optimize TBT and FCP.
  // This ensures the main thread is not blocked by third-party tracking during load.

  return (
    <div className="min-h-screen bg-slate-50 font-montserrat text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      {/* Eager loaded - Critical Path */}
      <Hero />
      
      {/* Lazy loaded - Below the fold */}
      <Suspense fallback={<SectionLoader />}>
        <ProblemSolution />
        <ComparisonTable />
        <Steps />
        <Testimonials />
        <OfferStack />
        <Pricing />
        <Bio />
        <Faq />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;