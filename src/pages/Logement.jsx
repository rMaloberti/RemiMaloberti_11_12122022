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
    <div>
      <h1>Logement</h1>
    </div>
  );
}

export default Logement;
