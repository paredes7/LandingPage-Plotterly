// resources/js/Pages/Servicios/Index.jsx
import React from "react";
import { Head } from "@inertiajs/react";
import OffersCard from "@/Components/welcome/Offers/OffersCard";
import { OFFERS_MOCK } from "@/Components/welcome/Offers/OffersData";

export default function Offers({ ofertas = [] }) {
   
    const dataToRender = ofertas.length > 0 ? ofertas : OFFERS_MOCK;
    return (
        <section className="bg-white">
            <Head title="Nuestros Servicios" />
            

            <div className="max-w-[1400px] mx-auto py-16 px-4">
                <div className="flex items-center justify-center gap-2 mb-8 px-4">
                    <div className="h-[3px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-blue-700/60"></div>
                    <h2 className="text-black text-2xl md:text-4xl font-bold tracking-[0.1em] uppercase text-center opacity-80">
                        Plotterly Offers
                    </h2>
                    <div className="h-[3px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-blue-700/60"></div>
                </div>

                

                <div className="flex flex-col md:grid md:grid-cols-3 gap-y-10 md:gap-7 items-stretch max-w-[1200px] mx-auto">
                    {" "}
                    {dataToRender.map((Offers) => (
                        <OffersCard key={Offers.id} {...Offers} />
                    ))}
                </div>
            </div>
        </section>
    );
}
