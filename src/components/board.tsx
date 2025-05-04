import React, { useEffect, useState } from 'react';

interface BoardProps {
    currentPlayer: 'white' | 'black';
    setCurrentPlayer: (value: 'white' | 'black') => void;
    diceTop1: number | 0;
    diceTop2: number | 0;
    diceBottom1: number | 0;
    diceBottom2: number | 0;
    setDiceTop1: (value: number) => void;
    setDiceTop2: (value: number) => void;
    setDiceBottom1: (value: number) => void;
    setDiceBottom2: (value: number) => void;
    availableTopDices1: Array<boolean>;
    availableTopDices2: Array<boolean>;
    availableBottomDices1: Array<boolean>;
    availableBottomDices2: Array<boolean>;
    setAvailableTopDices1: (value: Array<boolean>) => void;
    setAvailableTopDices2: (value: Array<boolean>) => void;
    setAvailableBottomDices1: (value: Array<boolean>) => void;
    setAvailableBottomDices2: (value: Array<boolean>) => void;
}

const Board: React.FC<BoardProps> = ({
    currentPlayer,
    setCurrentPlayer,
    diceTop1,
    diceTop2,
    diceBottom1,
    diceBottom2,
    setDiceTop1,
    setDiceTop2,
    setDiceBottom1,
    setDiceBottom2,
    availableTopDices1,
    availableTopDices2,
    availableBottomDices1,
    availableBottomDices2,
    setAvailableTopDices1,
    setAvailableTopDices2,
    setAvailableBottomDices1,
    setAvailableBottomDices2,
}) => {
    const [board, setBoard] = useState<string[][]>([]);
    const [highlightedTriangles, setHighlightedTriangles] = useState<number[]>([]);
    const [selectedTriangle, setSelectedTriangle] = useState<number | null>(null);
    const [brokenPiece, setBrokenPiece] = useState<number[]>([0, 0]); // white, black

    const rightBottom = board.slice(0, 6).reverse();
    const leftBottom = board.slice(6, 12).reverse();
    const leftTop = board.slice(12, 18);
    const rightTop = board.slice(18, 24);

    // Reset board on mount
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/reset')
            .then((res) => res.json())
            .then((data) => {
                setBoard(data.board || []);
            })
            .catch((err) => console.error('Error resetting board:', err));
    }, []);

    // Refetch moves when dice values change
    useEffect(() => {
        if (selectedTriangle !== null) {
            const d1 = currentPlayer === 'white' ? diceTop1 : diceBottom1;
            const d2 = currentPlayer === 'white' ? diceTop2 : diceBottom2;

            if (d1 !== 0 && d2 !== 0 && !(selectedTriangle == 101 || selectedTriangle == 102)) {
                fetchMoves(selectedTriangle, d1, d2);
            } else if (d1 !== 0 && d2 !== 0 && (selectedTriangle == 101 || selectedTriangle == 102)) {
                fetchSaveMoves(selectedTriangle, d1, d2);
            } else {
                setSelectedTriangle(null);
                setHighlightedTriangles([]);
            }
        }
    }, [selectedTriangle, diceTop1, diceTop2, diceBottom1, diceBottom2, currentPlayer]);

    useEffect(() => {
        let isDiceReload = true;
        let merged = [...availableTopDices1, ...availableBottomDices1];
        for (let i = 0; i < merged.length; i++) {
            if (merged[i]) {
                isDiceReload = false;
                break;
            }
        }
        if (isDiceReload) {
            setAvailableTopDices1(Array(6).fill(true));
            setAvailableTopDices2(Array(6).fill(true));
            setAvailableBottomDices1(Array(6).fill(true));
            setAvailableBottomDices2(Array(6).fill(true));
        }
    }, [availableTopDices1, availableBottomDices1]);

    const fetchMoves = (index: number, d1: number, d2: number) => {
        fetch('http://127.0.0.1:5000/api/move', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index, dice1: d1, dice2: d2 }),
        })
            .then((res) => res.json())
            .then((data) => {
                const transformedMoves = (data.moves || []).map((triangleId: number) => {
                    if (triangleId <= 5) return 5 - triangleId;
                    if (triangleId > 5 && triangleId <= 11) return 11 - triangleId + 6;
                    return triangleId;
                });
                setHighlightedTriangles(transformedMoves);
            })
            .catch((err) => console.error('Error getting possible moves:', err));
    };

    const fetchSaveMoves = (index: number, dice1: number, dice2: number) => {
        fetch('http://127.0.0.1:5000/api/piece/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index, dice1, dice2 }),
        })
            .then((res) => res.json())
            .then((data) => {
                const transformedMoves = (data.highlightedPlaces || []).map((triangleId: number) => {
                    if (triangleId <= 5) return 5 - triangleId;
                    if (triangleId > 5 && triangleId <= 11) return 11 - triangleId + 6;
                    return triangleId;
                });
                console.log('Highlighting:', transformedMoves);
                setHighlightedTriangles(transformedMoves);
                console.log('Broken stone triangles shown');
                console.log('higlted tri:', transformedMoves);
                reloadBoard();
            })
            .catch((err) => console.error('Error getting possible moves:', err));
    };

    const reloadBoard = () => {
        fetch('http://127.0.0.1:5000/api/board/reload')
            .then((res) => res.json())
            .then((boardData) => {
                // Set the new board state here
                console.log('boardData.board: ', boardData.board);
                setBoard(boardData.board || []);
                console.log('boardData.broken:', boardData.broken);
                setBrokenPiece(boardData.broken || [0, 0]);
            })
            .catch((err) => console.error('Error reloading board:', err));
    };

    const handleTriangleClick = (index: number) => {
        const dice1 = currentPlayer === 'white' ? diceTop1 : diceBottom1;
        const dice2 = currentPlayer === 'white' ? diceTop2 : diceBottom2;

        if (dice1 === 0 || dice2 === 0) {
            console.warn('Dice values are not set');
            return;
        }
        const isHighYellow = highlightedTriangles.includes(index);

        let tempIndex = index;
        if (tempIndex <= 5) tempIndex = 5 - tempIndex;
        if (tempIndex > 5 && tempIndex <= 11) tempIndex = 11 - tempIndex + 6;

        // Handle broken pieces
        if (index == 101 || index == 102) {
            if (brokenPiece[0] > 0 && currentPlayer === 'white' && index === 101) {
                setSelectedTriangle(101);
                fetchSaveMoves(101, dice1, dice2);
            } else if (brokenPiece[1] > 0 && currentPlayer === 'black' && index === 102) {
                setSelectedTriangle(102);
                fetchSaveMoves(102, dice1, dice2);
            }
        } else if (!isHighYellow && board[tempIndex].length >= 1 && board[tempIndex][0] != currentPlayer) {
            return;
        } else if (isHighYellow && board[tempIndex].length > 1 && board[tempIndex][0] != currentPlayer) {
            return;
        } else if (!isHighYellow && board[tempIndex].length == 0) {
            return;
        } else if (selectedTriangle === index) {
            setSelectedTriangle(null);
            setHighlightedTriangles([]);
            return;
        } else if (isHighYellow && selectedTriangle !== null) {
            fetch('http://127.0.0.1:5000/api/moveTo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ index_from: selectedTriangle, index_to: index }),
            })
                .then((res) => res.json())
                .then(() => {
                    if (currentPlayer == 'white') {
                        setDiceTop1(0);
                        setDiceTop2(0);
                        setAvailableTopDices1(
                            availableTopDices1.map((dice, index) => {
                                if (index === dice1 - 1) {
                                    return false;
                                }
                                return dice;
                            })
                        );
                        setAvailableTopDices2(
                            availableTopDices2.map((dice, index) => {
                                if (index === dice2 - 1) {
                                    return false;
                                }
                                return dice;
                            })
                        );
                    } else {
                        setDiceBottom1(0);
                        setDiceBottom2(0);
                        setAvailableBottomDices1(
                            availableBottomDices1.map((dice, index) => {
                                if (index === dice1 - 1) {
                                    return false;
                                }
                                return dice;
                            })
                        );
                        setAvailableBottomDices2(
                            availableBottomDices2.map((dice, index) => {
                                if (index == dice2 - 1) {
                                    return false;
                                }
                                return dice;
                            })
                        );
                    }

                    setHighlightedTriangles([]);
                    setSelectedTriangle(null);

                    reloadBoard();

                    setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
                })
                .catch((err) => console.error('Error moving piece:', err));
        } else {
            setSelectedTriangle(index);
            fetchMoves(index, dice1, dice2);
        }
    };

    const renderTriangle = (index: number, stack: any, direction: 'top' | 'bottom') => {
        const safeStack = Array.isArray(stack) ? stack : [];
        const isHighlighted = highlightedTriangles.includes(index);
        const triangleClasses = `triangle-${direction} m-1 `;

        return (
            <div
                key={index}
                className={`flex justify-content-center w-2 cursor-pointer ${isHighlighted ? 'bg-yellow-400' : ''} ${selectedTriangle === index ? 'bg-green-400' : ''} ${direction === 'top' ? '' : 'align-items-end'}`}
                onClick={() => handleTriangleClick(index)}
            >
                <div className={triangleClasses}></div>
                <div>
                    {safeStack.map((piece, i) => (
                        <div
                            key={i}
                            className={`piece ${piece === 'white' ? 'bg-white' : 'bg-black'} border-3 border-gray-700 m-1 w-3rem h-3rem`}
                        ></div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="w-135rem h-auto">
            <div className="text-center text-lg font-bold mt-2">
                Current Turn:{' '}
                <span className={currentPlayer === 'white' ? 'text-white' : 'text-black'}>{currentPlayer}</span>
            </div>
            <div className="bg-red-700 flex p-4 border-round-xl">
                <div className="w-6 bg-red-400 mr-1">
                    <div className="flex bg-green-100 h-18rem">
                        {leftTop.map((stack, i) => renderTriangle(i + 12, stack, 'top'))}
                    </div>
                    <div className="flex bg-green-100 h-18rem">
                        {leftBottom.map((stack, i) => renderTriangle(i + 6, stack, 'bottom'))}
                    </div>
                </div>

                <div className="w-6 bg-red-400 ml-1">
                    <div className="flex bg-green-100 h-18rem">
                        {rightTop.map((stack, i) => renderTriangle(i + 18, stack, 'top'))}
                    </div>
                    <div className="flex bg-green-100 h-18rem">
                        {rightBottom.map((stack, i) => renderTriangle(i, stack, 'bottom'))}
                    </div>
                </div>
            </div>
            <div className="flex w-12">
                {/* White broken pieces container */}
                <div
                    key={101}
                    className={`w-6 flex p-1 mt-1 border-round-md mr-1 cursor-pointer ${
                        selectedTriangle === 101 || highlightedTriangles.includes(101) ? 'bg-yellow-400' : 'bg-red-700'
                    }`}
                    onClick={() => handleTriangleClick(101)}
                >
                    {Array.from({ length: brokenPiece[0] }).map((_, i) => (
                        <div key={`white-${i}`} className="piece bg-white border-2 border-gray-700 m-1"></div>
                    ))}
                </div>

                {/* Black broken pieces container */}
                <div
                    key={102}
                    className={`w-6 flex p-1 mt-1 border-round-md justify-end ml-1 cursor-pointer ${
                        selectedTriangle === 102 || highlightedTriangles.includes(102) ? 'bg-yellow-400' : 'bg-red-700'
                    }`}
                    onClick={() => handleTriangleClick(102)}
                >
                    {Array.from({ length: brokenPiece[1] }).map((_, i) => (
                        <div key={`black-${i}`} className="piece bg-black border-2 border-gray-700 m-1"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
