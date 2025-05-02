import React from 'react';
import MarketCard from './marketCard';



const Market: React.FC = () => {
  return (
    <div className="ml-4 mr-4 w-8 bg-blue-400 border-round-xl pb-1 shadow-3">
        <div className="m-0 flex align-items-center justify-content-center h-8rem text-white"> Market Stok </div>
        <MarketCard text="1"></MarketCard>
        <MarketCard text="1"></MarketCard>
        <MarketCard text="1"></MarketCard>
    </div>
  );
};

export default Market;
