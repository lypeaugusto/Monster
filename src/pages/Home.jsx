import React from 'react';
import jinxImg from '../assets/Jinxlayout.png';
import JINXL from '../assets/JIINXL.png';

const Home = () => {
  return (
    <main className="h-full w-full overflow-hidden">
      <section className="flex w-full h-full bg-gradient-to-br from-[#401C33] via-[#732959] to-[#30588C]">

        <div
          className="w-1/2 bg-center bg-no-repeat bg-contain flex items-center justify-center transition-all duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${JINXL})` }}
        >
        </div>

        <div
          className="w-1/2 bg-no-repeat bg-contain flex items-center justify-center transition-all duration-700 hover:scale-110 -translate-x-20"
          style={{
            backgroundImage: `url(${jinxImg})`,
          }}
        >
        </div>

      </section>
    </main>
  );
};

export default Home;