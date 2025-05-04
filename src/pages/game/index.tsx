import { useRouter } from 'next/router';
import Market from '../../components/market';
import Board from '../../components/board';
import Dice from '../../components/dice';
import Storage from '../../components/storage';
import React, { useState } from 'react';
import Wallet from '../../components/wallet';

const Game = () => {
    const router = useRouter();

    const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');

    const [topDice1, setTopDice1] = useState<number>(0);
    const [topDice2, setTopDice2] = useState<number>(0);
    const [bottomDice1, setBottomDice1] = useState<number>(0);
    const [bottomDice2, setBottomDice2] = useState<number>(0);

    const [availableTopDices1, setAvailableTopDices1] = useState<Array<boolean>>(Array(6).fill(true));
    const [availableTopDices2, setAvailableTopDices2] = useState<Array<boolean>>(Array(6).fill(true));
    const [availableBottomDices1, setAvailableBottomDices1] = useState<Array<boolean>>(Array(6).fill(true));
    const [availableBottomDices2, setAvailableBottomDices2] = useState<Array<boolean>>(Array(6).fill(true));

    return (
        <div className="flex w-12 h-screen justify-content-center align-items-center bg-blue-300">
            <Market></Market>

            <Board
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                diceTop1={topDice1}
                diceTop2={topDice2}
                diceBottom1={bottomDice1}
                diceBottom2={bottomDice2}
                setDiceTop1={setTopDice1}
                setDiceTop2={setTopDice2}
                setDiceBottom1={setBottomDice1}
                setDiceBottom2={setBottomDice2}
                availableTopDices1={availableTopDices1}
                availableTopDices2={availableTopDices2}
                availableBottomDices1={availableBottomDices1}
                availableBottomDices2={availableBottomDices2}
                setAvailableTopDices1={setAvailableTopDices1}
                setAvailableTopDices2={setAvailableTopDices2}
                setAvailableBottomDices1={setAvailableBottomDices1}
                setAvailableBottomDices2={setAvailableBottomDices2}
            />

            <div className="flex h-screen flex-col justify-between align-items-center">
                <div>
                    <div id="enemy">
                        <Wallet background_color="bg-gray-100" border_color="border-gray-600" />
                        <Dice
                            currentPlayer={currentPlayer}
                            owner='white'
                            dice1={topDice1}
                            dice2={topDice2}
                            setDice1={setTopDice1}
                            setDice2={setTopDice2}
                            availableDices1={availableTopDices1}
                            availableDices2={availableTopDices2}
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
                            currentPlayer={currentPlayer}
                            owner='black'
                            dice1={bottomDice1}
                            dice2={bottomDice2}
                            setDice1={setBottomDice1}
                            setDice2={setBottomDice2}
                            availableDices1={availableBottomDices1}
                            availableDices2={availableBottomDices2}
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
