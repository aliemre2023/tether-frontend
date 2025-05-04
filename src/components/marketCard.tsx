import React from 'react';

interface MarketCardProps {
    text: string;
    img: string;
}

const MarketCard: React.FC<MarketCardProps> = ({ text, img }) => {
    return (
        <div className="w-12rem h-10rem">
            {' '}
            {/* Card comtainer height = 40rem  */}
            <div className="bg-red-900 border-round-xl shadow-4 text-white font-bold p-2 flex flex-column overflow-hidden h-full">
                {/* Text at top */}
                <div className="text-center text-md mb-1">{text}</div>

                {/* Image fills remaining space */}
                <div className="flex align-items-center justify-content-center flex-grow-1">
                    <img src={img} alt="icon" className="h-full max-h-6rem object-contain" />
                </div>
            </div>
        </div>
    );
};

export default MarketCard;
