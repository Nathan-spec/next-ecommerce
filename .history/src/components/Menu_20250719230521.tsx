"use client";
import { useState } from "react";

const Menu = () => {

    const [open,setOpen] = useState(false);

    return (
        <div className="">
            <Image src="/menu.png"/>
        </div>
    )
}

export default Menu;