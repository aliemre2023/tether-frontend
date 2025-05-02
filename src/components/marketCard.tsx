import React from 'react';

interface MarketCardProps {
  text: string;
}

const MarketCard: React.FC<MarketCardProps> = ({ text }) => {
  return (
    <div className="m-4 bg-red-700 flex border-round-xl align-items-center justify-content-center h-8rem shadow-3 text-white font-bold">
      {text}
    </div>
  );
};

export default MarketCard;
