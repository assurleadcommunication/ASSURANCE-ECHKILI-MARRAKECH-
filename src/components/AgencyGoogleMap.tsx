import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Compass, PhoneCall } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

declare global {
  interface Window {
    google?: any;
    initGoogleMapCallback?: () => void;
  }
}

export default function AgencyGoogleMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setMapError("Clé API Google Maps manquante");
      return;
    }

    const initMap = () => {
      if (!mapContainerRef.current || !window.google?.maps) return;

      try {
        const agencyLatLng = {
          lat: AGENCY_INFO.mapCoordinates.lat,
          lng: AGENCY_INFO.mapCoordinates.lng,
        };

        const map = new window.google.maps.Map(mapContainerRef.current, {
          center: agencyLatLng,
          zoom: 16,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          fullscreenControl: true,
          mapTypeControl: false,
          zoomControl: true,
          styles: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "simplified" }]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        // Add Marker
        const marker = new window.google.maps.Marker({
          position: agencyLatLng,
          map: map,
          title: "Echkili Assurances - Agent Général AXA",
          animation: window.google.maps.Animation.DROP,
        });

        // Info Window with rich branding
        const contentString = `
          <div style="padding: 10px; max-width: 250px; font-family: 'Plus Jakarta Sans', sans-serif;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
              <span style="display: inline-block; width: 10px; height: 10px; background-color: #E11D2A; border-radius: 2px;"></span>
              <span style="font-weight: 800; font-size: 13px; color: #0F2B5C;">ECHKILI ASSURANCES</span>
            </div>
            <div style="font-size: 11px; font-weight: 600; color: #E11D2A; margin-bottom: 4px;">Agent Général AXA Assurances Maroc</div>
            <p style="font-size: 11px; color: #475569; margin: 0 0 6px 0; line-height: 1.4;">
              Rdc magasin 2, Imm Erraha N°8, Av Guemassa, M'hamid Marrakech
            </p>
            <div style="font-size: 11px; font-weight: 700; color: #0F2B5C; margin-bottom: 8px;">
              📞 05 25 36 30 61 / 06 67 76 21 24
            </div>
            <a 
              href="${AGENCY_INFO.googleMapsUrl}" 
              target="_blank" 
              rel="noreferrer"
              style="display: inline-block; padding: 4px 10px; background: #0F2B5C; color: white; text-decoration: none; border-radius: 6px; font-size: 10px; font-weight: 700;"
            >
              Itinéraire Google Maps ↗
            </a>
          </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        // Automatically open infowindow initially
        infoWindow.open(map, marker);

        setIsMapLoaded(true);
      } catch (err: any) {
        console.error("Map initialization error:", err);
        setMapError("Impossible de charger la carte Google Maps.");
      }
    };

    // Check if script already in document
    if (window.google?.maps) {
      initMap();
      return;
    }

    const scriptId = 'google-maps-platform-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initMap();
      };
      script.onerror = () => {
        setMapError("Erreur de chargement du service Google Maps.");
      };
      document.head.appendChild(script);
    } else {
      script.addEventListener('load', initMap);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', initMap);
      }
    };
  }, []);

  return (
    <div className="mt-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Top Banner Header */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0F2B5C] via-[#1E3A8A] to-[#0A1E40] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>Localisation GPS & Accès Agence</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Plan interactif Google Maps
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
            Rdc magasin 2, Immeuble Erraha N°8, Avenue Guemassa, M'hamid Marrakech
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={AGENCY_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0F2B5C] hover:bg-slate-100 font-bold text-xs transition-colors shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-[#E11D2A]" />
            <span>Ouvrir l'Itinéraire GPS</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href={`tel:${AGENCY_INFO.phone1}`}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
            <span>05 25 36 30 61</span>
          </a>
        </div>
      </div>

      {/* Map Interactive Container */}
      <div className="relative w-full h-[360px] sm:h-[440px] bg-slate-100">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Fallback iframe in case script or WebGL issues occur */}
        {mapError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-slate-100">
            <iframe
              title="Google Map Echkili Assurances"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent('Imm Erraha Av Guemassa Mhamid Marrakech')}&center=31.6025,-8.0345&zoom=16`}
            />
          </div>
        )}

        {/* Loading overlay if loading */}
        {!isMapLoaded && !mapError && (
          <div className="absolute inset-0 bg-slate-100/90 flex flex-col items-center justify-center gap-3 z-10">
            <div className="w-8 h-8 border-3 border-[#0F2B5C] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold text-slate-600">Chargement de la carte interactive Google Maps...</p>
          </div>
        )}
      </div>

      {/* Bottom Info bar with landmarks */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#E11D2A] flex-shrink-0" />
          <span>
            <strong>Repères d'accès :</strong> Avenue Guemassa (axe principal M'hamid vers Aéroport / Centre), Immeuble Erraha n°8, Rdc Magasin 2.
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[#0F2B5C] font-semibold flex-shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Parking disponible & Agence accessible</span>
        </div>
      </div>
    </div>
  );
}
