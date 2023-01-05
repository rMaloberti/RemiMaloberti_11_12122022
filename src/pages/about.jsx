import Banner from '../components/Banner';
import Header from '../components/Header';
import './About.css';

function About() {
  return (
    <div className="page">
      <Header />
      <div className="about-content">
        <Banner page="about" />
      </div>
    </div>
  );
}

export default About;
