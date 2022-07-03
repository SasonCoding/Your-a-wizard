import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import BubbleEffect from "../../specialEffects/Bubbles/BubbleEffect";
import "./Characters.css";

const Characters = () => {
  const effectRan = useRef(false); //Using this hook to prevent our useEffect from calling the api twice.
  const [currentCharacters, setCurrentCharacters] = useState([]);

  useEffect(() => {
    if(effectRan.current === false) {
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

      return(() => {effectRan.current = true});
    }
  }, []);

  const handleBorderColor = (house) => {
    if(house === "Gryffindor") {
      return "card character-card border-danger";
    } else if(house === "Slytherin") {
      return "card character-card border-success"
    } else if(house === "Hufflepuff") {
      return "card character-card border-warning"
    } else if(house === "Ravenclaw") {
      return "card character-card border-info"
    } else {
      return "card character-card border-secondary"
    }
  }

  return (
    <>
    <div className="container">
      <div className="row pb-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link px-4" style={{ color: "whitesmoke" }} to="/characters/main">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" style={{ color: "whitesmoke" }} to="/characters/students">
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" style={{ color: "whitesmoke" }} to="/characters/staff">
              Staff
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" style={{ color: "whitesmoke" }} to="/characters/good">
              Good
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" style={{ color: "whitesmoke" }} to="/characters/evil">
              Evil
            </Link>
          </li>
        </ul>
      </div>
      {/* TODO: Add Modal, Add on hover effect that displays the characters name. */}
      <div className="container">
        <div className="row justify-content-center pt-4">
          {currentCharacters.map((character, index) => {
            return (
                <div className="col-lg-2 col-md-3 col-sm-4 mx-3 py-4" key={index}>
                  <div className={handleBorderColor(character.house)} style={{ width: "11rem", height: "16rem" }}>
                    {!character.image ? (
                      <div className="card text-center bg-black" style={{ height: "100%" }}>
                        <div className="card-body">
                          <div className="card-text" style={{marginTop: "50%"}}>
                            <h4>{character.name}</h4>
                          </div>
                        </div>
                      </div>) : <img src={character.image} className="card-image" alt={character.name} loading="lazy" />}
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
    <BubbleEffect />
    </>
  );
};

export default Characters;
