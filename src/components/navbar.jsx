"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';


function Navbar(){

    const pathname = usePathname();
  

    return(
        <div className="flex flex-col items-center justify-center py-24 w-full shadow-2xl shadow-slate-100">
    
                <img src="/about.jpeg" className="w-24 h-24 rounded-full object-cover" />
        
             
              <div className="flex pt-9 gap-9">
                <Link href="/"
                className={`hover:text-rose-950 ${pathname === "/" ? ' text-rose-900' : ''}`}>About</Link>
                <Link href="/services"
                 className={`hover:text-rose-950 ${pathname === "" ? ' text-rose-900' : ''}`}>Sesiones</Link>
                <Link href="/contact"
                 className={`hover:text-rose-950 ${pathname === "/contact" ? ' text-rose-900' : ''}`}>Contacto</Link>
              </div>

        </div>
    )
}

export default Navbar