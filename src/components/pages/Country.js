import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";

const path = "https://restcountries.com/v3.1/alpha/";
const borderPath = "https://restcountries.com/v3.1/alpha/";

function Country() {
  const location = useLocation();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [borders, setBorder] = useState();

  useEffect(() => {
    const id = location.pathname.split("/").slice(-1);
    axios.get(path + `/${id}`).then((response) => {
      console.log(response.data);
      setCountry(response.data);
    });
  }, [location.key]);

  return (
    // <></>
    <div className='h-screen w-screen xs:w-[90%] mx-auto py-8 '>
      {/* {console.log(country[0].flags.svg)} */}
      {country && (
        <div className='flex flex-col p-8 gap-y-8 justify-start items-start'>
          <div className='flex justify-start items-start'>
            <button
              className='px-6 py-2 bg-LightmodeElement text-lightModeTextColor rounded-md shadow-md dark:bg-darkModeElementColor dark:text-DarkModeText hover:scale-105'
              onClick={() => navigate("/")}
            >
              <BsArrowLeft className='inline mr-2 text-xl' />
              Back
            </button>
          </div>
          <div className='flex flex-row sm:flex-row justify-start gap-y-4 sm:gap-y-0 sm:gap-x-4 p-2 sm:w-[50%] w-full'>
            <div>
              <img
                src={country[0].flags.svg}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  objectPosition: "center",
                }}
              ></img>
            </div>
            <div className='flex flex-col justify-between items-start py-8 ml-4 px-4 text-lightModeTextColor bg-lightModeBackgroundColor dark:text-DarkModeText dark:bg-darkModeBackgroundColor'>
              <h1 className='text-2xl font-bold mb-6'>
                {country[0].name.common}
              </h1>
              <div className='flex flex-row gap-x-6 gap-y-4 flex-wrap'>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>Native Name: </span>
                  {country[0].name.official}
                </p>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>
                    Top Level Domain:{" "}
                  </span>
                  {country[0].tld?.map((domain) => domain + ",")}
                </p>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>Population: </span>
                  {country[0].population}
                </p>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>Currencies: </span>
                  {Object.keys(country[0].currencies).map(
                    (value) => value + " "
                  )}
                </p>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>Region: </span>
                  {country[0].region}
                </p>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>Languages: </span>
                  {Object.keys(country[0].languages)?.map(
                    (language) => country[0].languages[language] + " "
                  )}
                </p>
                <p className='w-[40%]'>
                  <span className='font-semibold text-md'>sub region: </span>
                  {country[0].subregion}
                </p>
                <p className='w-[100%] mt-3'>
                  <span className='font-semibold text-md'>Capital: </span>
                  {country[0].capital}
                </p>
              </div>
              <div className='flex flex-row gap-x-2 my-6 justify-between items-center'>
                <h3 className='text-xl font-bold mr-2'>
                  <span className='font-semibold text-md'>
                    Border Countries:{" "}
                  </span>
                </h3>
                <div className='  flex flex-row  flex-wrap justify-start items-start'>
                  {country[0].borders.map((border) => (
                    <button
                      onClick={(e) => {
                        console.log(e.target.innerHTML);
                        navigate(
                          `/country/${e.target.innerHTML.toLowerCase()}`
                        );
                      }}
                      className='text-cener mx-2  my-2 px-8 py-1.5 bg-LightmodeElement text-lightModeTextColor dark:bg-darkModeElementColor dark:text-DarkModeText rounded-md shadow-md'
                    >
                      {border}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Country;
