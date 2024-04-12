"use client"

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <Link href={'/'}>
            <Image
            src='/next.svg'
            width={100}
            height={100}
            alt='Next.js logo'
            />
        </Link>
     );
}
 
export default Logo;