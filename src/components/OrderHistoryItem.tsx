import React from 'react';
import { Trash2 } from 'lucide-react';
import { OrderItem } from './OrderItem';
import { SuggestionBox } from './SuggestionBox';
import { OrderWithCustomer } from '../types';

interface OrderHistoryItemProps {
  order: OrderWithCustomer;
  suggestion: string;
  isDeletingOrder: boolean;
  isSavingSuggestion: boolean;
  isSaved: boolean;
  onDelete: () => void;
  onSuggestionChange: (value: string) => void;
  onSaveSuggestion: () => void;
}

export const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({
  order,
  suggestion,
  isDeletingOrder,
  isSavingSuggestion,
  isSaved,
  onDelete,
  onSuggestionChange,
  onSaveSuggestion
}) => {
  const calculateTotal = (items: typeof order.items) => {
    return items.reduce((total, item) => {
      if (item.category !== 'tapas') {
        return total + (item.price * item.quantity);
      }
      return total;
    }, 0);
  };

  return (
    <div className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0">
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <div>
          <h3 className="font-medium text-base sm:text-lg">{order.customer.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500">
            {new Date(order.created_at).toLocaleDateString()} - 
            {order.customer.type === 'adult' ? ' Adulto' : ' Niño'}
          </p>
        </div>
        <button
          onClick={onDelete}
          disabled={isDeletingOrder}
          className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
        >
          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      <div className="space-y-2">
        {order.items.map((item, index) => (
          <OrderItem
            key={index}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            category={item.category}
          />
        ))}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm pt-1">
            <span className="font-bold text-green-600">Total a pagar:</span>
            <span className="font-bold text-green-600">
              {calculateTotal(order.items).toFixed(2)}€
            </span>
          </div>
        </div>
        <SuggestionBox
          suggestion={suggestion}
          isSaving={isSavingSuggestion}
          onChange={onSuggestionChange}
          onSave={onSaveSuggestion}
          isSaved={isSaved}
        />
      </div>
    </div>
  );
};