import { useState } from "react";
import Card from "./Card";

interface CardData {
    id: number;
    title: string;
    description: string;
  }

const cards: CardData[] = [
    {
      id: 1,
      title: "List Your Skills",
      description: "Create a profile and list the skills or services you offer. Browse skills offered by others.",
    },
    {
      id: 2,
      title: "Find a Job",
      description: "Search for jobs that match your skills and apply directly through our platform.",
    },
    {
      id: 3,
      title: "Connect with Peers",
      description: "Join communities and connect with other professionals in your field.",
    },
  ];

const CardCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
    };
  
    return (
      <div className="p-8">
        <Card card={cards[currentIndex]} />
        <div className="flex justify-center mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  export default CardCarousel;