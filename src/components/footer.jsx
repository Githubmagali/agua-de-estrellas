function Footer() {

    return (
        <div className="flex py-14 shadow-2xl shadow-slate-500 relative ">
            <div className="grid grid-cols-2 pl-5 gap-y-5"> 
                <a href="https://www.instagram.com/aguadeeestrellas/?igsh=YTFwODlrM2xpNzdk" className="pl-24">
                    <i class='bx bxl-instagram text-2xl text-stone-500 hover:text-rose-950'></i>
                </a>
                <p className="text-sm">@aguadeeestrellas</p>

                <a href="mailto:martina.lumin@gmail.com" className="pl-24">
                    <i class='bx bxl-gmail text-2xl text-stone-500 hover:text-rose-950'></i>
                </a>
                <p className="text-sm">martina.lumin@gmail.com</p>
                <a className="pl-24">
                    <i class='bx bxl-whatsapp text-2xl text-stone-500 hover:text-rose-950'></i>
                </a>
                <p className="text-sm">(+54 9) 1168786417</p>
            </div>
            <div className="flex justify-center text-center">
            <a href="mailto:magalivictoria85068@gmail.com" className="absolute text-xs inset-x-0 bottom-0 pb-4 text-gray-500">&#169;Magali Victoria Fernandez </a>
            </div>
          
        </div>

    )
}

export default Footer