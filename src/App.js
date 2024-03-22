import './App.css';
import Navbar from './Components/section/Navbar';
import Presentation from './Components/section/Presentation';
import Blog from './Components/section/Blog';
import Projects from './Components/section/Projects';
import Footer from './Components/section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Blog/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
