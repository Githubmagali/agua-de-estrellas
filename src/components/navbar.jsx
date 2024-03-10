"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

function Navbar(){

    const pathname = usePathname();

    return(
        <div className="flex flex-col items-center justify-center py-24 w-full shadow-2xl shadow-slate-100">
            <h1 className="text-5xl py-3">Agua de Estrellas</h1>
                <img src="/about.jpeg" className="w-24 h-24 rounded-full object-cover" />
        
             
              <div className="flex pt-9 gap-9">
                <Link href="/about"
                className={`hover:text-yellow-700 ${pathname === "/about" ? ' text-yellow-800' : ''}`}>About</Link>
                <Link href="/services"
                 className={`hover:text-yellow-700 ${pathname === "/services" ? ' text-yellow-800' : ''}`}>Services</Link>
                <Link href="/contact"
                 className={`hover:text-yellow-700 ${pathname === "/contact" ? ' text-yellow-800' : ''}`}>Contact</Link>
              </div>

        </div>
    )
}

export default Navbar