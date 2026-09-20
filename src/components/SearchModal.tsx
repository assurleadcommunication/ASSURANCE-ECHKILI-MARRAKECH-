import { useState, useMemo } from 'react';
import { X, Search, ChevronRight, Sparkles } from 'lucide-react';
import { SOLUTIONS_LIST, VALUES_LIST, AGENCY_INFO } from '../data/content';
import { InsuranceSolution } from '../types';

interface SearchModalProps {
  onClose: () => void;
  onSelectSolution: (solution: InsuranceSolution) => void;
  onOpenDevis: (type?: 'auto' | 'habitation' | 'sante' | 'pro') => void;
}

export default function SearchModal({
  onClose,
  onSelectSolution,
  onOpenDevis,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return SOLUTIONS_LIST.filter(sol => 
      sol.title.toLowerCase().includes(q) ||
      sol.shortDesc.toLowerCase().includes(q) ||
      sol.badge.toLowerCase().includes(q) ||
      sol.guarantees.some(g => g.toLowerCase().includes(q))
    );
  }, [query]);

  const quickKeywords = [
    'Auto 0 km', 'Habitation Riad', 'Accidents du Travail', 'Complémentaire Santé', 'Visa Schengen', 'Flotte Auto'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une assurance, une garantie, un service..."
            className="w-full bg-transparent text-base sm:text-lg text-slate-900 font-medium placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-200 rounded"
            >
              Effacer
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick keywords suggestions */}
        {!query && (
          <div className="p-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Recherches fréquentes
            </div>
            <div className="flex flex-wrap gap-2">
              {quickKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => setQuery(kw)}
                  className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-[#0072F5] text-xs font-semibold text-slate-700 transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              💡 Astuce : Tapez le nom de votre véhicule, de votre entreprise ou le type de risque pour trouver la garantie exacte.
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="max-h-96 overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100">
            {searchResults.length > 0 ? (
              searchResults.map((sol) => (
                <div 
                  key={sol.id}
                  onClick={() => {
                    onClose();
                    onSelectSolution(sol);
                  }}
                  className="py-3 sm:py-4 px-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#0072F5]">
                        {sol.badge}
                      </span>
                      <span className="text-xs text-slate-400 uppercase">
                        {sol.category === 'particuliers' ? 'Particuliers' : 'Professionnels & Entreprises'}
                      </span>
                    </div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-[#0072F5] transition-colors">
                      {sol.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {sol.shortDesc}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0072F5] group-hover:translate-x-1 transition-all" />
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-slate-500 text-sm">
                  Aucun résultat trouvé pour "{query}".
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDevis('auto');
                  }}
                  className="mt-4 px-5 py-2.5 rounded-lg bg-[#0072F5] text-white font-bold text-xs shadow-sm hover:bg-blue-600"
                >
                  Faire une demande de devis personnalisée
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500">
          Besoin d'assistance directe ? Contactez l'agence au <strong className="text-slate-800">{AGENCY_INFO.phoneDisplay}</strong>
        </div>
      </div>
    </div>
  );
}
