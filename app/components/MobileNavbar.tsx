import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Tutorials", href: "/" },
  { label: "Categories", href: "/" },
  { label: "Resources", href: "/" },
];

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="mt-2 text-primary">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="mt-8">
            <nav className="mb-5">
              <ul className="mt-4 space-y-4 text-sm text-black text-start">
                {links.map((link) => (
                  <li className="border-b border-primary pb-2" key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetDescription>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
