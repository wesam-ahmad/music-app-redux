import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navBar } from "../assets/data/data";
import logo from "../assets/images/logo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Avatar, Button } from "@mantine/core";
import { useSelector } from "react-redux";

export const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <header className="fixed top-0 left-0 z-50 w-screen py-2 md:shadow-md shadow-sm bg-white">
      {/* desktop and tablet */}
      <div className="hidden md:flex justify-between px-7 p-2">
        {/* logo */}
        <div className="logo flex">
          <div>
            <img src={logo} alt="logo" width="40px" height="40px" />
          </div>
          <h2 className="text-2xl font-semibold ml-3">
            <Link to={"/music"}>Tunes</Link>
          </h2>
        </div>

        {/* navlinks  */}
        <div className="menu">
          <ul className="flex">
            {navBar.map((list, i) => (
              <li className={`mx-5 py-2 ${activeNavLink}`} key={i}>
                <NavLink to={list.path}>{list.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* profile  */}
        {user.user != null || (
          <div className="flex items-center gap-2">
            <Link to={"/signUp"}>
              <Button
                className="bg-purple-700"
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 60 }}
              >
                Sign up
              </Button>
            </Link>
            <Link to={"/signIn"}>
              <Button variant="outline" color="violet">
                Login
              </Button>
            </Link>
          </div>
        )}
        {user.user != null && (
          <Link to={"/profilePage"}>
            <Avatar src={null} alt="no image here" color="indigo" radius="xl" />
          </Link>
        )}
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden h-full pl-2 pr-8">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <div className="logo flex">
            <div>
              <img src={logo} alt="logo" width="40px" height="40px" />
            </div>
            <h2 className="text-2xl font-semibold ml-3">pluse</h2>
          </div>
        </Link>

        <div>
          {isMenu && (
            <div className="bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full ">
              <ul className="flex flex-col">
                {navBar.map((list, i) => (
                  <li className={`mx-5 py-2  ${activeNavLink}`} key={i}>
                    <NavLink to={list.path}>{list.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <AiOutlineMenu size={20} onClick={() => setIsMenu(!isMenu)} />
        </div>
      </div>
    </header>
  );
};
