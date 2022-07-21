import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CharactersNavbar = ({ charactersCategory, setCharactersCategory }) => {
    const [bloodDropDown, setBloodDropDown] = useState(false);
    const [houseDropDown, setHouseDropDown] = useState(false);
    
    return (
        <div className="row pb-2">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link px-4 character-link" style={charactersCategory === "all" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('all') }}>
                        All
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-4 character-link" style={charactersCategory === "staff" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('staff') }}>
                        Staff
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-4 character-link" style={charactersCategory === "students" ? { textDecorationColor: "#ffc107" } : {}} to="/characters" onClick={() => { setCharactersCategory('students') }}>
                        Students
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle character-link"
                        style={charactersCategory === "pure-blood" || charactersCategory === "half-blood" || charactersCategory === "muggleborn" ? {textDecorationColor: "#ffc107"} : {}}
                        to="/characters"
                        role="button"
                        onClick={() => { setBloodDropDown(!bloodDropDown); setHouseDropDown(false) }}
                    >
                        Blood
                    </Link>
                    <ul
                        className={(bloodDropDown) ? "dropdown-menu dropdown-menu-dark show" : "dropdown-menu dropdown-menu-dark"}
                        style={{backgroundColor: "#1d1f22"}}
                    >
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("pure-blood"); setBloodDropDown(false); }}>
                                <h5>Pure</h5>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("half-blood"); setBloodDropDown(false); }}>
                                <h5>Half-Blood</h5>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("muggleborn"); setBloodDropDown(false); }}>
                                <h5>Muggles</h5>
                            </button>
                        </li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle character-link"
                        style={charactersCategory === "Gryffindor" || charactersCategory === "Slytherin" || charactersCategory === "Hufflepuff" || charactersCategory === "Ravenclaw" ? {textDecorationColor: "#ffc107"} : {}}
                        to="/characters"
                        role="button"
                        onClick={() => { setHouseDropDown(!houseDropDown); setBloodDropDown(false) }}
                    >
                        House
                    </Link>
                    <ul
                        className={(houseDropDown) ? "dropdown-menu show dropdown-menu-dark" : "dropdown-menu dropdown-menu-dark"}
                        style={{backgroundColor: "#1d1f22"}}
                    >
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("Gryffindor"); setHouseDropDown(false); }}>
                                <h5>Gryffindor</h5>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("Slytherin"); setHouseDropDown(false); }}>
                                <h5>Slytherin</h5>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("Hufflepuff"); setHouseDropDown(false); }}>
                                <h5>Hufflepuff</h5>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => { setCharactersCategory("Ravenclaw"); setHouseDropDown(false); }}>
                                <h5>Ravenclaw</h5>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default CharactersNavbar