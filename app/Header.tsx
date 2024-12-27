import { Heart, Search, UserRound } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";

import MiniCart from "./components/MiniCart";

const Header = () => {
  return (
    <header className="border border-b py-8">
      <div className="wrapper flex items-center justify-between gap-16">
        {/* Logo Section */}
        <div className="col logo w-full text-center md:w-auto">
          <Link href="/" className="flex items-center gap-1">
            <h1 className="font-bold text-[34px] text-primary">NextBlog</h1>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="col w-full menu hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden w-2/12 text-end">
          <MobileNavbar />
        </div>

    
      </div>
    </header>
  );
};

export default Header;
