import Image from "next/image";
import React from "react";
import ProfilePhoto from "../../assets/skill-detail/profilephoto.svg"

const Info = () => {
  return (
    <div>
      <div>
        <div>
            <Image src={ProfilePhoto} alt="profile_photo" />
          <p>Alicia Jones</p>
        </div>
        <div>
          <p>Available Now</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Info;
