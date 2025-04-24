import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialCryptoData } from '../data/initialCryptoData';
import { CryptoAsset, PriceUpdate } from '../types';

interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  assets: initialCryptoData,
  loading: false,
  error: null
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state, action: PayloadAction<PriceUpdate[]>) => {
      // Create a new array of assets
      state.assets = state.assets.map(asset => {
        const update = action.payload.find(u => u.id === asset.id);
        
        if (update) {
          const oldPrice = asset.price;
          const priceDirection = update.price > oldPrice ? 'up' : 
                               update.price < oldPrice ? 'down' : 'neutral';
          
          // Return a new object with updated values
          return {
            ...asset,
            price: update.price,
            percentChange1h: update.percentChange1h,
            percentChange24h: update.percentChange24h,
            percentChange7d: update.percentChange7d,
            volume24h: update.volume24h,
            priceDirection
          };
        }
        return asset;
      });
    },
    resetPriceDirection: (state, action: PayloadAction<string>) => {
      state.assets = state.assets.map(asset => 
        asset.id === action.payload 
          ? { ...asset, priceDirection: 'neutral' }
          : asset
      );
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.assets = state.assets.map(asset => 
        asset.id === action.payload 
          ? { ...asset, isFavorite: !asset.isFavorite }
          : asset
      );
    }
  }
});

export const { updatePrices, resetPriceDirection, toggleFavorite } = cryptoSlice.actions;
export default cryptoSlice.reducer;