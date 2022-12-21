import Header from '../components/Header';
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
  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default Logement;
