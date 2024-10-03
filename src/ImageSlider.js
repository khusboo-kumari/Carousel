import { useEffect, useState } from "react";
import { data } from "./constant";

const ImageSlider = () => {
  const [changeImg, setChangeImg] = useState(0);

  const changeIt = () => {
    setChangeImg((changeImg + 1) % data.length);
  };
  const prevChange = () => {
    if (changeImg === 0) setChangeImg(data.length - 1);
    else setChangeImg(changeImg - 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      changeIt();
    }, 2000);
    //  Before rending this setTimeOut , We also have to clear the TimeOut
    return () => {
      clearTimeout(timer);
    };
  }, [changeImg]); // Dependency Array, whatever it happens depends on this Array , for eg. here changeImg
  return (
    <div className=" relative flex justify-center bg-orange-400 w-full p-8 md:p-16 lg:p-24">
      <button
        className=" absolute  left-4 md:left-10 lg:left-16  font-bold p-2  m-4 md:p-4 md:m-8  bg-white rounded  "
        onClick={prevChange}
      >
        Prev
      </button>

      {/* <img src={data[changeImg]} className="w-[700px] h-[500px] m-4 object-contain" alt="Ambience" /> */}

      {/*  OPTIMAL WAY  */}

      {data.map((url, i) => (
        <img
          key={i}
          src={url}
          className={
            " w-[90vw] h-[60w] sm:w-[500px] sm:h-[400px]  lg:w-[700px]  lg:h-[500px] m-2 sm:m-4 object-contain " +
            (changeImg === i ? "block" : "hidden")
          }
          alt="Ambience"
        />
      ))}

      <button className=" absolute right-4 md:right-10 lg:right-16   font-bold p-2 m-4 md:p-4 md:m-8 bg-white rounded" onClick={changeIt}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
