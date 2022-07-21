import React from 'react';
import { Link } from 'react-router-dom';

const SubNavbar = () => {
  return (
    <div className="bg-black">
    <ul className="nav justify-content-center bg-black mt-5">
      <li className="nav-item">
        <Link className="nav-link px-4" to="/documentation"> {/* This Page will have brief explanation about the wizardly world and the writer */}
          Documentation
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link px-4" to="/characters">  {/* This page will have all the different characters information for example: Main char, Students, Staff, Good, Evil */}
          Characters
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link px-4" to="/books">  {/* This page will have all the general information that are related to the wizardly world for example: Books, Potions, Spells... */}
          Books
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link px-4" to="/forms">  {/* This page will have the forms that will include QA */}
          Forms
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default SubNavbar