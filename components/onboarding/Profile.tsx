import React from "react";

type Props = {
  handleSubmit: () => void;
};

const Profile = ({handleSubmit}: Props) => {
  return (
    <div>
      <div className="pt-4">
        <h1 className="text-[#666666] font-[500] text-base text-center pt-3">
          Setup Profile
        </h1>
        <p className="text-sm text-[#888888] text-center pt-3">
          Provide accurate information to help others find you and your skills.
        </p>

        <div className="flex flex-col justify-center items-center pt-14">
          <div className="w-[140px] h-[140px] bg-[#D9D9D9] font-[500]"></div>
          <a className="text-center text-sm text-[#6A93FF] underline font-[500] pt-3 cursor-pointer">
            Edit Photo
          </a>
        </div>

        <div className="max-w-md mx-auto mt-10 mb-3 px-4">
          <form>
            <div className="mb-6">
              <label
                className="block text-[#666666] text-sm font-[500] mb-2"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#666666] text-sm font-[500] mb-2"
                htmlFor="bio"
              >
                Bio:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="bio"
                placeholder="Write a short bio about yourself"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#666666] text-sm font-[500] mb-2"
                htmlFor="skills"
              >
                Skills:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="skills"
                type="text"
                placeholder="List your skills or services"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#666666] text-sm font-[500] mb-2"
                htmlFor="additional-info"
              >
                Additional info:
              </label>
              <input
                className="h-[44px] border-[1px] border-black rounded-[8px] w-full py-2 px-3 text-[#888888] leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="additional-info"
                type="text"
                placeholder="start typing"
              />
            </div>
          </form>
        </div>

        <div className="max-w-md mx-auto px-4 pt-6 pb-5">
          <button onClick={handleSubmit} className="bg-[#6A93FF] w-full text-white h-[44px] rounded-[12px]">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
