import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    return (
        <div className='flex w-full h-screen justify-content-center align-items-center'>
            <div>
            <div className="text-center bg-green-300 border-round-xl border-bottom-3 border-left-3 border-gray-700">
                <div className="p-3 text-xl">Home Page</div>
                <div className="p-3">
                    <button onClick={() => router.push("healthcheck")} className="bg-blue-500 text-white p-2 border-round-md">
                        Go to healthcheck
                    </button>
                </div>
                <div className="p-3 bg-purple-300 border-round-md m-2"><a href="https://primeflex.org/">https://primeflex.org/</a></div>
                <div className="p-3 bg-purple-300 border-round-md m-2"><a href="https://primereact.org/">https://primereact.org/</a></div>
                
            </div> 
            <div className="p-3">
                <a href="https://github.com/aliemre2023">https://github.com/aliemre2023</a>
            </div>
        </div>
                        
        </div>
            

    );
};

export default Home;