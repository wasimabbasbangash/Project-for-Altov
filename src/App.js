import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Country from "./components/pages/Country";

const baseURL = "https://restcountries.com/v3.1/all";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [countries, setCountries] = useState();

  // fetch the data from the countries api
  useEffect(() => {
    const fetchCountries = () => {
      axios.get(baseURL).then((response) => {
        setCountries([...response.data]);
      });
    };

    fetchCountries();
    console.log(countries);
  }, []);

  // alter between dark and light mode
  const HandleThemeChange = () => {
    setDarkmode(!darkMode);
  };

  return (
    <div
      className={`h-screen w-full mx-auto transition-colors duration-300  
    ${darkMode ? "dark" : ""}`}
    >
      <div className='h-screen w-full mx-auto transition-colors duration-300 dark:bg-darkModeBackgroundColor dark:text-DarkModeText bg-lightModeBackgroundColor text-LightmodeElement'>
        <Nav darkMode={darkMode} changeTheme={HandleThemeChange}></Nav>
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={
                countries && <Main darkMode={darkMode} countries={countries} />
              }
            ></Route>
            <Route path='/country/:id' element={<Country />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
