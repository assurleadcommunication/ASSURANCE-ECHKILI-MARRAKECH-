export interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtext?: boolean;
}

export default function Logo({ 
  variant = 'light', 
  className = '',
  showSubtext = true 
}: LogoProps) {
  const isLight = variant === 'light'; // light background -> dark text
  
  return (
    <div className={`flex items-center gap-3 sm:gap-4 select-none ${className}`}>
      {/* Monogram AE Icon - Exact vector recreation of official photo */}
      <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center filter drop-shadow-md">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full overflow-visible"
          aria-label="Logo Assurances Echkili - Monogramme AE"
        >
          {/* Red dynamic diagonal slash (slicing through A & E) in official AXA Red */}
          <path
            d="M 40,8 L 51,8 L 73,92 L 62,92 Z"
            fill="#E11D2A"
          />

          {/* E - Top Bar with rounded stadium right cap */}
          <path
            d="M 54.5,23.5 L 85,23.5 A 6.75 6.75 0 0 1 85,37 L 58.2,37 Z"
            fill={isLight ? '#0F2B5C' : '#FFFFFF'}
          />

          {/* E - Middle Bar with rounded stadium right cap */}
          <path
            d="M 59.8,43.5 L 81,43.5 A 6.75 6.75 0 0 1 81,57 L 63.5,57 Z"
            fill={isLight ? '#0F2B5C' : '#FFFFFF'}
          />

          {/* E - Bottom Bar with rounded stadium right cap */}
          <path
            d="M 65.2,63.5 L 85,63.5 A 6.75 6.75 0 0 1 85,77 L 69,77 Z"
            fill={isLight ? '#0F2B5C' : '#FFFFFF'}
          />

          {/* A - Body with rounded top-left apex and inner counter */}
          <path
            d="
              M 11,77 
              L 22.5,77 
              L 27.8,57 
              L 53,57 
              L 43.5,21 
              L 34,21 
              C 23.5,21 20,25.5 18,35 
              L 11,77 Z 
              M 31.5,43.5 
              L 49.3,43.5 
              L 45.3,28.5 
              L 36.5,28.5 Z
            "
            fill={isLight ? '#0F2B5C' : '#FFFFFF'}
            fillRule="evenodd"
          />
        </svg>
      </div>

      {/* Typography Lockup matching the photo branding */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black italic text-[18px] sm:text-[22px] lg:text-[24px] tracking-tight transition-colors ${
              isLight ? 'text-[#0F2B5C]' : 'text-white'
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            ASSURANCES ECHKILI
          </span>
        </div>

        {showSubtext && (
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="text-[10px] sm:text-[11.5px] font-black uppercase tracking-wider text-[#E11D2A] inline-flex items-center">
              AGENT GÉNÉRAL AXA MARRAKECH
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
