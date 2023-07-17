import './App.css';
import BgAnimation from './components/BgAnimation.js';
import NavBar from './components/NavBar.js';
import ProjectGrid from './components/ProjectGrid.js';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header id="home">
        <h1>Nitin Ramadoss</h1>
        <h1>"Build whatever you want" - me (2023)</h1>
        <BgAnimation/>
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
