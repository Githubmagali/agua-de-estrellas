
const items = [
    {
        id: 1,
        img: "/img-1.jpeg",
        name: "Lectura de tarot",
        description: "Sesión por videollamada 40 minutos ",
        price: "ARS  $8.000 . USD 80 por Paypal o WU"

    },
    {
        id: 3,
        img: "/img-2.jpeg",
        name: "Lectura de Tarot por audios a través de WhatsApp",
        description: "Envías preguntas concretas y te respondo.",
        price: "ARS $5.000 USD 20 abonando por Paypal o WU"

    },
    {
        id: 4,
        img: "/img-3.jpeg",
        name: "Consulta Astrológica.",
        description: "Combinación de lectura de Carta natal, Tránsitos Planetarios, Revolución solar, Progresiones.",
        price: "ARS $18.000 USD 40 por Paypal o WU."

    },
    {
        id: 5,
        img: "/img-4.jpeg",
        name: "Carta Natal.",
        description: "Análisis completo de la carta natal devolución por audio, PDF o videollamada.",
        price: "ARS $25.000 USD 60 por Paypal o WU."

    },
    {
        id: 6,
        img: "/img-5.jpeg",
        name: "Sesion de Registros Akáshicos.",
        description: "Canalización energética conectando con tus guías y seres queridos fallecidos. Comunicación por videollamada. Incluye armonización previa y posterior.",
        price: "ARS $18.000 USD 40 por Paypal o WU."
    }
]


function Services() {

    return (
        <div className="flex flex-col p-24 ">
            <div className="grid grid-cols-2 gap-y-20">
                {items.map((item, index) => (<>
                    <div className="grid-cols-1 grid ">
                        <h1 key={index} className="text-xl text-center">{item.name}</h1>
                        <p className="text-center text-gray-500 text-sm">{item.description}</p>
                    </div>
                    <div className="grid-cols-1 text-center">
                        <p className="md:pl-9 sm:pl-4 text-sm">{item.price}</p>
                    </div>


                </>))}

            </div>


        </div>
    )
}

export default Services