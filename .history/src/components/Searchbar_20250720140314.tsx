"use client";

import Image from "next/image";


const Searchbar = () => {

  // Function to handle search submission
const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get("name");
  // Handle the search logic here, e.g., redirect to a search results page
  console.log("Search query:", query);
}


  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md w-full max-w-md" onSubmit={handleSearch}>
        <input 
            type="text"
            name="name" 
            placeholder="Search" 
            className="flex-1 bg-transparent outline-none"
        />
        <button className="cursor-pointer" title="Search">
            <Image 
                src="/search.png" 
                alt="Search icon"
                width={16}
                height={16}
            />
        </button>
    </form>
  );
}

export default Searchbar;