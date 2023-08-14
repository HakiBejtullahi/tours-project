import { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const { id, name, image, info, price } = tour;
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className='tour'>
      <button
        className='btn-remove'
        onClick={() => {
          removeTour(id);
        }}
      >
        X
      </button>
      <header>
        <h3>{name}</h3>
        <p>${price}</p>
      </header>
      <img className='img' src={image} alt={name} />
      <footer>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={handleReadMore} className='btn'>
          {readMore ? 'show less' : 'read more'}
        </button>
      </footer>
    </article>
  );
};

export default Tour;
