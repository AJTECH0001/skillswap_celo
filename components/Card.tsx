import React, { useState } from 'react';

interface CardData {
    id: number;
    title: string;
    description: string;
  }
  

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => (
  <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto text-center">
    <div className="bg-gradient-to-b from-purple-200 to-blue-400 rounded-t-lg h-48 flex items-center justify-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <span className="text-4xl text-blue-500">📋</span> {/* Placeholder icon */}
      </div>
    </div>
    <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
    <p className="text-gray-600 mt-2">{card.description}</p>
  </div>
);

export default Card;