import React from "react";
import Image from "next/image";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  ,
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

function Header() {
  return (
    <div>
      {/*Logo*/}
      <div className="flex gap-2 item-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI Trip planner</h2>
      </div>
      {/*Menu options*/}
      <div>
        {menuOptions.map((menu, index) => (
          <h2>{menu.name}</h2>
        ))}
      </div>
      {/*Get started button*/}
    </div>
  );
}

export default Header;
