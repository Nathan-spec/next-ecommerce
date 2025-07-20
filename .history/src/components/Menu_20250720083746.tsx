"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {

    const [open,setOpen] = useState(false);

    return (
        <div className="">
            <Image 
                src="/menu.png" 
                alt="Menu icon"
                width={28}
                height={28}
                className="cursor-pointer"
                onClick={(prev => !prev)}
                />{
                    open && (
                        <div className="">
                            <Link href="/">Homepage</Link>
                            <Link href="/">Dresses</Link>
                            <Link href="/">Tops</Link>
                            <Link href="/">Bottoms</Link>
                            <Link href="/">Outwear</Link>
                            <Link href="/">Accessories</Link>
                        </div>
                    )
                }
        </div>
    )
}

export default Menu;