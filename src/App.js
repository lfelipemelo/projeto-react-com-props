import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HelloUser from './components/HelloUser';
import ContadorClick from './components/ContadorClick';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HelloUser nome = "Felipe"></HelloUser>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ContadorClick></ContadorClick>

    </div>
  );
}

export default App;
