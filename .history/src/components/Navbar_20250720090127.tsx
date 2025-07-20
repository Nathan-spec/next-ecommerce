import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="flex items-center justify-between">
        {/* MOBILE */}
        <Link href="/">
        <div className="text-2xl tracking-wide">
            Ikigai 
        </div>
        </Link>
        <Menu />
        </div>
        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center h-full justify-between gap-8">
            {/* LEFT */}
          <div className="w-1/3">
            <Link href="/">
               <Image src="/logo.png" alt="" width={24} height={24}/>
               <div className="text-2xl tracking-wide">IKIGAI</div>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Navbar;