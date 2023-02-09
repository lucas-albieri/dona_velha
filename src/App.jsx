
import Game from './components/Game/game';
import './styles/global_styles.css';
import wave from './assets/wave.svg';

function App() {
  return (
    <div
      style={ {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${ wave })`,
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'top',
        backgroundSize: 'cover',
      } }
    >
      <h1
        style={ {
          textAlign: 'center',
          fontSize: '5rem',
          fontWeight: 'bold',
          textShadow: '-1px 5px 5px  #7747E0',
          color: '#fff',
        } }
      >
        Dona Velha
      </h1>
      <div
        style={ {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        } }
      >
        <Game />
      </div>
    </div>
  );
}

export default App;
