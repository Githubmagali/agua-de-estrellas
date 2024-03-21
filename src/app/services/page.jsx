import {items} from '@/assets/session'
import Link from 'next/link'


function Services() {

    return (
        <div className="flex flex-col p-24 fade-in">
            <div className="grid grid-cols-2 gap-y-20">
                {items.map((item, index) => (<>
                    <div className="grid-cols-1 grid ">
                        <h1 key={index} className="text-xl text-center">{item.name}</h1>
                        <p className="text-center text-gray-500 text-sm">{item.description}</p>
                    </div>
                    <div className="grid-cols-1 text-center">
                        <p className="md:pl-9 sm:pl-4 text-sm">{item.price}</p>
                    </div>
                    <Link href="/services/[servicesId]" as={`/services/${item.id}`} passHref>
                    selected
                    </Link>

                </>))}
            

            </div>


        </div>
    )
}

export default Services