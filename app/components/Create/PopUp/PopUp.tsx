// import React, { useState, useEffect } from "react";
// import { Create } from "@/app/API/crud";

// interface ModalProps {
//   isOpen?: Boolean;
//   onClose?: () => void;
// }

// export default async function PopUp({ isOpen, onClose }: ModalProps) {
//   if (!isOpen) return null;

//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [release_date, setRelease_date] = useState(0);

//   useEffect(() => {
//     // Fetch the data from the API
//     Create(brand, model, release_date).then((data) => {
//       // Do something with the data
//     });
//   }, [brand, model, release_date]);

//   function handleSubmit() {
//     // Do something with the form data
//   }

//   function onChangeBrand(event: any) {
//     setBrand(event.target.value);
//   }

//   function onChangeModel(event: any) {
//     setModel(event.target.value);
//   }

//   function onChangeRelease_date(event: any) {
//     setRelease_date(parseInt(event.target.value));
//   }

//   return (
//     <main className="fixed flex items-center justify-center inset-0 z-50 bg-black opacity-95">
//       <div className="z-10 h-[350px] w-[350px] pt-14 bg-slate-500 rounded-xl">
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col justify-center items-center"
//         >
//           <h1 className="font-bold text-xl relative bottom-5">
//             Adicionar Carro ao Inventário
//           </h1>
//           <input
//             type="text"
//             placeholder="Nome do Veículo"
//             onChange={onChangeBrand}
//             name="brand"
//             className="w-72 h-5 rounded text-black mb-5 p-5"
//           />
//           <input
//             type="text"
//             placeholder="Modelo"
//             onChange={onChangeModel}
//             name="model"
//             className="w-72 h-5 rounded text-black mb-5 p-5"
//           />
//           <input
//             type="number"
//             placeholder="Ano de Lançamento"
//             onChange={onChangeRelease_date}
//             name="release_date"
//             className="w-72 h-5 rounded text-black mb-5 p-5"
//           />
//           <div className="flex flex-row-reverse justify-start gap-3 w-72">
//             <button
//               type="submit"
//               className="bg-slate-800 rounded-md p-2 hover:bg-gray-900"
//             >
//               Adicionar Carro
//             </button>
//             <button
//               onClick={onClose}
//               className="bg-slate-800 rounded-md p-2 hover:bg-gray-900"
//             >
//               Cancelar
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }