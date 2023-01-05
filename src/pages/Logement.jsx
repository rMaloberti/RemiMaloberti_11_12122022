import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Host from '../components/Host';
import Title from '../components/Title';
import { getLogement } from '../data/data';
import './Logement.css';

export async function loader({ params }) {
  const logement = await getLogement(params.id);

  if (!logement) {
    throw new Response('', {
      status: 404,
    });
  }
  
  return logement;
}

function Logement() {
  const logement = useLoaderData();
  
  return (
    <div className="page">
      <Header />
      <div className="logement-content">
        <Carousel pictures={logement.pictures} />
        <div className="infos">
          <div className="infos__row">
            <Title title={logement.title} location={logement.location} />
            <Host host={logement.host} />
          </div>
          <div className="infos__row"></div>
          <div className="infos__row"></div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
