import { useState } from "react";
import Card from "./Card";

interface CardData {
  id: number;
  title: string;
  description: string;
}

type Props = {
  handleShowWallet: () => void;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "List Your Skills",
    description:
      "Create a profile and list the skills or services you offer. Browse skills offered by others.",
  },
  {
    id: 2,
    title: "Find a Job",
    description:
      "Search for jobs that match your skills and apply directly through our platform.",
  },
  {
    id: 3,
    title: "Connect with Peers",
    description:
      "Join communities and connect with other professionals in your field.",
  },
];

const CardCarousel: React.FC<Props> = ({handleShowWallet}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex > 0 ? prevIndex - 1 : cards.length - 1
  //   );
  // };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="p-4">
      <Card card={cards[currentIndex]} />
      {/* Pagination */}
      <div className="flex justify-center -mt-10">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-[#6A93FF]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        {/* {currentIndex > 0 && (
          <button
            className="bg-[#6A93FF] text-white px-4 py-2 rounded-[12px] mr-2"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )} */}
        <button
          className="bg-[#6A93FF] text-white w-[240px] h-[44px] px-4 py-2 rounded-[12px] ml-2"
          onClick={currentIndex === cards.length - 1 ? handleShowWallet : handleNext}
        >
          {currentIndex === cards.length - 1 ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
