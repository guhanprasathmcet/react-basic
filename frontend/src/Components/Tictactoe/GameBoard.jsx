import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({checkActivePlayer, activePlayerSymbol}) {
    const [gameBoard,SetGameBoard] = useState(initialGameBoard);

    function handleClick(rowIndex,colindex){
        SetGameBoard( (currentGameBoard) => {
            const updatedGameBoard = [...currentGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colindex] = activePlayerSymbol;
            return updatedGameBoard;
        })

        checkActivePlayer();
    }

    return(
        <ol id='game-board'>
            {gameBoard.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playersymbol,colindex)=>(
                            <li key={colindex}><button onClick={() => handleClick(rowIndex,colindex)}>{playersymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}