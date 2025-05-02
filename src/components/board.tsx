import React from 'react';




const Board: React.FC = () => {
  return (
    <div className='w-40rem h-36rem bg-red-300 flex'>
                <div className='w-6 bg-red-400 mr-1'>
                    <div className='flex bg-green-100 h-18rem '>
                        <div className='triangle-top m-1 '></div>
                        <div className='triangle-top m-1 '></div>
                        <div className='triangle-top m-1 '></div>
                        <div className='triangle-top m-1 '></div>
                        <div className='triangle-top m-1 '></div>
                        <div className='triangle-top m-1 '></div>
                    </div>
                    <div className='flex bg-green-100 h-18rem'>
                        <div className='triangle-bottom m-1 '></div>
                        <div className='triangle-bottom m-1 '></div>
                        <div className='triangle-bottom m-1 '></div>
                        <div className='triangle-bottom m-1 '></div>
                        <div className='triangle-bottom m-1 '></div>
                        <div className='triangle-bottom m-1 '></div>
                    </div>
                </div>
              
                <div className='w-6 bg-red-400 ml-1'>
                    <div className='flex bg-green-100 h-18rem '>
                            <div className='triangle-top m-1 '></div>
                            <div className='triangle-top m-1 '></div>
                            <div className='triangle-top m-1 '></div>
                            <div className='triangle-top m-1 '></div>
                            <div className='triangle-top m-1 '></div>
                            <div className='triangle-top m-1 '></div>
                        </div>
                        <div className='flex bg-green-100 h-18rem'>
                            <div className='triangle-bottom m-1 '></div>
                            <div className='triangle-bottom m-1 '></div>
                            <div className='triangle-bottom m-1 '></div>
                            <div className='triangle-bottom m-1 '></div>
                            <div className='triangle-bottom m-1 '></div>
                            <div className='triangle-bottom m-1 '></div>
                        </div>
                </div>
            </div>
  );
};

export default Board;
