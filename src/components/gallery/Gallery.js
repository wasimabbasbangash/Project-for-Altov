import Card from "../card/Card";
import React, { useEffect, useState } from "react";

function Gallery({ countries }) {
  const [countriesToDisplay, setCountriesToDisplay] = useState([...countries]);
  //   console.log(countriesToDisplay);
  return (
    <div className='flex flex-row flex-wrap justify-start items-start overflow-auto dark:bg-darkModeBackgroundColor bg-lightModeBackgroundColor dark:text-DarkModeText text-lightModeTextColor'>
      {countries && countries.map((country) => <Card country={country}></Card>)}
    </div>
  );
}

export default Gallery;
