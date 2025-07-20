
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();

    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            setIsProfileOpen(!isProfileOpen);
        }
    }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image 
          src="/profile.png" 
          alt="Cart icon"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        />
        {isProfileOpen &&  (
            <div className="absolute">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Logout</div>
            </div>
        )}
        <Image 
          src="/notification.png" 
          alt="Notification icon"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <Image 
          src="/cart.png" 
          alt="Cart icon"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen(!isCartOpen)}
          />
    </div>
  );
}

export default NavIcons;