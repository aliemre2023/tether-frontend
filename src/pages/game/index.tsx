import { useRouter } from 'next/router';

const Game = () => {
    const router = useRouter();

    return (
        <div className='flex w-12 h-screen justify-content-center align-items-center bg-blue-300'>
            <div className='w-12'>
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div> 
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

            <div className='w-12 flex align-items-center justify-content-center'>
                <div className="flex flex-column gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
                    {/* Zar 1 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        
                    </div>

                    {/* Zar 2 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                    </div>

                    {/* Zar 3 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                    </div>

                    {/* Zar 4 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                    </div>

                    {/* Zar 5 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                    </div>

                    {/* Zar 6 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-column gap-4 p-4 bg-red-700 m-1 border-round-xl shadow-3" style={{ width: 'max-content' }}>
                    {/* Zar 1 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        
                    </div>

                    {/* Zar 2 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                    </div>

                    {/* Zar 3 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                    </div>

                    {/* Zar 4 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                    </div>

                    {/* Zar 5 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center"></div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                    </div>

                    {/* Zar 6 */}
                    <div className="grid grid-nogutter w-2rem h-2rem border-2 bg-green-100">
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                        <div className="col-4 flex justify-content-center align-items-center">
                            <div className="border-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>

    );
};

export default Game;