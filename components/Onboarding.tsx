import React, { Dispatch, SetStateAction, useState } from "react";
import Splash from "./Splash";

type Props = {
  onboarded: boolean;
  setOnboarded: Dispatch<SetStateAction<boolean>>;
};

const Onboarding = ({ onboarded, setOnboarded }: Props) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000); //For a little delay

  const handleSubmit = () => {
    setOnboarded(true);
  };
  return (
    <>
      {!timePassed && <Splash />}
      {timePassed && <div onClick={handleSubmit}>Onboarding</div>}
    </>
  );
};

export default Onboarding;
