import { useRouter } from 'next/router';
import Market from './market';
import Board from './board';
import Dice from './dice';
import React, { useState } from 'react';

const Storage = () => {
    return (
        <div className="flex flex-wrap justify-content-center gap-1 m-1 p-1 bg-green-100 border-round-md">
            <div className="border-round w-6rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
                1
            </div>
            <div className="border-round w-6rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
                2
            </div>
            <div className="border-round w-6rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
                3
            </div>
            <div className="border-round w-6rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
                4
            </div>
            <div className="border-round w-6rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
                5
            </div>
            <div className="border-round w-6rem h-6rem bg-primary font-bold flex align-items-center justify-content-center">
                6
            </div>
        </div>
    );
};

export default Storage;
