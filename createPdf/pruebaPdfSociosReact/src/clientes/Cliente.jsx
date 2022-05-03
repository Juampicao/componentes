import React from "react";
import "./styles.css";
import { socios } from "./cliente.json";

const Cliente = () => {
  let mySocios = JSON.parse(socios);

  return (
    <div className="m-10">
      <h1 className="text-center font-bold text-xl uppercase">
        Administrador de Socios
      </h1>

      <section className="grid grid-cols-4 grid-rows-4 text-center bg-slate-400 gap-y-2 my-auto max-w-2xl mx-auto">
        <div className="header">Nombre</div>
        <div className="header">Dni</div>
        <div className="header">Edad</div>
        <div className="header">Numero Socio</div>

        <div>Juan</div>
        <div>42077392</div>
        <div>22</div>
        <div>20-1320-3</div>

        <div>Gonzalo</div>
        <div>45482032</div>
        <div>18</div>
        <div>20-1503-2</div>

        {/* Botones Ver Ficha  */}
      </section>

      <div className="grid grid-col-1 w-32">
        <button className="buttonFicha"> Ver Ficha </button>
        <button className="buttonFicha"> Ver Ficha </button>
        <button className="buttonFicha"> Ver Ficha </button>
        <button className="buttonFicha"> Ver Ficha </button>
      </div>

      {/* <div className="flex mx-auto">
        <table className="m-10 w-full max-w-2xl text-center bg-slate-100 ">
          <tr className="bg-red-500 p-10">
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr className="p-3">
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td> Romina Malaspina </td>
            <td> Santi de paoli </td>
            <td>Brasil</td>
          </tr>
          <tr>
            <td>
              <button> Ver Ficha </button>
            </td>
            <td> Santi de paoli </td>
            <td>Brasil</td>
          </tr>
        </table>
      </div> */}
    </div>
  );
};

export default Cliente;
