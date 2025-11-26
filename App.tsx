import React, { Suspense, lazy, useEffect } from 'react';
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
  // PERFORMANCE: Delayed Loading of Third-Party Scripts (Pixel & GTM)
  useEffect(() => {
    const loadScripts = () => {
      // 1. Google Tag Manager
      (function(w: any, d: any, s: any, l: any, i: any){
        w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s) as HTMLScriptElement, dl=l!='dataLayer'?'&l='+l:'';
        j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TFN54PKD');

      // 2. Meta Pixel
      (function(f: any,b: any,e: any,v: any,n?: any,t?: any,s?: any){
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      
      // Initialize Pixel
      // @ts-ignore
      if (window.fbq) {
        // @ts-ignore
        window.fbq('init', '749395778096315');
        // @ts-ignore
        window.fbq('track', 'PageView');
      }
    };

    // Delay scripts by 4 seconds to allow LCP/FCP to settle
    const timer = setTimeout(loadScripts, 4000);

    return () => clearTimeout(timer);
  }, []);

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