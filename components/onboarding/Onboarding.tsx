import React, { Dispatch, SetStateAction, useState } from "react";
import Splash from "./Splash";
import CardCarousel from "./CardCarousel";
import WalletCard from "./WalletCard";
import Profile from "./Profile";

type Props = {
  onboarded: boolean;
  setOnboarded: Dispatch<SetStateAction<boolean>>;
};

const Onboarding = ({ onboarded, setOnboarded }: Props) => {
  const [timePassed, setTimePassed] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2000); //For a little delay

  const handleSubmit = () => {
    setOnboarded(true);
  };

  const handleShowWallet = () => {
    setShowWallet(true);
  };

  const handleShowProfile = () => {
    setShowProfile(true);
  };
  return (
    <>
      {!timePassed && <Splash />}
      {timePassed && (
        <div className="h-auto bg-[#F5F5F5]">
          {!showWallet && <CardCarousel handleShowWallet={handleShowWallet} />}
          {showWallet && !showProfile && (
            <WalletCard handleShowProfile={handleShowProfile} />
          )}
          {showProfile && <Profile handleSubmit={handleSubmit} />}
        </div>
      )}
    </>
  );
};

export default Onboarding;
