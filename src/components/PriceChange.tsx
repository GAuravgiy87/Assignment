import React from 'react';
import { formatPercentage } from '../utils/formatters';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface PriceChangeProps {
  value: number;
}

const PriceChange: React.FC<PriceChangeProps> = ({ value }) => {
  const isPositive = value > 0;
  const isNeutral = value === 0;
  
  return (
    <div className={`flex items-center justify-end gap-1 ${
      isPositive ? 'text-green-400' : isNeutral ? 'text-slate-400' : 'text-red-400'
    }`}>
      {!isNeutral && (
        isPositive 
          ? <TrendingUp className="h-3.5 w-3.5" /> 
          : <TrendingDown className="h-3.5 w-3.5" />
      )}
      <span>{formatPercentage(value)}</span>
    </div>
  );
};

export default PriceChange;