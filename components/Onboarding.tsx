import React, { Dispatch, SetStateAction, useState } from "react";
import Splash from "./Splash";
import CardCarousel from "./CardCarousel";

type Props = {
  onboarded: boolean;
  setOnboarded: Dispatch<SetStateAction<boolean>>;
};

const Onboarding = ({ onboarded, setOnboarded }: Props) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2000); //For a little delay

  const handleSubmit = () => {
    setOnboarded(true);
  };

  const words = [
    { id: 1, value: "Apple" },
    { id: 2, value: "Mango" },
    { id: 3, value: "Banana" },
  ];
  const [wordData, setWordData] = useState(words[0].value);
  // const handleClick = (index: any) => {
  //   console.log(index);
  //   const wordSlider = words[index].value;
  //   setWordData(wordSlider);
  // };

  const [currentIndex, setCurrentIndex] = useState(0);


  // const prev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
  //   const wordSlider = words[currentIndex].value;
  //   console.log("curr2 ", currentIndex);
  //   setWordData(wordSlider);
  // };
  // const next = () => {
  //   setCurr((curr) => (curr === words.length - 1 ? 0 : curr + 1));
  //   const wordSlider = words[curr].value;
  //   console.log(curr);
  //   setWordData(wordSlider);
  // };
  return (
    <>
      {!timePassed && <Splash />}
      {timePassed && (
        <div>
          <CardCarousel />
        </div>
      )}
    </>
  );
};

export default Onboarding;
