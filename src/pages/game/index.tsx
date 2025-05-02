import { useRouter } from 'next/router';
import Market from '../../components/market';
import Board from '../../components/board';
import Dice from '../../components/dice';

const Game = () => {
    const router = useRouter();

    return (
        <div className='flex w-12 h-screen justify-content-center align-items-center bg-blue-300'>
            
            <Market></Market>
            
            <Board></Board>

            <Dice></Dice>
            
        </div>

    );
};

export default Game;