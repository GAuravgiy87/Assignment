// Types for the application

export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  iconUrl: string;
  price: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  sparklineData: number[];
  priceDirection: 'up' | 'down' | 'neutral';
  isFavorite: boolean;
}

export interface PriceUpdate {
  id: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  volume24h: number;
}