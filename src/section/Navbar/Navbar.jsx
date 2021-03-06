import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let [shadow, setShadow] = useState(false);
  let [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const navStyle =
    "p-0 overflow-hidden max-h-[0px] md:max-h-max lg:overflow-visible invisble transition-all duration-300 md:visible";

  const shadowNav = () => {
    if (window.scrollY >= 30) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  const removeStyle = () => {
    const nav = document.querySelector(".this-mobile");
    nav.removeAttribute("style");
    setOpen(false);
  };
  const navTogler = () => {
    const nav = document.querySelector(".this-mobile");
    const open = "visible";
    nav.classList.toggle(open);
    if (nav.classList.contains(open)) {
      setOpen(true);
      nav.style.maxHeight = nav.scrollHeight + "px";
    } else {
      nav.removeAttribute("style");
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
    <header className="w-full fixed top-0 z-30">
      <nav
        className={`w-full max-w-7xl mx-auto lg:my-2 relative ${
          shadow ? "shadow-lg shadow-ungu/30 bg-ungu" : "bg-white"
        } lg:rounded-lg transition-all duration-300 py-1`}
      >
        <div
          className="flex flex-col md:flex-row w-full 
           md:justify-between md:items-center px-3 py-2"
        >
          <Link to={"/"}>
            <h1
              className={`font-open text-2xl font-normal ${
                shadow ? "text-white" : "text-ungu"
              } cursor-pointer transition-all duration-300`}
              onClick={removeStyle}
            >
              E - Quran
            </h1>
          </Link>
          <button
            className={`nav-togler absolute right-3 top-1 md:hidden ${
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
              <Link to={"/"}>
                <li
                  className={`block md:inline-block md:mx-2 hover:md:scale-125 hover:translate-y-[0.1rem] transition-all duration-300 cursor-pointer py-1 md:py-0 px-1 ${
                    location.pathname === "/"
                      ? "text-ungu bg-white rounded-md font-semibold"
                      : ""
                  }`}
                  onClick={navTogler}
                >
                  Home
                </li>
              </Link>
              <Link to={"/read"}>
                <li
                  className={`block md:inline-block md:mx-2 hover:md:scale-125 hover:translate-y-[0.1rem] transition-all duration-300 cursor-pointer py-1 md:py-0 px-1 ${
                    location.pathname === "/read"
                      ? "text-ungu bg-white rounded-md font-semibold"
                      : ""
                  } `}
                  onClick={navTogler}
                >
                  Read
                </li>
              </Link>
              {/* <li
                className="block md:inline-block md:mx-2 hover:md:scale-125 hover:translate-y-[0.1rem] transition-all duration-300 cursor-pointer py-1 md:py-0 px-1"
                onClick={navTogler}
              >
                About
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
