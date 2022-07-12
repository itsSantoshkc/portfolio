import type { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";

const Navbar: NextPage = () => {
  const [hamBurgerStatus, sethamBurgerStatus] = useState<Boolean>(false);
  const handleHamburger = () => {
    sethamBurgerStatus(!hamBurgerStatus);
  };
  return (
    <>
      <nav className="navbar">
        <div onClick={handleHamburger} className="hamburger">
          <div className={`line ${hamBurgerStatus ? "open" : ""}`}></div>
        </div>
        <ul className={`navLinks ${hamBurgerStatus ? "open" : ""}`}>
          <Link href={"/"}>
            <li>
              <span className="navLink">Home</span>
            </li>
          </Link>
          <Link href={"/projects"}>
            <li>
              <span className="navLink">Projects</span>
            </li>
          </Link>
          <Link href={"/aboutMe"}>
            <li>
              <span className="navLink">About</span>
            </li>
          </Link>
          <Link href={"/contact"}>
            <li>
              <span className="navLink">Contact</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
