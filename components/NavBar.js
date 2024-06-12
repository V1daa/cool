"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [buttons, setButtons] = useState(false);
  const handleClick = () => {
    setButtons(!buttons);
  };
  return (
    <>
      <nav className="z-50 top-0 w-[100vw] flex justify-between p-5 overflow-hidden">
        <Link
          href={"#container3"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("container3")
              .scrollIntoView({ behavior: "smooth" });
            handleClick();
          }}
        >
          {buttons ? "Go back" : <div></div>}
        </Link>
        <h1 className="uppercase text-blue text-2xl z-10">Volia &trade;</h1>
        <Link
          href={"#container2"}
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("container2")
              .scrollIntoView({ behavior: "smooth" });
            handleClick();
          }}
        >
          {!buttons ? "Go forward" : <div></div>}
        </Link>
      </nav>
      <div>
        <div className={`animc ${buttons ? "" : "active"}`}></div>
        <div className={`animc ${buttons ? "" : "active"}`}></div>
        <div className={`animc ${buttons ? "" : "active"}`}></div>
        <div className={`animc ${buttons ? "" : "active"}`}></div>
      </div>
    </>
  );
}
