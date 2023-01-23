import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './About.css';

function About() {
  const dropdowns = [
    {
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="page">
      <Header />
      <div className="about-content">
        <Banner page="about" />
        <div className="dropdowns">
          {dropdowns.map((dropdown, index) => {
            return (
              <Dropdown
                key={index}
                title={dropdown.title}
                content={dropdown.text}
                isList={false}
                isDetailsDropdown={false}
                defaultStatus="closed"
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
