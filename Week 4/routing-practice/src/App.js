import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { useParams } from "react-router-dom";


function App() {
  const Home = (props) => {
    return (
      <div>
        <h1>Welcome Home</h1>
      </div>
    )
  }
  
  const Number = (props) => {
    const {num} = useParams();
  return (
    <div>{num}</div>
  )
}
  const Word = (props) => {
    const {word} = useParams();
    return (
      <div>
        <h1>The word is: {word}</h1>
      </div>
    )
  }

  const Colors = (props) => {
    const {color1} = useParams();
    const {color2} = useParams();

    return (
      <div style={{backgroundColor: color1 }}>
        <h1 style={{color: color2 }}>Hello World</h1>
      </div>
    )

  }
  return (
    <BrowserRouter>
        <p>
          <Link to="/">Home</Link>
           |  
          <Link to="/number/4">4</Link>
           |  
          <Link to="/word/hello">Hello</Link>
           | 
          <Link to="/colors/blue/red">Colors</Link>
        </p>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/number/:num" element= {<Number />} />
        <Route path="/word/:word" element= {<Word />}/>
        <Route path="/colors/:color1/:color2" element= {<Colors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
