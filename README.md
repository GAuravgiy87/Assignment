"# Assignment" 
# CryptoTracker - Real-Time Cryptocurrency Price Tracker

A modern, responsive React application that simulates real-time cryptocurrency price tracking with WebSocket-like updates. Built with React, Redux Toolkit, and TypeScript.

![CryptoTracker Demo]

![Screenshot 2025-04-24 162929](https://github.com/user-attachments/assets/230ab1c5-e655-479a-b43b-236003ab89bb)
![Screenshot 2025-04-24 162941](https://github.com/user-attachments/assets/841ac549-4db8-4799-b3e4-9c1ca4854ce2)
![Screenshot 2025-04-24 162950](https://github.com/user-attachments/assets/2fc36f14-1486-4bde-aba0-10feb73f49f2)
![Screenshot 2025-04-24 163000](https://github.com/user-attachments/assets/6a5ff7d7-8dc2-417c-bb51-1868edd7d108)


Video link (https://youtu.be/oFSwrZbB8Qk)


## Features

- 🚀 Real-time price updates with simulated WebSocket connection
- 📊 Interactive price charts showing 7-day history
- 💫 Smooth price change animations
- ⭐ Favorite/watchlist functionality
- 📱 Fully responsive design
- 🎯 Precise number formatting for different value ranges
- ℹ️ Helpful tooltips for technical terms

## Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Code Quality**: ESLint

## Architecture

The application follows a modern React architecture with the following key components:

```
src/
├── components/         # React components
├── store/             # Redux store and slices
├── utils/             # Utility functions
├── types/             # TypeScript types
└── data/              # Sample data
```

### State Management
- Uses Redux Toolkit for centralized state management
- Implements real-time updates through simulated WebSocket connection
- Maintains immutable state updates for optimal performance

### Components
- Modular component architecture
- Reusable UI components
- Performance-optimized renders

## Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crypto-tracker.git
cd crypto-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── CryptoTable.tsx    # Main cryptocurrency table
│   │   ├── CryptoRow.tsx      # Individual crypto asset row
│   │   ├── PriceChange.tsx    # Price change indicator
│   │   ├── MiniChart.tsx      # 7-day price chart
│   │   └── InfoIcon.tsx       # Tooltip icon
│   ├── store/
│   │   ├── index.ts           # Redux store configuration
│   │   └── cryptoSlice.ts     # Crypto state management
│   ├── utils/
│   │   ├── formatters.ts      # Number formatting utilities
│   │   └── mockWebSocket.ts   # WebSocket simulation
│   └── types/
│       └── index.ts           # TypeScript interfaces
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments

- Design inspired by CoinMarketCap and CoinGecko
- Sample cryptocurrency data and logos from various public sources
