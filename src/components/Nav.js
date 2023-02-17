import React from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

function Nav(props) {
  const { darkMode, changeTheme } = props;
  return (
    <div className='w-screen flex flex-row justify-between items-center px-8 py-4 bg-LightmodeElement dark:bg-darkModeElementColor dark:text-DarkModeText shadow-md text-lightModeTextColor '>
      {/* Heading */}
      <h4 className='font-bold sm:text-lg text-sm'>Where in the world?</h4>

      {/* Icon and darkmode theme toggle */}
      <div
        className='flex flex-row items-center justify-center hover:cursor-pointer sm:text-sm'
        onClick={changeTheme}
      >
        {darkMode ? (
          <BsFillMoonFill className='mr-2 ' />
        ) : (
          <BsMoon className='mr-2 ' />
        )}
        <p className='text-sm sm:text-lg'>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
}

export default Nav;
