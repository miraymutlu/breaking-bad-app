import React from "react";
import Masonry from "react-masonry-css";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error}</div>
  }
  return (
    <div>
      <h1>Characters</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.img} alt={character.name} className="character"/>
            <div className="character_name">{character.name}</div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
