import { useRouter } from 'next/router';

const Game = () => {
    const router = useRouter();

    return (
        <div className='flex w-12 h-screen justify-content-center align-items-center bg-blue-300'>
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
            
            
        </div>

    );
};

export default Game;