import React from 'react';

interface OrderItemProps {
  name: string;
  quantity: number;
  price: number;
  category: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({ name, quantity, price, category }) => {
  return (
    <div className="flex justify-between text-xs sm:text-sm">
      <span className="text-gray-600">
        {name} x{quantity}
      </span>
      {category !== 'tapas' && (
        <span className="font-medium">
          {(price * quantity).toFixed(2)}€
        </span>
      )}
    </div>
  );
};