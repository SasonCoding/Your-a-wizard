import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import CharactersNavbar from "./CharactersNavbar";
import BubbleEffect from "../../specialEffects/Bubbles/BubbleEffect";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./Characters.css";

const Characters = () => {
  const effectRan = useRef(false); //Using this hook to prevent our useEffect from calling the api twice because of the strict mode.
  const [currentCharacters, setCurrentCharacters] = useState(null);
  const [charactersCategory, setCharactersCategory] = useState("all");

  useEffect(() => {
    if (effectRan.current === false) {
      const handleCharacters = async () => {
        try {
          const response = await axios.get('http://localhost:3000/wizardlyInfo/wizards');
          const [...characters] = response?.data?.returnedCharacters;
          setCurrentCharacters(characters);
        } catch (error) {
          console.log(error?.response?.data);
        }
      }
      handleCharacters();

      return (() => { effectRan.current = true }); //Clean up.
    }
  }, []);

  const handleBorderColor = (house) => {
    if (house === "Gryffindor") {
      return "card character-card-gryffindor border-danger";
    } else if (house === "Slytherin") {
      return "card character-card-slytherin border-success"
    } else if (house === "Hufflepuff") {
      return "card character-card-hufflepuff border-warning"
    } else if (house === "Ravenclaw") {
      return "card character-card-ravenclaw border-info"
    } else {
      return "card character-card-none border-secondary"
    }
  }

  const handleCharactersDisplay = () => {
    if (charactersCategory === 'all') {
      return (currentCharacters.map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4 card-container" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <div>
                  <img src={character.image} className="card-image" alt={character.name} loading="lazy" />
                  <div className="overlay">
                    <h2>{character.name}</h2>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }))
    } else if (charactersCategory === 'students') {
      return (currentCharacters.filter((character => { return character.hogwartsStudent === true })).map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <div>
                  <img src={character.image} className="card-image" alt={character.name} loading="lazy" />
                  <div className="overlay">
                    <h2>{character.name}</h2>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }))
    } else if (charactersCategory === 'staff') {
      return (currentCharacters.filter((character => { return character.hogwartsStaff === true })).map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <div>
                  <img src={character.image} className="card-image" alt={character.name} loading="lazy" />
                  <div className="overlay">
                    <h2>{character.name}</h2>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }))
    } else if (charactersCategory === 'pure-blood' || charactersCategory === 'half-blood' || charactersCategory === 'muggleborn') {
      return (currentCharacters.filter((character => { return character.ancestry === charactersCategory })).map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <div>
                  <img src={character.image} className="card-image" alt={character.name} loading="lazy" />
                  <div className="overlay">
                    <h2>{character.name}</h2>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }))
    } else if (charactersCategory === 'Gryffindor' || charactersCategory === 'Slytherin' || charactersCategory === 'Hufflepuff' || charactersCategory === 'Ravenclaw') {
      return (currentCharacters.filter((character => { return character.house === charactersCategory })).map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <div>
                  <img src={character.image} className="card-image" alt={character.name} loading="lazy" />
                  <div className="overlay">
                    <h2>{character.name}</h2>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }))
    } else {
      return (currentCharacters.filter((character => { return character.hogwartsStudent === true })).map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <div>
                  <img src={character.image} className="card-image" alt={character.name} loading="lazy" />
                  <div className="overlay">
                    <h2>{character.name}</h2>
                  </div>
                </div>
              }
            </div>
          </div>
        )
      }))
    }
  }

  return (
    <>
      <div className="container">
        <CharactersNavbar
          charactersCategory={charactersCategory}
          setCharactersCategory={setCharactersCategory}
        />
        {/* TODO: Add Modal*/}
        <div className="container">
          <div className="row justify-content-center pt-4">
            {currentCharacters ? handleCharactersDisplay() : <LoadingSpinner />}
          </div>
        </div>
      </div>
      <BubbleEffect />
    </>
  );
};

export default Characters;
