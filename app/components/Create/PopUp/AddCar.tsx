'use client'

import { useState } from "react"
import { Create } from "@/app/API/crud"


// const modalOpen = document.getElementById("modalOpen");
// const modalClose = document.getElementById("modalClose");

export default async function AddCar () {
    let brand = ''
    let model = ''
    let release_date = parseInt('')

    
    function handleSubmit () {
        Create(brand, model, release_date).then(data => {
            window.location.reload();
        });
    }

    function onChangeBrand ( b :any) {
        brand = b.target.value
    }

    function onChangeModel ( b :any) {
        model = b.target.value
    }

    function onChangeRelease_date ( b :any) {
        release_date = b.target.value
    }
    
    
    return (
        <div id="modalOpen" className="flex justify-center items-center bg-slate-500 rounded-xl px-5 ">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-lg mb-4">Adicionar Carro ao Inventário</h3>
                <input type="text" placeholder="Nome do Veículo" onChange={onChangeBrand} name="brand" className="w-72 h-5 rounded text-black mb-5 p-5"/> 
                <input type="text" placeholder="Modelo" onChange={onChangeModel} name="model" className="w-72 h-5 rounded text-black mb-5 p-5"/>
                <input type="number" placeholder="Ano de Lançamento" onChange={onChangeRelease_date} name="release_date" className="w-72 h-5 rounded text-black mb-5 p-5"/>
                    <div className="flex flex-row-reverse justify-start gap-3 w-72">
                        <button id="modalClose" type="submit" className="bg-slate-800 rounded-md p-1">Adcionar Carro</button>
                        <button id="modalClose" className="bg-slate-800 rounded-md p-1">Cancelar</button>
                    </div>
            </form>
        </div>
    )
}
