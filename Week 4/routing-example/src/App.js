import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

const Home = (props) => {
  return(
    <div>
      <h1> Home Component </h1>
      <Link to={"/about"}>Go to About</Link>
    </div>
  );
}

const About = (props) => {
  return(
    <div>
      <h1>About Component</h1>
      <Link to={"/"}>Go Home</Link>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
