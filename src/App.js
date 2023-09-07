import logo from './logo.svg';
import './App.css';
import './styles/css/style.css';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='background-image'>
        <Navbar />
        <Hero title="Wir erstellen eine Webseite" subtitle="Subtitle" />
        <Portfolio />
        <Services />
        {/* <Testimonials /> */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
