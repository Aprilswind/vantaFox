import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {FaDiscord} from 'react-icons/fa'
import {motion} from 'framer-motion'

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
    document.querySelector(".icon")?.classList.toggle("open");
  };
  return (
    <motion.header 
    initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{delay: 0.2}}
           className="dark:bg-darker/80 backdrop-blur-md fixed w-full left-0 top-0 z-30">
      <div className="flex p-4 items-center justify-between">
        <Link href="/">
          <img src="/logo_dark.png" className="w-[150px]" alt="vantafox logo"/>
        </Link> 
        <nav className="items-center md:flex hidden">
          <Link href="/" className="text-vanta text-2xl navlink mx-4 my-2">
            Home
          </Link>
          <Link href="/about" className="text-vanta text-2xl navlink mx-4 my-2">
            About
          </Link>
          <Link href="/team" className="text-vanta text-2xl navlink mx-4 my-2">
            Team
          </Link>
          <Link
            href="/contact"
            className="text-vanta text-2xl navlink mx-4 my-2"
          >
            Contact
          </Link>
          <Link href="https://discord.gg/vantafox" className="md:mx-0 mx-auto py-2 px-4 bg-vanta text-white w-fit rounded-lg flex"> <FaDiscord className="text-2xl"/>Discord</Link>
        </nav>
        <nav className={`items-center md:hidden flex-col absolute left-0 top-20 dark:bg-darker w-full ${nav ? "flex" : "hidden"}`}>
          <Link href="/" className="text-vanta text-2xl navlink mx-4 my-2">
            Home
          </Link>
          <Link href="/about" className="text-vanta text-2xl navlink mx-4 my-2">
            About
          </Link>
          <Link href="/team" className="text-vanta text-2xl navlink mx-4 my-2">
            Team
          </Link>
          <Link
            href="/contact"
            className="text-vanta text-2xl navlink mx-4 my-2"
          >
            Contact
          </Link>
          <Link href="https://discord.gg/vantafox" className="md:mx-0 mx-auto py-2 px-4 bg-vanta text-white w-fit rounded-lg flex"> <FaDiscord className="text-2xl"/>Discord</Link>
        </nav>
        <div className="md:hidden flex z-30">
          <div className="icon nav-icon-5" onClick={handleclick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
