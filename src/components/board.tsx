import React, { useEffect, useState } from 'react';

const Board: React.FC = () => {
  const [board, setBoard] = useState<string[][]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/reset')
      .then(res => res.json())
      .then(data => {
        console.log('Reset board:', data.board);
        setBoard(data.board);
      })
      .catch(err => console.error('Error resetting board:', err));
  }, []);



  const renderTriangle = (index: number, stack: any, direction: 'top' | 'bottom') => {
    const safeStack = Array.isArray(stack) ? stack : [];

    if (direction === 'top') {
      return (
        <div key={index} className='w-2'>
          <div className={`triangle-${direction} m-1`}></div>
          {/* Directly render individual pieces without a container */}
          {safeStack.map((piece, i) => (
            <div
              key={i}
              className={`piece ${piece === 'white' ? 'bg-white' : 'bg-black'} border border-gray-700`}
            ></div>
          ))}
        </div>
      );
    } else {
      return (
        <div key={index} className='w-2'>
          <div className={`triangle-${direction} m-1`}></div>
          <div className='pieces-container'>
            {safeStack.map((piece, i) => (
              <div
                key={i}
                className={`piece ${piece === 'white' ? 'bg-white' : 'bg-black'} border border-gray-700`}
              ></div>
            ))}
          </div>
        </div>
      );
    }
  };

  // Right Bottom (0,5 from right to left)
  const rightBottom = board.slice(0, 6).reverse();

  // Left Bottom (6,11 from right to left)
  const leftBottom = board.slice(6, 12).reverse();

  // Left Top (12,17 from left to right)
  const leftTop = board.slice(12, 18);

  // Right Top (18,23 from left to right)
  const rightTop = board.slice(18, 24);

  return (
    <div className='w-135rem h-36rem bg-red-300 flex'>
      <div className='w-6 bg-red-400 mr-1'>
        <div className='flex bg-green-100 h-18rem'>
          {leftTop.map((stack, i) => renderTriangle(i, stack, 'top'))}
        </div>
        <div className='flex bg-green-100 h-18rem'>
          {leftBottom.map((stack, i) => renderTriangle(i + 6, stack, 'bottom'))}
        </div>
      </div>

      <div className='w-6 bg-red-400 ml-1'>
        <div className='flex bg-green-100 h-18rem'>
          {rightTop.map((stack, i) => renderTriangle(i + 12, stack, 'top'))}
        </div>
        <div className='flex bg-green-100 h-18rem'>
          {rightBottom.map((stack, i) => renderTriangle(i + 18, stack, 'bottom'))}
        </div>
      </div>
    </div>
  );
};

export default Board;
