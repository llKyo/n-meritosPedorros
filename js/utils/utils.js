import { fusionarCod, separarCod } from "./separarCod.js";

export const fechaActual = () => {
     const now = new Date();
     const dd = String(now.getDate()).padStart(2, "0");
     const mm = String(now.getMonth() + 1).padStart(2, "0"); //January is 0!
     const yyyy = now.getFullYear();

     return yyyy + "-" + mm + "-" + dd;
}

export const cargarEventos = () => {
     btnEnviarCod.addEventListener("click", () => separarCod());
    inputCodigo.addEventListener("keypress", e =>  (e.key === "Enter") ? btnEnviarCod.click() : '');

    btnFusionar.addEventListener("click", () => fusionarCod());
    
    inputConvenio.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputRut.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputNumPer.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputTipoPer.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputAnio.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputCodCarr.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputNumCoutas.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputMonto.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputFormPago.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputTipoPago.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
    inputFechaPago.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
}

