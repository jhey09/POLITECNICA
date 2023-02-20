import Prev from "@/components/icons/Prev";
import Next from "@/components/icons/Next";

import Img1 from "@/assets/images/img1.jpeg";
import Img2 from "@/assets/images/img2.jpeg";
import Img3 from "@/assets/images/img3.jpeg";
import Img4 from "@/assets/images/img4.jpeg";
import Img5 from "@/assets/images/img5.jpeg";
import Img6 from "@/assets/images/img6.jpeg";
import Img7 from "@/assets/images/img7.jpeg";
import Img8 from "@/assets/images/img8.jpeg";
import { useState } from "react";

const Imagenes = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

export default () => {
  const [index, setIndex] = useState(0);

  const DezlizarNext = () => {
    index === Imagenes.length - 1 ? setIndex(0) : setIndex(index + 1);
    
  };
  const DezlizarPrev = () => {
    index === 0 ? setIndex(Imagenes.length - 1) : setIndex(index - 1);
    
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4 ">
        <img src={Imagenes[index]} alt="" className=" foto aspect-[12/15]"/>
        <div className="absolute top-1/2  left-0 flex w-full justify-between px-4">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            onClick={DezlizarPrev}
          >
            <Prev />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            onClick={DezlizarNext}
          >
            <Next />
          </button>
        </div>
      </div>

      <img src={Img2} alt="" className="hidden md:block" />
      <img src={Img3} alt="" className="hidden md:block" />
      <img src={Img4} alt="" className="hidden md:block" />
      <img src={Img5} alt="" className="hidden md:block" />
      <img src={Img6} alt="" className="hidden md:block" />
      <img src={Img7} alt="" className="hidden md:block" />
      <img src={Img8} alt="" className="hidden md:block" />
    </section>
  );
};
