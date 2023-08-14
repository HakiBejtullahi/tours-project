import React from 'react';
import Tour from './Tour';
const url = 'https://course-api.com/react-tours-project';
const Tours = ({ tours, removeTour, fetchData }) => {
  if (tours.length < 1) {
    return (
      <div className='tours-container'>
        <button
          className='btn'
          onClick={() => {
            fetchData(url);
          }}
        >
          get tours
        </button>
      </div>
    );
  }

  return (
    <section className='tours-container'>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
