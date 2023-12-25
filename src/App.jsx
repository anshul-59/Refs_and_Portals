import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Eezee" targetTime={1}/>
        <TimerChallenge title="Kinda Easy" targetTime={5}/>
        <TimerChallenge title="Difficult" targetTime={10}/>
        <TimerChallenge title="I don't think you can do it" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
