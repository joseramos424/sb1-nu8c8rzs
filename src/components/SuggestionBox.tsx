import React from 'react';
import { MessageSquare, Save, Check } from 'lucide-react';

interface SuggestionBoxProps {
  suggestion: string;
  isSaving: boolean;
  onChange: (value: string) => void;
  onSave: () => void;
  isSaved: boolean;
}

export const SuggestionBox: React.FC<SuggestionBoxProps> = ({
  suggestion,
  isSaving,
  onChange,
  onSave,
  isSaved
}) => {
  return (
    <div className="mt-3">
      <div className="flex items-center text-gray-500 mb-1.5">
        <MessageSquare className="h-4 w-4 mr-1.5" />
        <span className="text-sm">Sugerencias</span>
      </div>
      <textarea
        value={suggestion || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe tus sugerencias aquí..."
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={2}
      />
      <div className="flex justify-end mt-2">
        <button
          onClick={onSave}
          disabled={isSaving || isSaved || !suggestion}
          className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm transition-colors ${
            isSaved
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSaving ? (
            'Guardando...'
          ) : isSaved ? (
            <>
              <Check className="h-4 w-4 mr-1.5" />
              Guardado
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-1.5" />
              Guardar
            </>
          )}
        </button>
      </div>
    </div>
  );
};