// import BasicReact from '../src/Components/BasicReact/BasicReact';
// import ReactFEatures from './Components/BasicReact/ReactFEatures';
// import Demo from '../src/Components/BasicReact/PassingComponentsAsProp';

import { useState } from "react";
import GameBoard from "./Components/Tictactoe/GameBoard";
import Player from "./Components/Tictactoe/Player";

function App() {
  const [activePlayer,setIsActivePlayer] = useState('X');

  function checkActivePlayer(){
    setIsActivePlayer((currentActivePlayer)=> currentActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <div id='game-container' className="App">
      <ol id='players' className="highlight-player">
        <Player Symbol="X" Name="guhan" isActive={activePlayer==='X'} />
        <Player Symbol="O" Name="jegan" isActive={activePlayer==='O'} />
      </ol>
      <GameBoard checkActivePlayer={checkActivePlayer} activePlayerSymbol={activePlayer}/>
    </div>
  );
}

export default App;
