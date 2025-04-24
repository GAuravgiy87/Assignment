import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CryptoRow from './CryptoRow';
import { InfoIcon } from './InfoIcon';

const CryptoTable: React.FC = () => {
  const { assets } = useSelector((state: RootState) => state.crypto);

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr className="text-slate-300 text-left border-b border-slate-700">
              <th className="sticky left-0 bg-slate-800 px-4 py-3">#</th>
              <th className="bg-slate-800 px-4 py-3 text-left whitespace-nowrap">Name</th>
              <th className="px-4 py-3 text-right">Price</th>
              <th className="px-4 py-3 text-right">1h %</th>
              <th className="px-4 py-3 text-right">24h %</th>
              <th className="px-4 py-3 text-right">7d %</th>
              <th className="px-4 py-3 text-right whitespace-nowrap">
                <div className="flex items-center justify-end gap-1">
                  Market Cap
                  <InfoIcon tooltip="The total market value of a cryptocurrency's circulating supply" />
                </div>
              </th>
              <th className="px-4 py-3 text-right whitespace-nowrap">
                <div className="flex items-center justify-end gap-1">
                  Volume(24h)
                  <InfoIcon tooltip="A measure of how much of a cryptocurrency was traded in the last 24 hours" />
                </div>
              </th>
              <th className="px-4 py-3 text-right whitespace-nowrap">
                <div className="flex items-center justify-end gap-1">
                  Circulating Supply
                  <InfoIcon tooltip="The amount of coins that are circulating in the market and are tradeable by the public" />
                </div>
              </th>
              <th className="px-4 py-3 text-right">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <CryptoRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;