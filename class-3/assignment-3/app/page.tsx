"use client" 

import Image from "next/image";
import Navbar from "./navbar/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Link from "next/link";
import { useRouter } from "next/navigation";




 
export default function Home() {
  const route = useRouter()
  return (
    
    <>
    
    <h1>this is home page</h1>
    <Link href={'/navbar'}>go to navbar</Link>
    <button onClick={() =>route.push('/navbar')}>
        Go to navbar Page
      </button>
    </>


    
  );
}
