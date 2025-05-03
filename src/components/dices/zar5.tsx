import React from 'react';

const Zar5: React.FC<ZarProps> = ({ isSelected, isUsed }) => {
    let bgClass = 'bg-green-100';
  
    if (isUsed) {
      bgClass = 'bg-red-300';
    } else if (isSelected) {
      bgClass = 'bg-green-700';
    }
  
    return (
      <div className={`grid grid-nogutter w-2rem h-2rem border-2 ${bgClass}`}>
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
  );
};

export default Zar5;
