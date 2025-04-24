import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import { TrendingUp as ArrowTrendingUp, Star } from 'lucide-react';
import { startWebSocket, stopWebSocket } from './utils/mockWebSocket';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Start the mock WebSocket connection
    startWebSocket(dispatch);
    
    // Clean up on unmount
    return () => {
      stopWebSocket();
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-700 bg-slate-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center gap-2">
            <ArrowTrendingUp className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">CryptoTracker</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md transition-colors">
              <Star className="h-4 w-4" />
              <span>Watchlist</span>
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Today's Cryptocurrency Prices</h2>
        <div className="overflow-x-auto">
          <CryptoTable />
        </div>
      </main>
      
      <footer className="bg-slate-800 border-t border-slate-700 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 CryptoTracker. All data is simulated for demonstration purposes.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;