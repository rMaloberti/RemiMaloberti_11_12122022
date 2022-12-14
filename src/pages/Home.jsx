import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
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
      <div className="home-content">
        <Banner page="home" />
        <div className="gallery">
          {logements.map((logement, index) => (
            <Thumb key={index} data={logement} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
