// "use client";

import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-blue-950 p-7">
      <div className="flex w-[70%] justify-between m-auto items-center">
        <Image src="/images/logo.svg" width={150} height={150} alt="logo" />
        <ul className="list-none text-white flex space-x-16">
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Platforms</li>
          <li className="cursor-pointer">Tools</li>
          <li className="cursor-pointer">Learn</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
