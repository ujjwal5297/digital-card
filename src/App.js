// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Interests from './components/Interests';
import Option from './ujjwal.jpeg'
// import Option from './Option.png'
import facebook from './Facebook Icon.png'
import email from './email.png'
import twitter from './Twitter Icon.png'
import insta from './Instagram Icon.png'
import linkedin from './linkedin.png'
import git from './GitHub Icon.png'

function App() {
  return (
    
  <div className='container'>
  <img src={Option} className='click' alt='Profile'/>
  <div className='content'>
  <h1>Ujjwal Sharma</h1>
  <h4>React Developer</h4>
  <img src={email} className='image' alt='email'/>
  <img src={linkedin} className='image' alt='linkedin'/>
  <About/>
  </div>
  {/* <Interests/> */}
  <img src={twitter} className='icons' id='icon' alt='twitter'/>.
  <img src={facebook} className='icons' alt='facebook'/>.
  <img src={insta} className='icons' alt='instagram'/>.
  
  <img src={git} className='icons' alt='git hub'/>
    
  </div>
  );
}

export default App;
