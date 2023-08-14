import Tours from './components/Tours';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  if (isLoading) {
    return (
      <main>
        <div className='section-center'>
          <h1 className='section-title'>Tours Project</h1>
          <Loading />
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className='section-center'>
        <h1 className='section-title'>Tours Project</h1>
        <Tours tours={tours} removeTour={removeTour} fetchData={fetchData} />
      </div>
    </main>
  );
}

export default App;
