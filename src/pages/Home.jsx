import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Thumb from '../components/Thumb';
import { getLogements } from '../data/data';
import './Home.css';

export async function loader() {
  const logements = await getLogements();

  if (!logements) {
    throw new Response('', {
      status: 404,
    });
  }

  return logements;
}

function Home() {
  const logements = useLoaderData();

  return (
    <div className="page">
      <Header />
      <div className="content">
        <Banner page="home" />
        <div className="gallery">
          {logements.map((logement, index) => (
            <Thumb key={index} data={logement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
