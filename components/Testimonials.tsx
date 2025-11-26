import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { Play } from 'lucide-react';

interface LazyVideoCardProps {
    src: string;
    title: string;
    quote: string;
}

// Internal component to handle lazy-video interaction (Facade pattern for MP4)
const LazyVideoCard: React.FC<LazyVideoCardProps> = ({ src, title, quote }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-rose-500/50 transition-colors group flex flex-col h-full">
            <div className="aspect-[9/16] bg-black relative">
                <video 
                    ref={videoRef}
                    preload="metadata" // Need metadata for the #t=0.1 thumbnail to work
                    className="w-full h-full object-cover"
                    controls={isPlaying}
                    playsInline
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                >
                    <source src={`${src}#t=0.1`} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>

                {/* Custom Play Button Overlay - Disappears when playing */}
                {!isPlaying && (
                    <button 
                        onClick={handlePlay}
                        className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors z-10 cursor-pointer"
                        aria-label={`Reproduzir depoimento: ${title}`}
                    >
                        <div className="w-16 h-16 bg-rose-600/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </button>
                )}
            </div>
            <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-lg text-rose-400 mb-2 leading-tight">{title}</h3>
                <p className="text-sm text-slate-300">{quote}</p>
            </div>
        </div>
    );
};

export const Testimonials: React.FC = () => {
  const handleWhatsapp = () => {
    window.open('https://wa.me/15106305617?text=Quero%20tirar%20duvida%20sobre%20o%20green%20card%20por%20casamento', '_blank');
  };

  const feedbackImages = [
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Feedback-1.jpg",
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Feedback-2.jpg",
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Feedback-3.jpg",
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Feedback-4.jpg",
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Feedbacks-5.jpg",
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/Feedback-6.png",
    "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/IMG_7725.jpg"
  ];

  const videos = [
      {
          src: "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/video-1-1762345389562.mp4",
          title: "“Green Card aprovado em 4 meses”",
          quote: "Se não fosse pela Gleice, provavelmente ela não teria conseguido tão rápido."
      },
      {
          src: "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/video-1-1762345400912.mp4",
          title: "“A Gleice me deu muita clareza e tranquilidade”",
          quote: "O juridiquês é muito difícil, mas a Gleice faz questão de simplificar tudo pra gente."
      },
      {
          src: "https://autovmd-wordpress.7uu36r.easypanel.host/wp-content/uploads/2025/11/video-1-1762345408958.mp4",
          title: "“Agora posso dizer que sou uma residente permanente”",
          quote: "Graças a Gleice esse sonho se realizou e foi muito importante ela estar do meu lado."
      }
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Quem seguiu o passo a passo… <span className="text-rose-400">conseguiu</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400">Mensagens reais de quem aplicou para o Green Card com o nosso método.</p>
        </div>

        {/* Whatsapp Prints Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 mb-12 md:mb-20">
            {feedbackImages.map((img, idx) => (
                <div 
                    key={idx} 
                    className={`relative rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-slate-800 bg-slate-800 ${
                        idx < 3 ? 'md:col-span-4' : 'md:col-span-3'
                    }`}
                >
                    <img 
                        src={img} 
                        alt={`Depoimento de aprovação Green Card - Caso ${idx + 1}`}
                        title={`Resultado real Green Card Simplificado ${idx + 1}`}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                        width="400"
                        height="600"
                    />
                </div>
            ))}
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-8 mb-10 md:mb-12">
            {videos.map((video, idx) => (
                <LazyVideoCard 
                    key={idx}
                    src={video.src}
                    title={video.title}
                    quote={video.quote}
                />
            ))}
        </div>

        <div className="flex justify-center">
            <Button 
                variant="outline" 
                onClick={handleWhatsapp}
                className="text-lg md:text-xl px-6 py-4 md:px-10 md:py-4 w-full md:w-auto border-emerald-400 text-emerald-400 hover:bg-emerald-900/20 hover:text-emerald-300 hover:border-emerald-300"
            >
                Quero tirar dúvida pelo whatsapp
            </Button>
        </div>

      </div>
    </section>
  );
};