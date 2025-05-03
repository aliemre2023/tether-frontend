import { useRouter } from 'next/router';
import Market from './market';
import Board from './board';
import Dice from './dice';
import React, { useState } from 'react';

const Wallet = () => {
    const [money, setMoney] = useState<number>(100);
    return (
        <div className="flex justify-content-center align-items-center w-full">
            <div className="bg-yellow-300 text-2xl font-bold p-2 border-round-md border-1 border-yellow-700 shadow-2 w-max">
                {money}
            </div>
        </div>
    );
};

export default Wallet;
