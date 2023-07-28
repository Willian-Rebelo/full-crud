// 'use client'

// import { Create } from "@/app/API/crud";
// import React from "react";

// interface IModal {
//     isOpen: boolean;
//     setOpen: (isOpen: boolean) => void
// }

// export default async function AddCar({  isOpen, setOpen }:IModal) {
//     let brand = '';
//     let model = '';
//     let release_date = parseInt('');

//     function handleSubmit() {
//         Create(brand, model, release_date).then(data => {
//             window.location.reload();
//         });
//     }

//     function onChangeBrand(b: any) {
//         brand = b.target.value;
//     }

//     function onChangeModel(b: any) {
//         model = b.target.value;
//     }

//     function onChangeRelease_date(b: any) {
//         release_date = b.target.value;
//     }

//     if (isOpen) {
//         return (
//             <main className="fixed flex items-center justify-center inset-0 z-50 bg-black opacity-95">
//                 <div className="z-10 h-[350px] w-[350px] pt-14 bg-slate-500 rounded-xl">
//                     <form className="flex flex-col justify-center items-center ">
//                         <h1 className="font-bold text-xl relative bottom-5">Adicionar Carro ao Inventário</h1>
//                         <input type="text" placeholder="Nome do Veículo" onChange={onChangeBrand} name="brand" className="w-72 h-5 rounded text-black mb-5 p-5" />
//                         <input type="text" placeholder="Modelo" onChange={onChangeModel} name="model" className="w-72 h-5 rounded text-black mb-5 p-5" />
//                         <input type="number" placeholder="Ano de Lançamento" onChange={onChangeRelease_date} name="release_date" className="w-72 h-5 rounded text-black mb-5 p-5" />
//                         <div className="flex flex-row-reverse justify-start gap-3 w-72">
//                             <button type="submit" onClick={handleSubmit} className="bg-slate-800 rounded-md p-2 hover:bg-gray-900">Adcionar Carro</button>
//                             <button onClick={() => setOpen(!isOpen)} className="bg-slate-800 rounded-md p-2 hover:bg-gray-900">Cancelar</button>
//                         </div>
//                     </form>
//                 </div>
//             </main>
//         );
//     }
// }


