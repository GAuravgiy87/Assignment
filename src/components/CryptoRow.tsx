import React from 'react';
import { useDispatch } from 'react-redux';
import { CryptoAsset } from '../types';
import { formatCurrency, formatLargeNumber, formatPercentage, formatSupply } from '../utils/formatters';
import PriceChange from './PriceChange';
import MiniChart from './MiniChart';
import { Star } from 'lucide-react';
import { toggleFavorite } from '../store/cryptoSlice';

interface CryptoRowProps {
  asset: CryptoAsset;
}

const CryptoRow: React.FC<CryptoRowProps> = ({ asset }) => {
  const dispatch = useDispatch();
  
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(asset.id));
  };

  return (
    <tr className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
      <td className="sticky left-0 bg-slate-800 px-4 py-4 flex items-center gap-2">
        <button 
          onClick={handleToggleFavorite} 
          className="text-slate-400 hover:text-yellow-400 transition-colors"
        >
          <Star 
            className={`h-4 w-4 ${asset.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} 
          />
        </button>
        <span>{asset.rank}</span>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <img 
            src={asset.iconUrl} 
            alt={asset.name} 
            className="w-8 h-8" 
          />
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-slate-400 text-sm">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className={`px-4 py-4 text-right font-medium ${
        asset.priceDirection === 'up' 
          ? 'text-green-400 transition-colors duration-1000' 
          : asset.priceDirection === 'down' 
            ? 'text-red-400 transition-colors duration-1000' 
            : ''
      }`}>
        {formatCurrency(asset.price)}
      </td>
      <td className="px-4 py-4 text-right">
        <PriceChange value={asset.percentChange1h} />
      </td>
      <td className="px-4 py-4 text-right">
        <PriceChange value={asset.percentChange24h} />
      </td>
      <td className="px-4 py-4 text-right">
        <PriceChange value={asset.percentChange7d} />
      </td>
      <td className="px-4 py-4 text-right">
        {formatLargeNumber(asset.marketCap)}
      </td>
      <td className="px-4 py-4 text-right">
        {formatLargeNumber(asset.volume24h)}
      </td>
      <td className="px-4 py-4 text-right">
        {formatSupply(asset.circulatingSupply, asset.symbol)}
        {asset.maxSupply && (
          <div className="flex justify-end mt-1">
            <div className="w-24 h-1.5 bg-slate-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${(asset.circulatingSupply / asset.maxSupply) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </td>
      <td className="px-4 py-4">
        <div className="w-32 h-16">
          <MiniChart data={asset.sparklineData} percentChange={asset.percentChange7d} />
        </div>
      </td>
    </tr>
  );
};

export default CryptoRow;