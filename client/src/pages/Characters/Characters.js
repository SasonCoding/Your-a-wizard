import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import BubbleEffect from "../../specialEffects/Bubbles/BubbleEffect";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./Characters.css";

const Characters = () => {
  const effectRan = useRef(false); //Using this hook to prevent our useEffect from calling the api twice because of the strict mode.
  const [currentCharacters, setCurrentCharacters] = useState(null);
  const [charactersCategory, setCharactersCategory] = useState("main");

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
    if(charactersCategory === 'main') {
      return (currentCharacters.map((character, index) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
            <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem"}}>
              {!character.image ? (
                <div className="card text-center bg-black" style={{ height: "100%" }}>
                  <div className="card-body">
                    <div className="card-text" style={{ marginTop: "50%" }}>
                      <h4>{character.name}</h4>
                    </div>
                  </div>
                </div>
              ) :
                <img src={character.image} className="card-image" alt={character.name} loading="lazy" />}
            </div>
          </div>
        )
      }))
    } else if(charactersCategory === 'students') {
      return (currentCharacters.filter((character => {return character.hogwartsStudent === true})).map((character, index) => {
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
                <img src={character.image} className="card-image" alt={character.name} loading="lazy" />}
            </div>
          </div>
        )
      }))
    } else if(charactersCategory === 'staff') {
      return (currentCharacters.filter((character => {return character.hogwartsStaff === true})).map((character, index) => {
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
                <img src={character.image} className="card-image" alt={character.name} loading="lazy" />}
            </div>
          </div>
        )
      }))
    }else if(charactersCategory === 'house') {
      return (currentCharacters.filter((character => {return character.house === 'Gryffindor'})).map((character, index) => {
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
                <img src={character.image} className="card-image" alt={character.name} loading="lazy" />}
            </div>
          </div>
        )
      }))
    } else {
      return (currentCharacters.filter((character => {return character.hogwartsStudent === true})).map((character, index) => {
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
                <img src={character.image} className="card-image" alt={character.name} loading="lazy" />}
            </div>
          </div>
        )
      }))
    }
  }

  return (
    <>
      <div className="container">  {/* TODO: Add a drop down for the different houses */}
        <div className="row pb-2">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link characters-nav px-4 character-link" style={charactersCategory === "main" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('main') }}>
                Main
              </Link>
            </li>
            <li className="nav-item characters-nav">
              <Link className="nav-link px-4 character-link" style={charactersCategory === "students" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('students') }}>
                Students
              </Link>
            </li>
            <li className="nav-item characters-nav">
              <Link className="nav-link px-4 character-link" style={charactersCategory === "staff" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('staff') }}>
                Staff
              </Link>
            </li>
            <li className="nav-item characters-nav">
              <Link className="nav-link px-4 character-link" style={charactersCategory === "house" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('house') }}>
                House
              </Link>
            </li>
            <li className="nav-item characters-nav">
              <Link className="nav-link px-4 character-link" style={charactersCategory === "evil" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('evil') }}>
                Evil
              </Link>
            </li>
          </ul>
        </div>
        {/* TODO: Add Modal, Add on hover effect that displays the characters name, Check if theres an option to add different onHover color for each character. */}
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
