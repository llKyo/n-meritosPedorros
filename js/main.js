import { cargarEventos, fechaActual } from "./utils/utils.js";

//Patron Modulo
(() => {
    ("use strict");

    const btnEnviarCod      = document.querySelector("#btnEnviarCod");
    const inputCodigo       = document.querySelector("#inputCodigo");

    const inputConvenio     = document.querySelector("#inputConvenio");
    const inputRut          = document.querySelector("#inputRut");
    const inputNumPer       = document.querySelector("#inputNumPer");
    const inputTipoPer      = document.querySelector("#inputTipoPer");
    const inputAnio         = document.querySelector("#inputAnio");
    const inputCodCarr      = document.querySelector("#inputCodCarr");
    const inputNumCoutas    = document.querySelector("#inputNumCoutas");
    const inputMonto        = document.querySelector("#inputMonto");
    const inputFormPago     = document.querySelector("#inputFormPago");
    const inputTipoPago     = document.querySelector("#inputTipoPago");
    const inputFechaPago    = document.querySelector("#inputFechaPago");

    const btnFusionar       = document.querySelector("#btnFusionar");
    const btnLimpiarFusion  = document.querySelector("#btnLimpiarFusion");

    const btnLimpiarSepara  = document.querySelector("#btnLimpiarSepara");

    

    inputCodigo.value = "25902057669111220210002200002511-01-2022";

    inputConvenio.value     = 259;
    inputNumPer.value       = 1;
    inputTipoPer.value      = 1;
    inputAnio.value         = 2023;
    inputNumCoutas.value    = 0;
    inputFormPago.value     = 1;
    inputTipoPago.value     = 1;
    inputFechaPago.value    = fechaActual();

    cargarEventos();
})();
