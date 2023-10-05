import React, { useState } from 'react';

const Review = ({ elem }) => {
  const [showFullText, setShowFullText] = useState(false);

  // Split the review text into words
  const words = elem.review.split(' ');

  // Determine the maximum number of words to show initially (25)
  const maxWords = 26;

  return (
    <div className="md:w-[85%] text-xs md:text-base text-center relative z-50">
      {showFullText ? (
        <p>{elem.review}</p>
      ) : (
        <p>
          {words.slice(0, maxWords).join(' ')}{' '}
          {words.length > maxWords && (
            // <button
            //   onClick={() => setShowFullText(true)}
            //   className="text-blue-500 hover:underline"
            // >
            //   Read More
            // </button>
            '.....'
          )}  
        </p>
      )}
    </div>
  );
};

export default Review;
