import React, { useState } from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
}

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => (
  <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto text-center">
    <div className="bg-gradient-to-b from-[#D5AEF1] to-[#6A93FF] rounded-t-lg flex items-end justify-center h-[240px]">
      <div className="w-[120px] h-[120px] bg-white/20 rounded-[10px] border-[1px] border-white flex items-center justify-center -mb-4">
        <span className="w-[64px] h-[64px] flex justify-center items-center">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 0.600006C3.46535 0.600006 0.599976 3.46538 0.599976 7.00001V13.4C0.599976 16.9346 3.46535 19.8 6.99998 19.8H13.4C16.9346 19.8 19.8 16.9346 19.8 13.4V7.00001C19.8 3.46538 16.9346 0.600006 13.4 0.600006H6.99998Z"
              fill="white"
            />
            <path
              d="M6.99998 26.2C3.46535 26.2 0.599976 29.0654 0.599976 32.6V39C0.599976 42.5346 3.46535 45.4 6.99998 45.4H13.4C16.9346 45.4 19.8 42.5346 19.8 39V32.6C19.8 29.0654 16.9346 26.2 13.4 26.2H6.99998Z"
              fill="white"
            />
            <path
              d="M26.2 7.00001C26.2 3.46538 29.0654 0.600006 32.6 0.600006H39C42.5346 0.600006 45.4 3.46538 45.4 7.00001V13.4C45.4 16.9346 42.5346 19.8 39 19.8H32.6C29.0654 19.8 26.2 16.9346 26.2 13.4V7.00001Z"
              fill="white"
            />
            <path
              d="M26.2 32.6C26.2 29.0654 29.0654 26.2 32.6 26.2H39C42.5346 26.2 45.4 29.0654 45.4 32.6V39C45.4 42.5346 42.5346 45.4 39 45.4H32.6C29.0654 45.4 26.2 42.5346 26.2 39V32.6Z"
              fill="white"
            />
          </svg>
        </span>{" "}
        {/* Placeholder icon */}
      </div>
    </div>
    <div className="h-[200px]">
      <h2 className="text-base font-[500] mt-4 text-[#666666]">{card.title}</h2>
      <p className="text-sm text-[#888888] mt-2 px-5">{card.description}</p>
    </div>
  </div>
);

export default Card;
