import { useState } from "react";

export default function Player({Name , Symbol,isActive}){
    const [isEditing , setisEditing] = useState(false);
    const [playerName , setisplayerName] = useState(Name);

    return (
      <li className={isActive ? 'active' : ''}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              onChange={(e) => setisplayerName(e.target.value)}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{Symbol}</span>
        </span>
        <button onClick={() => setisEditing(isEditing => !isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    );
}