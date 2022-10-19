import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {  BrowserRouter,  
          Routes,  
          Route,  
          Link} from"react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" style={{ display: 'flex',
        justifyContent: 'center',
        }}>Home</Link>{''}

        <Link to="/about" style={{  display: 'flex',
        justifyContent: 'center',
        }}>About</Link>{''}

        <Link to="/contact" style={{ display: 'flex',
        justifyContent: 'center',
        }}>Contact</Link>{''}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
