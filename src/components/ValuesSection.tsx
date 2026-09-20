export default function ValuesSection() {
  return (
    <section id="valeurs" className="relative w-full py-10 sm:py-16 bg-white overflow-hidden border-b border-slate-100">
      
      {/* Background Overlapping Elliptical Loops (Clearly visible and crisp like screenshot) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" 
        aria-hidden="true"
      >
        {/* Top-Left Overlapping Organic Loops (Smaller, more subtle motif) */}
        <svg 
          className="absolute -top-6 -left-6 w-[240px] h-[220px] sm:w-[320px] sm:h-[290px] opacity-80"
          viewBox="0 0 600 550" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Loop 1: Inner ellipse */}
          <ellipse 
            cx="110" 
            cy="110" 
            rx="130" 
            ry="190" 
            transform="rotate(-24 110 110)" 
            stroke="#94A3B8" 
            strokeWidth="1.8" 
          />
          {/* Loop 2: Mid ellipse */}
          <ellipse 
            cx="100" 
            cy="130" 
            rx="180" 
            ry="250" 
            transform="rotate(-18 100 130)" 
            stroke="#94A3B8" 
            strokeWidth="1.8" 
          />
          {/* Loop 3: Outer sweeping curve */}
          <ellipse 
            cx="120" 
            cy="140" 
            rx="240" 
            ry="320" 
            transform="rotate(-14 120 140)" 
            stroke="#94A3B8" 
            strokeWidth="1.8" 
          />
          {/* Loop 4: Wide outer arc */}
          <ellipse 
            cx="140" 
            cy="150" 
            rx="310" 
            ry="400" 
            transform="rotate(-10 140 150)" 
            stroke="#94A3B8" 
            strokeWidth="1.6" 
          />
        </svg>

        {/* Bottom-Right Overlapping Organic Loops (Smaller, more subtle motif) */}
        <svg 
          className="absolute -bottom-6 -right-6 w-[250px] h-[230px] sm:w-[330px] sm:h-[300px] opacity-80" 
          viewBox="0 0 650 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Loop 1: Inner bottom-right ellipse */}
          <ellipse 
            cx="520" 
            cy="470" 
            rx="140" 
            ry="200" 
            transform="rotate(-22 520 470)" 
            stroke="#94A3B8" 
            strokeWidth="1.8" 
          />
          {/* Loop 2: Mid bottom-right ellipse */}
          <ellipse 
            cx="490" 
            cy="440" 
            rx="200" 
            ry="270" 
            transform="rotate(-18 490 440)" 
            stroke="#94A3B8" 
            strokeWidth="1.8" 
          />
          {/* Loop 3: Outer sweeping curve */}
          <ellipse 
            cx="460" 
            cy="410" 
            rx="270" 
            ry="350" 
            transform="rotate(-14 460 410)" 
            stroke="#94A3B8" 
            strokeWidth="1.8" 
          />
          {/* Loop 4: Wide loop */}
          <ellipse 
            cx="430" 
            cy="380" 
            rx="350" 
            ry="430" 
            transform="rotate(-10 430 380)" 
            stroke="#94A3B8" 
            strokeWidth="1.6" 
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Centered Red Bar (Refined & smaller) */}
        <div className="w-9 sm:w-11 h-0.5 sm:h-1 bg-[#E11D2A] rounded-full mx-auto mb-3.5 sm:mb-4" />

        {/* Section Heading with Serif Font */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 
            className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1E314B] tracking-tight mb-3.5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Missions <span className="font-serif italic font-normal text-[#2A3F5E]">&</span> valeurs
          </h2>
          
          <p className="text-[14px] sm:text-[15.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            La mission d'AXA Maroc est d'aider ses clients à vivre avec plus de confiance en les protégeant face aux imprévus
            <br className="hidden sm:inline" /> du quotidien et aux risques de demain.{' '}
            <strong className="text-slate-800 font-bold">
              Ses valeurs reposent notamment sur :
            </strong>
          </p>
        </div>

        {/* 5 Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4.5 mb-10 sm:mb-12">
          
          {/* Card 1: La proximité et l'écoute des clients */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[195px] sm:min-h-[210px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              {/* Car front-view wireframe icon */}
              <svg 
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-[#1E314B]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 11l1.5-5.2A2 2 0 0 1 8.4 4.5h7.2a2 2 0 0 1 1.9 1.3L19 11" />
                <rect x="3" y="11" width="18" height="7" rx="2" />
                <circle cx="7" cy="14.5" r="1.2" />
                <circle cx="17" cy="14.5" r="1.2" />
                <path d="M5 18v2M19 18v2" />
              </svg>
            </div>
            <div className="mt-auto pt-4">
              <h3 
                className="font-bold text-[16px] sm:text-[17.5px] text-[#1E314B] leading-snug tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                La proximité et<br />l’écoute des clients
              </h3>
            </div>
          </div>

          {/* Card 2: L'innovation au service de l'utilisateur */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[195px] sm:min-h-[210px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              {/* Storefront awning wireframe icon */}
              <svg 
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-[#1E314B]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 9l1.2-5h15.6l1.2 5" />
                <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V12" />
                <path d="M9 20v-5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V20" />
              </svg>
            </div>
            <div className="mt-auto pt-4">
              <h3 
                className="font-bold text-[16px] sm:text-[17.5px] text-[#1E314B] leading-snug tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                L’innovation au<br />service de<br />l’utilisateur
              </h3>
            </div>
          </div>

          {/* Card 3: La transparence et la confiance */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[195px] sm:min-h-[210px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              {/* Shield wireframe icon */}
              <svg 
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-[#1E314B]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="mt-auto pt-4">
              <h3 
                className="font-bold text-[16px] sm:text-[17.5px] text-[#1E314B] leading-snug tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                La transparence et<br />la confiance
              </h3>
            </div>
          </div>

          {/* Card 4: L'excellence opérationnelle */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[195px] sm:min-h-[210px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              {/* Gear / cog wireframe icon */}
              <svg 
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-[#1E314B]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div className="mt-auto pt-4">
              <h3 
                className="font-bold text-[16px] sm:text-[17.5px] text-[#1E314B] leading-snug tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                L’excellence<br />opérationnelle
              </h3>
            </div>
          </div>

          {/* Card 5: L'engagement humain et sociétal */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[195px] sm:min-h-[210px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              {/* Flag wireframe icon */}
              <svg 
                className="w-7 h-7 sm:w-7.5 sm:h-7.5 text-[#1E314B]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <div className="mt-auto pt-4">
              <h3 
                className="font-bold text-[16px] sm:text-[17.5px] text-[#1E314B] leading-snug tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                L’engagement<br />humain et sociétal
              </h3>
            </div>
          </div>

        </div>

        {/* Concluding text at bottom */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[14px] sm:text-[15.5px] text-slate-600 leading-relaxed">
            À travers ses solutions et ses services, AXA Maroc cherche à offrir{' '}
            <strong className="text-slate-800 font-bold">
              une protection durable, adaptée aux
            </strong>
            <br className="hidden sm:inline" />
            <span className="inline-flex items-center justify-center mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#0072F5] mr-2 inline-block flex-shrink-0" />
              <strong className="text-slate-800 font-bold">
                nouveaux modes de vie et aux enjeux contemporains.
              </strong>
            </span>
          </p>

          {/* Bottom Centered Red Bar */}
          <div className="w-12 h-1 bg-[#E11D2A] rounded-full mx-auto mt-5" />
        </div>

      </div>
    </section>
  );
}
