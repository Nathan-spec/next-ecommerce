import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* MOBILE */}
        <Link href="/"> Ikigai </Link>
        <Menu />
        {/* DESKTOP */}
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Lama Dev E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}