import React from 'react';
import Zar1 from './dices/zar1';
import Zar2 from './dices/zar2';
import Zar3 from './dices/zar3';
import Zar4 from './dices/zar4';
import Zar5 from './dices/zar5';
import Zar6 from './dices/zar6';


const Dice: React.FC = () => {
  return (
    <div className='w-12 flex justify-content-center'>
        <div>
            <div className="flex gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
                {/* Zar 1 */}
                <Zar1></Zar1>

                {/* Zar 2 */}
                <Zar2></Zar2>

                {/* Zar 3 */}
                <Zar3></Zar3>

                {/* Zar 4 */}
                <Zar4></Zar4>

                {/* Zar 5 */}
                <Zar5></Zar5>

                {/* Zar 6 */}
                <Zar6></Zar6>
            </div>

            <div className="flex gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
                {/* Zar 1 */}
                <Zar1></Zar1>

                {/* Zar 2 */}
                <Zar2></Zar2>

                {/* Zar 3 */}
                <Zar3></Zar3>

                {/* Zar 4 */}
                <Zar4></Zar4>

                {/* Zar 5 */}
                <Zar5></Zar5>

                {/* Zar 6 */}
                <Zar6></Zar6>
            </div>
        </div>
    </div>
  );
};

export default Dice;
