import React, { useEffect, useState } from 'react';
import Zar1 from './dices/zar1';
import Zar2 from './dices/zar2';
import Zar3 from './dices/zar3';
import Zar4 from './dices/zar4';
import Zar5 from './dices/zar5';
import Zar6 from './dices/zar6';


const Dice: React.FC = () => {
    const [dice1, setDice1] = useState<number>(0);
    const [dice2, setDice2] = useState<number>(0);

    const [dices1, setDices1] = useState<number[]>(Array(6).fill(0));
    const [dices2, setDices2] = useState<number[]>(Array(6).fill(0));

    useEffect(() => {
        if (dice1 !== 0 && dice2 !== 0) {
            setTimeout(() => {
                alert(`Movement occurred! dice1: ${dice1}, dice2: ${dice2}`);

    
                setDices1(prev => {
                    const updated = [...prev];
                    updated[dice1 - 1] = 1;
                    return updated;
                });
    
                setDices2(prev => {
                    const updated = [...prev];
                    updated[dice2 - 1] = 1;
                    return updated;
                });
    
                setDice1(0);
                setDice2(0);
            }, 300);
        }
    }, [dice1, dice2]);
    


    return (
    <div className='w-12 flex justify-content-center'>
        <div>
            <div className={`flex gap-4 p-4 ${dice1 ? 'bg-red-800' : 'bg-red-700'} m-1 border-round-xl shadow-3`} style={{ width: 'max-content' }}>
                {/* Zar 1 */}
                <div onClick={() => {
                    if (dices1[0] === 0) {
                        setDice1(1);
                    }
                }} className={`cursor-pointer ${dices1[0] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar1 isSelected={dice1 === 1} isUsed={dices1[0] === 1} />
                </div>

                {/* Zar 2 */}
                <div onClick={() => {
                    if (dices1[1] === 0) {
                        setDice1(2);
                    }
                }} className={`cursor-pointer ${dices1[1] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar2 isSelected={dice1 === 2} isUsed={dices1[1] === 1} />
                </div>

                {/* Zar 3 */}
                <div onClick={() => {
                    if (dices1[2] === 0) {
                        setDice1(3);
                    }
                }} className={`cursor-pointer ${dices1[2] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar3 isSelected={dice1 === 3}isUsed={dices1[2] === 1} />
                </div>

                {/* Zar 4 */}
                <div onClick={() => {
                    if (dices1[3] === 0) {
                        setDice1(4);
                    }
                }} className={`cursor-pointer ${dices1[3] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar4 isSelected={dice1 === 4} isUsed={dices1[3] === 1} />
                </div>

                {/* Zar 5 */}
                <div onClick={() => {
                    if (dices1[4] === 0) {
                        setDice1(5);
                    }
                }} className={`cursor-pointer ${dices1[4] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar5 isSelected={dice1 === 5} isUsed={dices1[4] === 1} />
                </div>

                {/* Zar 6 */}
                <div onClick={() => {
                    if (dices1[5] === 0) {
                        setDice1(6);
                    }
                }} className={`cursor-pointer ${dices1[5] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar6 isSelected={dice1 === 6} isUsed={dices1[5] === 1} />
                </div>
            </div>

            <div className={`flex gap-4 p-4 ${dice2 ? 'bg-red-800' : 'bg-red-700'} m-1 border-round-xl shadow-3`} style={{ width: 'max-content' }}>
                {/* Zar 1 */}
                <div onClick={() => {
                    if (dices2[0] === 0) {
                        setDice2(1);
                    }
                }} className={`cursor-pointer ${dices2[0] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar1 isSelected={dice2 === 1}  isUsed={dices2[0] === 1}/>
                </div>

                {/* Zar 2 */}
                <div onClick={() => {
                    if (dices2[1] === 0) {
                        setDice2(2);
                    }
                }} className={`cursor-pointer ${dices2[1] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar2 isSelected={dice2 === 2} isUsed={dices2[1] === 1} />
                </div>

                {/* Zar 3 */}
                <div onClick={() => {
                    if (dices2[2] === 0) {
                        setDice2(3);
                    }
                }} className={`cursor-pointer ${dices2[2] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar3 isSelected={dice2 === 3} isUsed={dices2[2] === 1} />
                </div>

                {/* Zar 4 */}
                <div onClick={() => {
                    if (dices2[3] === 0) {
                        setDice2(4);
                    }
                }} className={`cursor-pointer ${dices2[3] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar4 isSelected={dice2 === 4} isUsed={dices2[3] === 1} />
                </div>

                {/* Zar 5 */}
                <div onClick={() => {
                    if (dices2[4] === 0) {
                        setDice2(5);
                    }
                }} className={`cursor-pointer ${dices2[4] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar5 isSelected={dice2 === 5} isUsed={dices2[4] === 1}/>
                </div>

                {/* Zar 6 */}
                <div onClick={() => {
                    if (dices2[5] === 0) {
                        setDice2(6);
                    }
                }} className={`cursor-pointer ${dices2[5] ? 'bg-red-300' : 'bg-green-100'}`}>
                    <Zar6 isSelected={dice2 === 6} isUsed={dices2[5] === 1} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dice;
