import { useRouter } from 'next/router';
import Market from '../../components/market';
import Board from '../../components/board';
import Dice from '../../components/dice';
import React, { useState } from 'react';

const Game = () => {
    const router = useRouter();
    const [dice1, setDice1] = useState<number>(0);
    const [dice2, setDice2] = useState<number>(0);

    return (
        <div className='flex w-12 h-screen justify-content-center align-items-center bg-blue-300'>
            
            <Market></Market>
            
            <Board dice1={dice1} dice2={dice2} />

            <Dice
                dice1={dice1}
                dice2={dice2}
                setDice1={setDice1}
                setDice2={setDice2}
            />
            
        </div>

    );
};

export default Game;