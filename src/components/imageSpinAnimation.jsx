import React,{useState} from "react";
import Image from "next/image";

export default function ImageSpinAnimation() {
    const [scrollY, setScrollY] = useState(0);
    const [spin, setSpin] = useState(0);
    const [size, setSize] = useState(350);

    return <Image src="/images/me.png" alt="hero" width={size} height={size} />
}