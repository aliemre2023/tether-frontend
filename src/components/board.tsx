import React, { useEffect, useState } from 'react';

interface BoardProps {
  dice1: number | null;
  dice2: number | null;
}

const Board: React.FC<BoardProps> = ({ dice1, dice2 }) => {
  const [board, setBoard] = useState<string[][]>([]);
  const [highlightedTriangles, setHighlightedTriangles] = useState<number[]>([]);
  const [selectedTriangle, setSelectedTriangle] = useState<number | null>(null);

  // Reset board on mount
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/reset')
      .then(res => res.json())
      .then(data => {
        setBoard(data.board || []);
      })
      .catch(err => console.error('Error resetting board:', err));
  }, []);

  // Refetch moves when dice values change
  useEffect(() => {
    if (selectedTriangle !== null && dice1 !== null && dice2 !== null) {
      fetchMoves(selectedTriangle, dice1, dice2);
    }
  }, [dice1, dice2]);

  const fetchMoves = (index: number, d1: number, d2: number) => {
    fetch('http://127.0.0.1:5000/api/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index, dice1: d1, dice2: d2 })
    })
      .then(res => res.json())
      .then(data => {
        const transformedMoves = (data.moves || []).map((triangleId: number) => {
          if (triangleId <= 5) return 5 - triangleId;
          if (triangleId > 5 && triangleId <= 11) return 11 - triangleId + 6;
          return triangleId;
        });
        setHighlightedTriangles(transformedMoves);
      })
      .catch(err => console.error('Error getting possible moves:', err));
  };

  const handleTriangleClick = (index: number) => {
    if (dice1 == null || dice2 == null) {
      console.warn('Dice values are not set');
      return;
    }

    setSelectedTriangle(index);
    fetchMoves(index, dice1, dice2);
  };

  const renderTriangle = (index: number, stack: any, direction: 'top' | 'bottom') => {
    const safeStack = Array.isArray(stack) ? stack : [];
    const isHighlighted = highlightedTriangles.includes(index);
    const triangleClasses = `triangle-${direction} m-1 `;

    return (
      <div
        key={index}
        className={`flex justify-content-center w-2 cursor-pointer ${isHighlighted ? 'bg-yellow-400' : ''} ${selectedTriangle === index ? 'bg-green-400' : ''}`}
        onClick={() => handleTriangleClick(index)}
      >
        <div className={triangleClasses}></div>
        <div className={`${direction === 'top' ? '' : 'pieces-container'}`}>

          {safeStack.map((piece, i) => (
            <div
              key={i}
              className={`piece ${piece === 'white' ? 'bg-white' : 'bg-black'} border border-gray-700 `}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  const rightBottom = board.slice(0, 6).reverse();
  const leftBottom = board.slice(6, 12).reverse();
  const leftTop = board.slice(12, 18);
  const rightTop = board.slice(18, 24);

  return (
    <div className='w-135rem h-auto bg-red-700 flex p-4 border-round-xl'>
      <div className='w-6 bg-red-400 mr-1'>
        <div className='flex bg-green-100 h-18rem'>
          {leftTop.map((stack, i) => renderTriangle(i + 12, stack, 'top'))}
        </div>
        <div className='flex bg-green-100 h-18rem'>
          {leftBottom.map((stack, i) => renderTriangle(i + 6, stack, 'bottom'))}
        </div>
      </div>

      <div className='w-6 bg-red-400 ml-1'>
        <div className='flex bg-green-100 h-18rem'>
          {rightTop.map((stack, i) => renderTriangle(i + 18, stack, 'top'))}
        </div>
        <div className='flex bg-green-100 h-18rem'>
          {rightBottom.map((stack, i) => renderTriangle(i, stack, 'bottom'))}
        </div>
      </div>
    </div>
  );
};

export default Board;
