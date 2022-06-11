import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  let [shadow, setShadow] = useState(false);
  let [isOpen, setOpen] = useState(false);

  const navStyle =
    "p-0 overflow-hidden max-h-[0px] md:max-h-max lg:overflow-visible invisble transition-all duration-300 md:visible";

  const shadowNav = () => {
    if (window.scrollY >= 80) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const navTogler = () => {
    const addStyle = document.querySelector(".this-mobile");
    const open = "visible";
    addStyle.classList.toggle(open);
    if (addStyle.classList.contains(open)) {
      setOpen(true);
      addStyle.style.maxHeight = addStyle.scrollHeight + "px";
    } else {
      addStyle.removeAttribute("style");
      setOpen(false);
    }
  };

  useEffect(() => {
    const togler = document.querySelector(".nav-togler");
    if (!togler) return;
    togler.addEventListener("click", navTogler);
    window.addEventListener("scroll", shadowNav);
  }, []);

  return (
    <header className="w-screen fixed top-0 z-30">
      <nav
        className={`w-full max-w-7xl mx-auto lg:my-2 bg-opacity-80 relative ${
          shadow ? "shadow-xl bg-[#110776]" : "bg-white"
        } lg:rounded-lg transition-all duration-300 py-1`}
      >
        <div
          className="flex flex-col md:flex-row w-full 
           md:justify-between md:items-center px-3 py-2"
        >
          <h1
            className={`font-open text-2xl font-normal ${
              shadow ? "text-white" : "text-[#110776]"
            } cursor-pointer transition-all duration-300`}
          >
            E - Quran
          </h1>
          <button
            className={`nav-togler absolute right-0 top-2 md:hidden ${
              shadow ? "text-white" : "text-black"
            } transition-all duration-300`}
          >
            <Hamburger distance="sm" toggled={isOpen} />
          </button>
          <div className={`this-mobile ${navStyle}`}>
            <ul
              className={`font-poppins ${
                shadow ? "text-white" : "text-black text-opacity-70"
              } pt-2`}
            >
              <li
                className="block md:inline-block md:mx-2 hover:md:scale-125 hover:translate-y-[0.1rem] transition-all duration-300 cursor-pointer py-1 md:py-0"
                onClick={navTogler}
              >
                Home
              </li>
              <li
                className="block md:inline-block md:mx-2 hover:md:scale-125 hover:translate-y-[0.1rem] transition-all duration-300 cursor-pointer py-1 md:py-0"
                onClick={navTogler}
              >
                Read
              </li>
              <li
                className="block md:inline-block md:mx-2 hover:md:scale-125 hover:translate-y-[0.1rem] transition-all duration-300 cursor-pointer py-1 md:py-0"
                onClick={navTogler}
              >
                About
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;