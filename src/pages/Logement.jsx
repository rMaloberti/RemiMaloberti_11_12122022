import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
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
          <div className="infos__logement">
            <Title title={logement.title} location={logement.location} />
            <div className="infos__logement__tags">
              {logement.tags.map((tag) => (
                <Tag tag={tag} />
              ))}
            </div>
          </div>
          <div className="infos__hosting">
            <Host host={logement.host} />
            <Rating rating={parseInt(logement.rating)} />
          </div>
        </div>
        <div className="details">
          <Dropdown
            title="Description"
            content={logement.description}
            isList={false}
            isDetailsDropdown={true}
            defaultStatus="opened"
          />
          <Dropdown
            title="Équipements"
            content={logement.equipments}
            isList={true}
            isDetailsDropdown={true}
            defaultStatus="opened"
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;
