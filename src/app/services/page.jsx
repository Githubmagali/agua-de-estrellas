
const items=[
    {
        id:1,
        name:"Lectura de tarot",
        description:"Sesión por videollamada 40 minutos ",
        price:"ARS $8.000 . USD 80 por Paypal o WU"

    },
    {
        id:3,
        name:"Lectura de Tarot por audios a través de WhatsApp",
        description:"Envías preguntas concretas y te respondo.",
        price: "ARS $5.000 . USD 20 abonando por Paypal o WU"

    },
    {
        id:4,
        name:"Consulta Astrológica.",
        description:"Combinación de lectura de Carta natal, Tránsitos Planetarios, Revolución solar, Progresiones.",
        price:"ARS $18.000 . USD 40 por Paypal o WU."

    },
    {
        id:5,
        name:"Carta Natal.",
        description:"Análisis completo de la carta natal devolución por audio, PDF o videollamada.",
        price:"ARS $25.000 . USD 60 por Paypal o WU."

    },
    {
        id:6,
        name:"Sesion de Registros Akáshicos.",
        description:"Canalización energética conectando con tus guías y seres queridos fallecidos. Comunicación por videollamada. Incluye armonización previa y posterior.",
        price:"ARS 18.000 . USD 40 por Paypal o WU."
    }
]


function Services() {

    return (
        <div className="flex flex-col p-20 ">
            <div className="grid grid-cols-3 gap-y-9">
                {items.map((item, index)=>(<>
                      <h1 key={index} className="text-xl">{item.name}</h1>
                      <p>{item.description}</p>
                      <p className="pl-6 text-sm">{item.price}</p>
                     

                      </>  ))}
              
            </div>


        </div>
    )
}

export default Services