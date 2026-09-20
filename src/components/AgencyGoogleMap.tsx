import { useState } from 'react';
import { 
  APIProvider, 
  Map, 
  AdvancedMarker, 
  Pin, 
  InfoWindow 
} from '@vis.gl/react-google-maps';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  ShieldCheck, 
  Compass, 
  PhoneCall,
  Clock,
  Layers
} from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

// Provisioned Google Maps Platform API Key (also configurable via VITE_GOOGLE_MAPS_API_KEY)
const GOOGLE_MAPS_API_KEY = 
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyAuYBUVWSatWPDt83L58KLjwR7L0zeYdlc';

export default function AgencyGoogleMap() {
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');

  const agencyPosition = {
    lat: AGENCY_INFO.mapCoordinates.lat,
    lng: AGENCY_INFO.mapCoordinates.lng,
  };

  return (
    <div className="mt-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md overflow-hidden">
      {/* 1. TOP BANNER HEADER */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0F2B5C] via-[#1A3868] to-[#0A1E40] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-[#E11D2A]" />
            <span>Localisation GPS & Accès Agence AXA</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Plan interactif Google Maps
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
            Rdc magasin 2, Immeuble Erraha N°8, Avenue Guemassa, M'hamid Marrakech
          </p>
        </div>

        {/* Action Buttons connected directly to Google Maps */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Lancer Itinéraire GPS */}
          <a
            href={AGENCY_INFO.googleMapsDirUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E11D2A] hover:bg-[#c91420] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 fill-current" />
            <span>Itinéraire GPS Direct</span>
            <ExternalLink className="w-3 h-3 text-white/80" />
          </a>

          {/* Ouvrir sur l'app Google Maps */}
          <a
            href={AGENCY_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white text-[#0F2B5C] hover:bg-slate-100 font-bold text-xs transition-all shadow-xs"
          >
            <MapPin className="w-3.5 h-3.5 text-[#0072F5]" />
            <span>Voir sur Google Maps</span>
          </a>

          {/* Téléphoner */}
          <a
            href={`tel:${AGENCY_INFO.phone1}`}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
            <span>05 25 36 30 61</span>
          </a>
        </div>
      </div>

      {/* 2. INTERACTIVE GOOGLE MAP CONTAINER */}
      <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] bg-slate-100">
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <Map
            defaultCenter={agencyPosition}
            defaultZoom={16}
            mapId="DEMO_MAP_ID"
            mapTypeId={mapType}
            gestureHandling="greedy"
            disableDefaultUI={false}
            zoomControl={true}
            fullscreenControl={true}
            streetViewControl={true}
            mapTypeControl={false}
            internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
            className="w-full h-full"
          >
            {/* Custom Styled Advanced Marker */}
            <AdvancedMarker
              position={agencyPosition}
              onClick={() => setInfoWindowOpen(true)}
              title="Echkili Assurances - Agent Général AXA Marrakech"
            >
              <Pin
                background="#0F2B5C"
                borderColor="#E11D2A"
                glyphColor="#FFFFFF"
                scale={1.25}
              />
            </AdvancedMarker>

            {/* InfoWindow directly linked to Google Maps */}
            {infoWindowOpen && (
              <InfoWindow
                position={agencyPosition}
                onCloseClick={() => setInfoWindowOpen(false)}
              >
                <div className="p-1 max-w-[270px] text-slate-800 font-sans">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#E11D2A] inline-block" />
                    <span className="font-extrabold text-[13px] text-[#0F2B5C] tracking-tight">
                      ECHKILI ASSURANCES
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-[#E11D2A] mb-1">
                    Agent Général AXA Assurances Maroc
                  </div>

                  <p className="text-[11.5px] text-slate-600 leading-snug mb-2">
                    Rdc magasin 2, Immeuble Erraha N°8, Avenue Guemassa, M'hamid Marrakech
                  </p>

                  <div className="text-[11.5px] font-semibold text-slate-700 mb-2.5 flex items-center gap-1.5">
                    <PhoneCall className="w-3 h-3 text-[#0072F5]" />
                    <span>05 25 36 30 61 / 06 67 76 21 24</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <a
                      href={AGENCY_INFO.googleMapsDirUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-1.5 px-2.5 bg-[#0F2B5C] hover:bg-[#1A3868] text-white rounded-lg text-[11px] font-bold text-center flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Navigation className="w-3 h-3 text-sky-300" />
                      <span>Lancer l'itinéraire GPS ↗</span>
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>

          {/* Quick Floating Map Controls overlay */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs p-1 rounded-xl shadow-md border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setMapType('roadmap')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                mapType === 'roadmap'
                  ? 'bg-[#0F2B5C] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Plan</span>
            </button>
            <button
              onClick={() => setMapType('satellite')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                mapType === 'satellite'
                  ? 'bg-[#0F2B5C] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Satellite</span>
            </button>
          </div>
        </APIProvider>
      </div>

      {/* 3. BOTTOM ACCESS & PRACTICAL INFORMATION */}
      <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/90 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-[#0F2B5C] flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-[#E11D2A]" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-[13px]">Adresse Exacte</div>
            <div className="text-slate-600 mt-0.5 leading-relaxed">
              Avenue Guemassa, Immeuble Erraha N°8, Rdc Magasin 2, M'hamid Marrakech.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-[13px]">Accès & Stationnement</div>
            <div className="text-slate-600 mt-0.5 leading-relaxed">
              Stationnement aisé devant l'immeuble. Axe direct reliant Guéliz, l'Aéroport et le cœur de M'hamid.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-100/80 text-[#0072F5] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Clock className="w-4 h-4 text-[#0072F5]" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-[13px]">Horaires d'Accueil</div>
            <div className="text-slate-600 mt-0.5 leading-relaxed">
              Lun - Ven : 08h30 - 18h30 (Journée continue)<br />
              Samedi : 09h00 - 13h00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
