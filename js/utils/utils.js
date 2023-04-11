import { copiarYNotificar, fusionarCod, separarCod } from "./separarCod.js";

export const fechaActual = () => {
     const now = new Date();
     const dd = String(now.getDate()).padStart(2, "0");
     const mm = String(now.getMonth() + 1).padStart(2, "0"); //January is 0!
     const yyyy = now.getFullYear();

     return yyyy + "-" + mm + "-" + dd;
}

export const limpiarTodoFusionar = () => {

     inputConvenio.value = '';
     inputRut.value = '';
     inputNumPer.value = '';
     inputTipoPer.value = '';
     inputAnio.value = '';
     inputCodCarr.value = '';
     inputNumCuotas.value = "";
     inputMonto.value = '';
     inputFormPago.value = '';
     inputTipoPago.value = '';
     inputFechaPago.value = '';

}

export const limpiarTodoSeparar = () => {
     inputCodigo.value = '';
};

export const cargarEventos = () => {
     btnEnviarCod.addEventListener("click", separarCod);
     inputCodigo.addEventListener("keypress", e =>  (e.key === "Enter") ? btnEnviarCod.click() : '');

     btnFusionar.addEventListener("click", fusionarCod);

     inputConvenio.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputRut.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputNumPer.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputTipoPer.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputAnio.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputCodCarr.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputNumCuotas.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputMonto.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputFormPago.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputTipoPago.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');
     inputFechaPago.addEventListener("keypress", e =>  (e.key === "Enter") ? btnFusionar.click() : '');

     btnLimpiarFusion.addEventListener("click", limpiarTodoFusionar);

     btnLimpiarSepara.addEventListener("click", limpiarTodoSeparar);

     btnCpConvenio.addEventListener("click", () => copiarYNotificar(inputConvenio.value));
     btnCpRut.addEventListener("click", () => copiarYNotificar(inputRut.value));
     btnCpNumPer.addEventListener("click", ()  => copiarYNotificar(inputNumPer.value));
     btnCpTipoPer.addEventListener("click", ()  => copiarYNotificar(inputTipoPer.value));
     btnCpAnio.addEventListener("click", ()  => copiarYNotificar(inputAnio.value));
     btnCpCodCarr.addEventListener("click", ()  => copiarYNotificar(inputCodCarr.value));
     btnCpNumCuotas.addEventListener("click", ()  => copiarYNotificar(inputNumCuotas.value));
     btnCpMonto.addEventListener("click", ()  => copiarYNotificar(inputMonto.value));
     btnCpFormPago.addEventListener("click", ()  => copiarYNotificar(inputFormPago.value));
     btnCpTipoPago.addEventListener("click", ()  => copiarYNotificar(inputTipoPago.value));
     btnCpFechaPago.addEventListener("click", ()  => copiarYNotificar(inputFechaPago.value));
}
