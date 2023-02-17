import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ country }) {
  const navigate = useNavigate();

  const HandleCardClick = () => {
    let id = country.cca3.toLowerCase();
    navigate(`/country/${id}`);
  };

  return (
    <div
      onClick={HandleCardClick}
      className='flex  flex-col shadow-md flex-wrap gap-y-4  my-8 justify-between items-start bg-lightModeBackgroundColor text-lightModeTextColor m-2  mx-auto  w-fit dark:text-DarkModeText dark:bg-darkModeElementColor rounded-md'
    >
      <div>
        <img
          style={{ objectFit: "cover", width: "300px", height: "200px" }}
          className='rounded-t-md'
          src={country.flags.svg}
          alt={`${country}'s flag not found.`}
        ></img>
      </div>
      <div className=' flex flex-col mx-3 mb-10 p-3 text-left'>
        <h1 className='py-3 font-bold'>{country.name.common}</h1>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}

export default Card;
