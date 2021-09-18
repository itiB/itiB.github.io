import React from 'react';
import itib_img from './images/itib.jpg';

import "./styles.css";

function Namecard() {
  return (
    <div className="p-4">
      <div className="
        bg-gradient-to-r from-blue-500 to-blue-400 text-white
        w-96 h-56 m-auto rounded-xl shadow-2xl
        transform hover:scale-110 transition-transform">
        <div className="w-full px-8 absolute top-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light">Name</p>
              <p className="text-lg font-medium tracking-widest">
                いちび
              </p>
            </div>
            <div>
              <img className="cardphotos" src={ itib_img } alt="itib_img"></img>
            </div>
          </div>
            <div className="pt-2">
              <p className="font-light">Job</p>
              <p className="text-lg font-medium tracking-widest">
                Programmer
              </p>
            </div>
          {/* <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div>
                <p className="font-light text-xs">BDay</p>
                <p className="font-bold tracking-more-wider text-sm">1997-02-20</p>
              </div>
              <div>
                <p className="font-light text-xs"></p>
                <p className="font-bold tracking-more-wider text-sm"></p>
              </div>
              <div>
                <p className="font-light text-xs"></p>
                <p className="font-bold tracking-more-wider text-sm"></p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Namecard