"use client";

import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
    >
      {label}
    </div>
  );
};

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {}, []);

  return (
    <nav>
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <Image
          src={"/images/logo.png"}
          className="h-4 lg:h-7"
          alt={""}
          width={80}
          height={80}
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label={"Home"} active />
          <NavbarItem label={"Series"} />
          <NavbarItem label={"Films"} />
          <NavbarItem label={"New & Popular"} />
          <NavbarItem label={"My List"} />
          <NavbarItem label={"Browse by Languages"} />
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <ChevronDownIcon />
          <MobileMenu />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <MagnifyingGlassIcon className="w-6" />
          </div>

          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BellIcon className="w-6" />
          </div>

          <div
            onClick={() => {}}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src={"/images/default-blue.png"}
                alt={""}
                width={40}
                height={40}
              />
            </div>

            <ChevronDownIcon className="w-4 text-white fill-white transition rotate-180" />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
