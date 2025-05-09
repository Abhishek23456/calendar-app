import React from "react";

export default function Header({ month, year, onPrev, onNext, onToday }) {
  return (
    <div className="flex justify-between items-center mb-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md">
      <button 
        onClick={onPrev} 
        className="flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Prev
      </button>
      
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-white">
          {month} <span className="font-normal">{year}</span>
        </h2>
        <button 
          onClick={onToday} 
          className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
        >
          Today
        </button>
      </div>
      
      <button 
        onClick={onNext} 
        className="flex items-center justify-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}