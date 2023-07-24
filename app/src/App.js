import './App.css';
import BgAnimation from './components/BgAnimation.js';
import StatusCard from "./components/StatusCard.js";
import NavBar from './components/NavBar.js';
import ProjectGrid from './components/ProjectGrid.js';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header id="home">
        <div id= "nameContainer">
          <h1 id='name'>Nitin Ramadoss</h1>
          <h1 id='quote'>"Build whatever you want" - me (2023)</h1>
        </div>
        <BgAnimation/>
        <StatusCard />
        <div className='spacer' />
      </header>
      <section id="projectSection">
        <ProjectGrid />
      </section>
      <section id="skillsSection">
        <Skills />
      </section>
    </div>
  );
}

export default App;
