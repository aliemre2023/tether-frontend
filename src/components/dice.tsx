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
}

const Dice: React.FC<DiceProps> = ({ dice1, dice2, setDice1, setDice2 }) => {
    const [dices1, setDices1] = useState<number[]>(Array(6).fill(0));
    const [dices2, setDices2] = useState<number[]>(Array(6).fill(0));

    return (
        <div className="w-12 flex justify-content-center">
            <div>
                <div
                    className={`flex gap-4 p-4 ${dice1 ? 'bg-red-800' : 'bg-red-700'} m-1 border-round-xl shadow-3`}
                    style={{ width: 'max-content' }}
                >
                    {/* Dice 1 */}
                    <div
                        onClick={() => setDice1(1)}
                        className={`cursor-pointer ${dices1[0] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar1 isSelected={dice1 === 1} />
                    </div>

                    {/* Dice 2 */}
                    <div
                        onClick={() => setDice1(2)}
                        className={`cursor-pointer ${dices1[1] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar2 isSelected={dice1 === 2} />
                    </div>

                    {/* Dice 3 */}
                    <div
                        onClick={() => setDice1(3)}
                        className={`cursor-pointer ${dices1[2] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar3 isSelected={dice1 === 3} />
                    </div>

                    {/* Dice 4 */}
                    <div
                        onClick={() => setDice1(4)}
                        className={`cursor-pointer ${dices1[3] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar4 isSelected={dice1 === 4} />
                    </div>

                    {/* Dice 5 */}
                    <div
                        onClick={() => setDice1(5)}
                        className={`cursor-pointer ${dices1[4] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar5 isSelected={dice1 === 5} />
                    </div>

                    {/* Dice 6 */}
                    <div
                        onClick={() => setDice1(6)}
                        className={`cursor-pointer ${dices1[5] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar6 isSelected={dice1 === 6} />
                    </div>
                </div>

                <div
                    className={`flex gap-4 p-4 ${dice2 ? 'bg-red-800' : 'bg-red-700'} m-1 border-round-xl shadow-3`}
                    style={{ width: 'max-content' }}
                >
                    {/* Dice 1 */}
                    <div
                        onClick={() => setDice2(1)}
                        className={`cursor-pointer ${dices2[0] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar1 isSelected={dice2 === 1} />
                    </div>

                    {/* Dice 2 */}
                    <div
                        onClick={() => setDice2(2)}
                        className={`cursor-pointer ${dices2[1] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar2 isSelected={dice2 === 2} />
                    </div>

                    {/* Dice 3 */}
                    <div
                        onClick={() => setDice2(3)}
                        className={`cursor-pointer ${dices2[2] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar3 isSelected={dice2 === 3} />
                    </div>

                    {/* Dice 4 */}
                    <div
                        onClick={() => setDice2(4)}
                        className={`cursor-pointer ${dices2[3] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar4 isSelected={dice2 === 4} />
                    </div>

                    {/* Dice 5 */}
                    <div
                        onClick={() => setDice2(5)}
                        className={`cursor-pointer ${dices2[4] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar5 isSelected={dice2 === 5} />
                    </div>

                    {/* Dice 6 */}
                    <div
                        onClick={() => setDice2(6)}
                        className={`cursor-pointer ${dices2[5] ? 'bg-red-300' : 'bg-green-100'}`}
                    >
                        <Zar6 isSelected={dice2 === 6} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dice;
