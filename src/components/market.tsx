import React from 'react';
import MarketCard from './marketCard';

const Market: React.FC = () => {
    const items = [
        { text: '1', img: '/pieces/piece1.png' },
        { text: '2', img: '/pieces/piece2.png' },
        { text: '3', img: '/pieces/piece3.png' },
        { text: '4', img: '/pieces/piece4.png' },
    ];

    return (
        <div className="flex justify-content-center align-items-center w-full">
            <div className="m-2 w-20rem h-40rem bg-red-700 border-round-xl pb-1 shadow-3 border-3 border-red-900 flex flex-column">
                <div className="flex align-items-center justify-content-center bg-red-900 border-round-top-md text-white p-2 font-bold">
                    Market Stock
                </div>

                {/* 4 cards, scrollable if more */}
                <div className="flex flex-column align-items-center gap-2 overflow-auto px-2 py-2">
                    {items.map((item, idx) => (
                        <MarketCard key={idx} text={item.text} img={item.img} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Market;
