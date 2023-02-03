import './App.css';
import Content from './components/content/Content';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Content />
    </div>
  );
}

export default App;
