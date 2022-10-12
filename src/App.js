import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors';
import MemoryMatch  from './components/MemoryMatch/MemoryMatch';
import WhacAMole from './components/WhacAMole/WhacAMole';
import Breakout from './components/Breakout/Breakout';
import Frogger from './components/Frogger/Frogger';
import ConnectFour from './components/ConnectFour/ConnectFour';
import SpaceInvaders from './components/SpaceInvaders/SpaceInvaders';

function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/rock-paper-scissors':
      component = <RockPaperScissors />
      break
    case '/memory-match':
      component = <MemoryMatch />
      break
    case '/whac-a-mole':
      component = <WhacAMole />
      break
    case '/breakout':
      component  = <Breakout />
      break
    case '/frogger':
      component = <Frogger />
      break
    case '/connect-four':
      component = <ConnectFour />
      break
    case '/space-invaders':
      component = <SpaceInvaders />
      break
  }

  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
