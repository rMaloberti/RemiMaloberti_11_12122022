import Banner from '../components/Banner';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div className="page">
      <Header />
      <div className="content">
        <Banner page="home" />
      </div>
    </div>
  );
}

export default Home;
