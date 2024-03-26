import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { MotionConfig, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const toggleSearch = () => {
    setIsMenu(false);
    setIsSearch(!isSearch);
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
    setIsSearch(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && isMenu === null) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed backdrop-blur-[1px] w-full h-12 z-[101] top-0 select-none ${
        show === "show"
          ? "bg-[#222831]"
          : show == "hide"
          ? "translate-y-[-60px]"
          : "rgba(0, 0, 0, 0.25)"
      }`}
    >
      <div className="wrapper w-full max-w-[1200px] m-auto pl-[20px]">
        <div className="md:flex pb-2 hidden items-center justify-between">
          <img
            draggable="false"
            onClick={() => {
              navigate("/");
            }}
            className="h-8 mt-2 cursor-pointer"
            src={Logo}
            alt=""
          />
          <ul className="flex items-center justify-center gap-8 text-zinc-100 font-medium">
            <li className="cursor-pointer hover:text-pink-600">Movies</li>
            <li className="cursor-pointer hover:text-pink-600">TV Shows</li>
            <li
              className="cursor-pointer hover:text-pink-600"
              onClick={toggleSearch}
            >
              <FaSearch />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${
          isMenu === true ? "bg-[#061120]" : "bg-transparent"
        } w-full h-12 pb-1 md:hidden flex items-center justify-between px-4`}
      >
        <img draggable="false" onClick={() => {
              navigate("/");
            }} className="h-6 mt-2" src={Logo} alt="" />
        <ul className="flex items-center justify-center gap-5 text-zinc-100">
          <li
            className="cursor-pointer hover:text-pink-600"
            onClick={toggleSearch}
          >
            <FaSearch />
          </li>
          <li onClick={toggleMenu}>
            {isMenu === true ? (
              <RxCross2 className="text-xl" />
            ) : (
              <GiHamburgerMenu className="text-xl" />
            )}
          </li>
        </ul>
      </div>
      {isSearch && (
        <MotionConfig transition={{ duration: 0.25 }}>
          <motion.div
            initial={{ opacity: 0, x: 0, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 200 }}
            className="w-full h-12 bg-zinc-200 flex items-center justify-center"
          >
            <input
              className="w-full outline-none pl-4 py-1 text-xl bg-zinc-200"
              type="text"
              placeholder="Search for a movie or TV show"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={searchQueryHandler}
            />
            <button className="py-4 px-4">
              <RxCross2
                className="text-gray-700 text-xl"
                onClick={toggleSearch}
              />
            </button>
          </motion.div>
        </MotionConfig>
      )}

      {isMenu && (
        <MotionConfig transition={{ duration: 0.25 }}>
          <motion.ul
            initial={{ opacity: 0, x: 0, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 200 }}
            className="bg-[#061120] h-auto py-4 md:hidden flex flex-col gap-4 border-t border-gray-700 text-white font-medium"
          >
            <li className="cursor-pointer hover:text-pink-600 pl-4">Movies</li>
            <li className="cursor-pointer hover:text-pink-600 pl-4">
              TV Shows
            </li>
          </motion.ul>
        </MotionConfig>
      )}
    </div>
  );
};

export default NavBar;
