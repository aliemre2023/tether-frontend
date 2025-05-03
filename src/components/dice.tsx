import React, { useState } from 'react';
import Zar1 from './dices/zar1';
import Zar2 from './dices/zar2';
import Zar3 from './dices/zar3';
import Zar4 from './dices/zar4';
import Zar5 from './dices/zar5';
import Zar6 from './dices/zar6';

interface DiceProps {
    dice1: number;
    dice2: number;
    setDice1: (value: number) => void;
    setDice2: (value: number) => void;
    style: string;
}

const Dice: React.FC<DiceProps> = ({ dice1, dice2, setDice1, setDice2, style }) => {
    const [dices1, setDices1] = useState<number[]>(Array(6).fill(0));
    const [dices2, setDices2] = useState<number[]>(Array(6).fill(0));

    const diceComponents = [Zar1, Zar2, Zar3, Zar4, Zar5, Zar6];

    return (
        <div className={`w-12 flex justify-content-center ${style}`}>
            <div>
                <div
                    className={`flex gap-4 p-2 ${dice1 ? 'bg-red-800' : 'bg-red-700'} m-1 border-round-xl shadow-3`}
                    style={{ width: 'max-content' }}
                >
                    {diceComponents.map((ZarComponent, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setDice1(dice1 === index + 1 ? 0 : index + 1);
                            }}
                            className={`cursor-pointer ${dices1[index] ? 'bg-red-300' : 'bg-green-100'}`}
                        >
                            {' '}
                            <ZarComponent isSelected={dice1 === index + 1} />{' '}
                        </div>
                    ))}
                </div>

                <div
                    className={`flex gap-4 p-2 ${dice2 ? 'bg-red-800' : 'bg-red-700'} m-1 border-round-xl shadow-3`}
                    style={{ width: 'max-content' }}
                >
                    {diceComponents.map((ZarComponent, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setDice2(dice2 === index + 1 ? 0 : index + 1);
                            }}
                            className={`cursor-pointer ${dices2[index] ? 'bg-red-300' : 'bg-green-100'}`}
                        >
                            {' '}
                            <ZarComponent isSelected={dice2 === index + 1} />{' '}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dice;
