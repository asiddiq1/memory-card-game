import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/header.jsx'
import Card from './components/card.jsx'
import ScoreBoard from './components/scoreboard.jsx'


function App() {
  const [pokeList, setPokemonList] = useState([])
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [scoreList, setScoreList] = useState([]);


  useEffect(() => {
  async function storePokemon(){
    try{

      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=12");
      if (!response.ok){
        throw new Error("Failed to fetch data")
      }
      const data = await response.json();
  
      for(let i = 0; i < data.results.length; i++) {
        const pokemon = await fetch(data.results[i].url);
        if (!pokemon.ok){
          throw new Error("Failed to fetch pokemon data")
        }
        const pokedata = await pokemon.json();
        data.results[i]["img"] = pokedata.sprites.front_default;
      }
      setPokemonList(data.results);
    } catch (error)
    {
      console.log("Error fetching data")
    }
  }
  storePokemon();
}, []);


function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

const handleCardClick = (name) => {
  let pokeArr = [...pokeList]
  shuffle(pokeArr);
  setPokemonList(pokeArr);

  
  if (!scoreList.includes(name)){
    setScoreList([...scoreList, name]);
    setScore(score + 1);
    if (score + 1 > highScore){
      setHighScore(score + 1);
    }
    if (score + 1 == pokeList.length){
      setScore(0);
      setScoreList([]);
    }
  }
  else{
    setScoreList([]);
    setScore(0);
  }

}

console.log(pokeList)


  return (
    <>
      <Header/>
      <ScoreBoard score={score} highScore={highScore}/>
      <div className="card-container">
        {pokeList.map((pokemon, index) => {
          return (
            <Card key={index} name={pokemon.name} img={pokemon.img} onClick={() =>handleCardClick(pokemon.name)} />
          );
        })}
      </div>
    </>
  )
}

export default App;
