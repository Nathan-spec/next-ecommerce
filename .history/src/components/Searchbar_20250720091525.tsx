"use client";

import Image from "next/image";


const Searchbar = () => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md w-full max-w-md">
        <input 
            type="text" 
            placeholder="Search" 
            className="flex-1 bg-transparent outline-none"
        />
        <button className="cursor-pointer">
            <Image 
                src="/search.png" 
                alt="Search icon"
                width={24}
                height={24}
            />
        </button>
    </form>
  );
}

export default Searchbar;