import { useRouter } from 'next/router';
import Market from './market';
import Board from './board';
import Dice from './dice';
import React, { useState } from 'react';

interface WalletProps {
    background_color: string;
    border_color: string;
}

const Wallet: React.FC<WalletProps> = ({ background_color = 'bg-yellow-500', border_color = 'border-yellow-700' }) => {
    const [money, setMoney] = useState<number>(100);
    return (
        <div className="flex justify-content-center align-items-center w-full">
            <div
                className={`${background_color} text-2xl font-bold p-2 border-round-md border-1 ${border_color} shadow-2 w-max`}
            >
                {money}
            </div>
        </div>
    );
};

export default Wallet;
