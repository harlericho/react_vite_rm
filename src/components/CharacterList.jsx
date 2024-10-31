import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-3" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
