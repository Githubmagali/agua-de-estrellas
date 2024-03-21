"use client"
import { useState, useEffect } from 'react';
import { items } from '@/assets/session';
import Link from 'next/link';

export default function ServicesId({ params }) {
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        const sessionsConst = items.find(sessions => sessions.id === parseInt(params.servicesId));
        setSessions(sessionsConst);
    }, [params.servicesId]);

    if (!sessions) {
        return <div>Cargando...</div>;
    }

    const getNextSessionId = () => {
        const currentIndex = items.findIndex(session => session.id === sessions.id);
        if (currentIndex !== -1 && currentIndex < items.length - 1) {
            return items[currentIndex + 1].id;
        }
        return null;
    };

    const getPreviousSessionId = () => {
        const currentIndex = items.findIndex(session => session.id === sessions.id);
        if (currentIndex !== -1 && currentIndex > 0) {
            return items[currentIndex - 1].id;
        }
        return null;
    };

    return (
        <div className="flex pl-20 py-10 fade-in">
            <img src={sessions.img} className="w-1/2 h-96 object-cover border rounded-lg" />
            <div className="flex flex-col px-20">
                <p className="text-center text-xl">{sessions.name}</p>
                <p className="pt-10 text-gray-700">{sessions.components}</p>
                <p className="pt-10 text-gray-500 text-center">{sessions.description}</p>
                <div className='flex justify-center pt-6 gap-x-5'>
                    {getPreviousSessionId() && (
                        <Link href="/services/[servicesId]" as={`/services/${getPreviousSessionId()}`} passHref>

                            <i className='bx bx-left-arrow-alt'></i> Atras
                        </Link>
                    )}
                    {getNextSessionId() && (
                        <Link href="/services/[servicesId]" as={`/services/${getNextSessionId()}`} passHref>

                            Siguiente <i className='bx bx-right-arrow-alt'></i>

                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
