import { useState, useEffect, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';
import { HeroSlide } from '../types';

interface HeroSliderProps {
  onSlideAction?: (action: HeroSlide['buttonAction']) => void;
  onOpenDevis?: (type?: 'auto' | 'habitation' | 'sante' | 'pro') => void;
  onOpenAppointment?: () => void;
}

export default function HeroSlider({ 
  onSlideAction, 
  onOpenDevis, 
  onOpenAppointment 
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto rotate slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      goToNext();
    } else if (distance < -50) {
      goToPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="accueil"
      className="relative w-full overflow-hidden bg-slate-50 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Container with fixed minimum height for layout stability */}
      <div className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[640px] w-full flex items-center">
        {/* Background Image Layer with Crossfade */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Photo on Right / Full Cover with Overlay */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center lg:object-right"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Mask: Solid White on Left for Text, Angled fade towards Right */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:w-[62%] pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                }}
              />
              
              {/* Mobile overlay for maximum text legibility */}
              <div className="absolute inset-0 bg-white/85 sm:bg-white/75 lg:hidden pointer-events-none" />
            </div>
          );
        })}

        {/* AXA WATERMARK GRID PATTERN on the left side */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-full lg:w-[50%] z-10 pointer-events-none overflow-hidden opacity-[0.08] leading-none select-none font-black text-3xl tracking-widest text-[#0F2B5C]"
          aria-hidden="true"
        >
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-12 gap-x-8 p-6 transform -rotate-1 origin-top-left">
            {Array.from({ length: 48 }).map((_, i) => (
              <span key={i} className="font-extrabold tracking-widest">AXA</span>
            ))}
          </div>
        </div>

        {/* FLOATING AE LOGO EMBLEM (100% DESIGN COMME DANS LA PHOTO DU HEADER/HERO) */}
        <div 
          className="hidden md:flex absolute left-[44%] lg:left-[45%] xl:left-[46%] bottom-0 z-20 pointer-events-none w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] select-none items-end justify-center"
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full overflow-visible">
            {/* Letters A & E in Slate-Steel Blue */}
            <g fill="#68829E" fillOpacity="0.75">
              {/* E - Top Bar with rounded stadium cap */}
              <path d="M 54.5,23.5 L 85,23.5 A 6.75 6.75 0 0 1 85,37 L 58.2,37 Z" />

              {/* E - Middle Bar with rounded stadium cap */}
              <path d="M 59.8,43.5 L 81,43.5 A 6.75 6.75 0 0 1 81,57 L 63.5,57 Z" />

              {/* E - Bottom Bar with rounded stadium cap */}
              <path d="M 65.2,63.5 L 85,63.5 A 6.75 6.75 0 0 1 85,77 L 69,77 Z" />

              {/* A - Body with rounded top-left apex and inner counter */}
              <path
                d="M 11,77 L 22.5,77 L 27.8,57 L 53,57 L 43.5,21 L 34,21 C 23.5,21 20,25.5 18,35 L 11,77 Z M 31.5,43.5 L 49.3,43.5 L 45.3,28.5 L 36.5,28.5 Z"
                fillRule="evenodd"
              />
            </g>

            {/* AXA Red dynamic diagonal slash slicing through from top to bottom edge */}
            <path 
              d="M 40,6 L 51.5,6 L 74,96 L 62.5,96 Z" 
              fill="#E11D2A" 
              fillOpacity="0.88" 
            />
          </svg>
        </div>


        {/* SLIDE CONTENT AREA (Left aligned, high contrast, clean) */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl lg:max-w-xl">
            {/* Optional Small Badge */}
            {activeSlide.badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0072F5] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100/70 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{activeSlide.badge}</span>
              </div>
            )}

            {/* Slide Heading */}
            <h1 
              key={`title-${activeSlide.id}`} 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4 sm:mb-5 animate-fadeIn"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {activeSlide.title}
            </h1>

            {/* Slide Subtitle */}
            <p 
              key={`desc-${activeSlide.id}`} 
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 sm:mb-9 max-w-lg animate-fadeIn"
            >
              {activeSlide.subtitle}
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  if (activeSlide.buttonAction === 'devis-auto' && onOpenDevis) {
                    onOpenDevis('auto');
                  } else if (activeSlide.buttonAction === 'devis-habitation' && onOpenDevis) {
                    onOpenDevis('habitation');
                  } else if (activeSlide.buttonAction === 'rendez-vous' && onOpenAppointment) {
                    onOpenAppointment();
                  } else if (onSlideAction) {
                    onSlideAction(activeSlide.buttonAction);
                  }
                }}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-lg bg-[#0072F5] hover:bg-[#005EC4] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>{activeSlide.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Quick Contact Button */}
              <a
                href="tel:+212525363061"
                className="inline-flex items-center gap-2 px-5 py-3.5 sm:py-4 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-[#0F2B5C] font-semibold text-sm border border-slate-200 shadow-xs hover:shadow-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#0072F5]" />
                <span className="hidden sm:inline">05 25 36 30 61</span>
                <span className="sm:hidden">Appeler</span>
              </a>
            </div>
          </div>
        </div>

        {/* PREV / NEXT ARROWS (Desktop) */}
        <button
          onClick={goToPrev}
          aria-label="Slide précédent"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#0072F5] items-center justify-center shadow-md border border-slate-200/60 transition-all hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          aria-label="Slide suivant"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#0072F5] items-center justify-center shadow-md border border-slate-200/60 transition-all hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* PAGINATION DOTS & PILL AT BOTTOM (Centered under the emblem as in reference) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive 
                    ? 'w-7 h-2.5 bg-[#0072F5]' 
                    : 'w-2.5 h-2.5 bg-[#B5CDE6] hover:bg-[#8CAFD6]'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
