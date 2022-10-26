import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('CognitoIdentityServiceProvider.4eid9s9q0khtii45ko77b20ijt.LastAuthUser'));
  const [userRole, setUserRole] = useState(localStorage.getItem('role'));
  console.log(user);
  useEffect(() => {
      setUser(localStorage.getItem('CognitoIdentityServiceProvider.4eid9s9q0khtii45ko77b20ijt.LastAuthUser'));
      setUserRole(localStorage.getItem('role'));
   
  },[user])
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    {userRole === 'Banks'? (
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}>
            <a href='/campaigns'>Campaigns </a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] `}>
            <a href='/' onClick={ ()=>{localStorage.clear()}}>Logout</a>
        </li>
      </ul>
      ): userRole === 'Users'? (
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}>
            <a href='/home'>Home</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] `}>
            <a href='/' onClick={ ()=>{localStorage.clear()}}>Logout</a>
        </li>
      </ul>
      ):(
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className={`font-poppins font-normal cursor-pointer text-[16px] `}>
            <a href='/login'>Login</a>
        </li>
        </ul>
      )
    }

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
        </div>
      </div>
    </nav>
  );
};

export default Navbar;