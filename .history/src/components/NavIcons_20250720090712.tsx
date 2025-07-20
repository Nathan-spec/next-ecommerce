
"use client";

import Link from "next/link";
import Image from "next/image";

const NavIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/cart">
        <Image 
          src="/cart.png" 
          alt="Cart icon"
          width={28}
          height={28}
          className="cursor-pointer"
        />
      </Link>
      <Link href="/profile">
        <Image 
          src="/profile.png" 
          alt="Profile icon"
          width={28}
          height={28}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default NavIcons;