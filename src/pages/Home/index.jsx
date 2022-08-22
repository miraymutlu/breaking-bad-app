import React from "react";
import Masonry from "react-masonry-css";
import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state)=> state.characters.page);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if(error){
    return <Error message={error}/>;
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

      <div style={{padding:"20px 0 40px 0",textAlign: 'center'}}>
        {isLoading && <Loading />}
        <button onClick={()=>dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</button>
      </div>
    </div>
  );
}

export default Home;
