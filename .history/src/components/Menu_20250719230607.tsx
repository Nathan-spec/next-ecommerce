"use client";
import { useState } from "react";
import Image from "next/image";

const Menu = () => {

    const [open,setOpen] = useState(false);

    return (
        <div className="">
            <Image src="/menu.png" alt="Menu icon"/>
        </div>
    )
}

export default Menu;