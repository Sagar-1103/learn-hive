"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = ()=>{
    const pathname = usePathname();
    const isTeacherPage = pathname?.includes("/teacher");
return (
    <Link href={isTeacherPage?"/teacher/courses":"/"}>
    <Image src={"/logo.svg"} alt="logo" height={130} width={130}/>
    </Link>
)
}

export default Logo;