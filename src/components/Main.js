import { React, useState, useEffect } from "react";
import Gallery from "./gallery/Gallery";
import Searchbar from "./Searchbar";

const options = [
  "All Regions",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

function Main({ countries, darkMode }) {
  console.log(countries);
  const [isOpen, setIsOpen] = useState(false);
  const [regionFilter, setRegionFiler] = useState("All Regions");
  const [countrieslist, setCountriesList] = useState([...countries]);

  useEffect(() => {
    filterCountries();
  }, [regionFilter]);

  //   handle click on the region filter
  const HandleClickOnFilter = (event) => {
    setRegionFiler(event.target.text);
    setIsOpen(false);
  };

  //   Method for filtering countries based on region
  const filterCountries = () => {
    if (regionFilter !== "All Regions") {
      let newList = countries.filter(
        (country) => country.region === regionFilter
      );
      setCountriesList([...newList]);
    } else {
      setCountriesList([...countries]);
    }
  };

  return (
    <div className='h-screen w-screen xs:w-[90%] mx-auto '>
      <div className='flex xs:flex-row flex-col justify-start xs:justify-between items-center gap-y-4  xs:gap-y-0 mt-16 px-4 '>
        {/* search bar */}
        <Searchbar></Searchbar>
        {/* filter */}
        <div className='flex items-center shadow-md rounded-md w-full xs:w-[20%]'>
          <div className='relative w-full p-3  dark:bg-darkModeElementColor bg-LightmodeElement border-slate-300 border-1px'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='w-full relative flex z-10 focus:outline-none xs:justify-between justify-between'
            >
              <span className='text-lightModeTextColor dark:text-DarkModeText'>
                {regionFilter}
              </span>
              <svg
                className='w-4 h-4 mt-1 ml-2 dark:text-DarkModeText text-lightModeTextColor'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M6 9l6 6 6-6' />
              </svg>
            </button>
            {isOpen && (
              <div className=' dark:bg-darkModeElementColor bg-LightmodeElement border-slate-300 absolute left-0 mt-4 py-2 w-full rounded-lg shadow-xl'>
                <ul>
                  {options.map((option) => (
                    <li
                      className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'
                      onClick={(event) => HandleClickOnFilter(event)}
                    >
                      <a
                        className='block text-lightModeTextColor dark:text-DarkModeText'
                        href='#'
                      >
                        {option}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Gallery countries={countrieslist}></Gallery>
    </div>
  );
}

export default Main;
