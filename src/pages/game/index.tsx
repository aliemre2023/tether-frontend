import { useRouter } from 'next/router';
import Market from '../../components/market';
import Board from '../../components/board';
import Zar1 from '../../components/dice/zar1';
import Zar2 from '../../components/dice/zar2';
import Zar3 from '../../components/dice/zar3';
import Zar4 from '../../components/dice/zar4';
import Zar5 from '../../components/dice/zar5';
import Zar6 from '../../components/dice/zar6';

const Game = () => {
    const router = useRouter();

    return (
        <div className='flex w-12 h-screen justify-content-center align-items-center bg-blue-300'>
            <div className="w-12 flex justify-content-center align-items-center">
                <Market></Market>
            </div>

            <Board></Board>

            <div className='w-12 flex align-items-center justify-content-center'>
                <div className="flex flex-column gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
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

                <div className="flex flex-column gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
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

export default Game;