import { useRouter } from 'next/router';
import Market from '../../components/market';
import Board from '../../components/board';
import Dice from '../../components/dice';
import Storage from '../../components/storage';
import React, { useState } from 'react';
import Wallet from '../../components/wallet';

const Game = () => {
    const router = useRouter();
    const [topDice1, setTopDice1] = useState<number>(0);
    const [topDice2, setTopDice2] = useState<number>(0);
    const [bottomDice1, setBottomDice1] = useState<number>(0);
    const [bottomDice2, setBottomDice2] = useState<number>(0);

    return (
        <div className="flex w-12 h-screen justify-content-center align-items-center bg-blue-300">
            <Market></Market>

            <Board diceTop1={topDice1} diceTop2={topDice2} diceBottom1={bottomDice1} diceBottom2={bottomDice2} />

            <div className="flex h-screen flex-col justify-between align-items-center">
                <div>
                    <div id="enemy">
                        <Wallet background_color="bg-gray-100" border_color="border-gray-600" />
                        <Dice
                            dice1={topDice1}
                            dice2={topDice2}
                            setDice1={setTopDice1}
                            setDice2={setTopDice2}
                            style={'top-0'}
                        />
                        <div>
                            <Storage />
                        </div>
                    </div>
                    <div className="m-6"></div>
                    <div>
                        <div>
                            <Storage />
                        </div>
                        <Dice
                            dice1={bottomDice1}
                            dice2={bottomDice2}
                            setDice1={setBottomDice1}
                            setDice2={setBottomDice2}
                            style={'bottom-auto'}
                        />
                        <Wallet background_color="bg-green-200" border_color="border-green-700" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
