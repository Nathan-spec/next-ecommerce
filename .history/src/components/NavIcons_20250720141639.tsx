
"use client";

import Link from "next/link";
import Image from "next/image";

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6">
        <Image 
          src="/profile.png" 
          alt="Cart icon"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        {isProfileOpen &&  <div className="">
            
            </div>}
      
        <Image 
          src="/profile.png" 
          alt="Profile icon"
          width={28}
          height={28}
          className="cursor-pointer"
        />
    </div>
  );
}

export default NavIcons;