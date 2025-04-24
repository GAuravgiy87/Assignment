import { updatePrices, resetPriceDirection } from '../store/cryptoSlice';
import { initialCryptoData } from '../data/initialCryptoData';
import { AppDispatch } from '../store';
import { PriceUpdate } from '../types';

let intervalId: NodeJS.Timeout | null = null;

// Generate random price fluctuations
const getRandomPriceChange = (basePrice: number): number => {
  const changePercent = (Math.random() * 2 - 1) * 0.01; // -1% to +1%
  return basePrice * (1 + changePercent);
};

// Generate random percentage changes
const getRandomPercentChange = (basePercent: number): number => {
  const change = (Math.random() * 0.5 - 0.25); // -0.25% to +0.25%
  return parseFloat((basePercent + change).toFixed(2));
};

// Generate random volume changes
const getRandomVolumeChange = (baseVolume: number): number => {
  const changePercent = (Math.random() * 0.1 - 0.05); // -5% to +5%
  return baseVolume * (1 + changePercent);
};

// Simulate WebSocket connection and updates
export const startWebSocket = (dispatch: AppDispatch): void => {
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Update prices every 2 seconds
  intervalId = setInterval(() => {
    // Choose random assets to update (between 1 and 3)
    const numUpdates = Math.floor(Math.random() * 3) + 1;
    const assetIndices = new Set<number>();
    
    while (assetIndices.size < numUpdates) {
      assetIndices.add(Math.floor(Math.random() * initialCryptoData.length));
    }
    
    const updates: PriceUpdate[] = Array.from(assetIndices).map(index => {
      const asset = initialCryptoData[index];
      return {
        id: asset.id,
        price: getRandomPriceChange(asset.price),
        percentChange1h: getRandomPercentChange(asset.percentChange1h),
        percentChange24h: getRandomPercentChange(asset.percentChange24h),
        percentChange7d: getRandomPercentChange(asset.percentChange7d),
        volume24h: getRandomVolumeChange(asset.volume24h)
      };
    });
    
    dispatch(updatePrices(updates));

    // Reset price direction after animation
    updates.forEach(update => {
      setTimeout(() => {
        dispatch(resetPriceDirection(update.id));
      }, 2000);
    });
  }, 2000);
};

// Stop the mock WebSocket
export const stopWebSocket = (): void => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};