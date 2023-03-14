const toastLive = document.querySelector("#liveToast");
const toast     = new bootstrap.Toast(toastLive);
const toastTxt  = document.querySelector("#toastTxt");


const validarSeparar = () => {
    if (inputCodigo.value == "") return false;
    if (inputCodigo.value.length != 40) return false; //40
    return true;
};

const validarFusionar = () => {

    if (inputConvenio.value == "" ) return false;
    if (inputRut.value == "" ) return false;
    if (inputNumPer.value == "" ) return false;
    if (inputTipoPer.value == "" ) return false;
    if (inputAnio.value == "" ) return false;
    if (inputCodCarr.value == "" ) return false;
    if (inputNumCoutas.value == "" ) return false;
    if (inputMonto.value == "" ) return false;
    if (inputFormPago.value == "" ) return false;
    if (inputTipoPago.value == "" ) return false;
    if (inputFechaPago.value == "" ) return false;

    if (inputConvenio.value.length > 3) return false;
    if (inputRut.value.length > 9) return false;
    if (inputNumPer.value.length > 1) return false;
    if (inputTipoPer.value.length > 1) return false;
    if (inputAnio.value.length > 4) return false;
    if (inputCodCarr.value.length > 3) return false;
    if (inputNumCoutas.value.length > 2) return false;
    if (inputMonto.value.length > 7) return false;
    if (inputFormPago.value.length > 1) return false;
    if (inputTipoPago.value.length > 1) return false;
    if (inputFechaPago.value.length > 10) return false;

    return true;
};

export const separarCod = async () => {
    const codigoFull = inputCodigo.value;
    if (validarSeparar()) {
        
        const iConvenio     = codigoFull.substring(0, 3);
        const iRut          = codigoFull.substring(3, 12);
        const iNumPer       = codigoFull.substring(12, 13);
        const iTipoPer      = codigoFull.substring(13, 14);
        const iAnio         = codigoFull.substring(14, 16);
        const iCCarrera     = codigoFull.substring(16, 19);
        const iNumCouta     = codigoFull.substring(19, 21);
        const iMonto        = codigoFull.substring(21, 28);
        const iFormPago     = codigoFull.substring(28, 29);
        const iTipoPago     = codigoFull.substring(29, 30);
        const sFechaPago    = codigoFull.substring(30, 40);

        inputConvenio.value     = parseInt(iConvenio);
        inputRut.value          = parseInt(iRut);
        inputNumPer.value       = parseInt(iNumPer);
        inputTipoPer.value      = parseInt(iTipoPer);
        inputAnio.value         = "20" + parseInt(iAnio);
        inputCodCarr.value      = parseInt(iCCarrera);
        inputNumCoutas.value    = parseInt(iNumCouta);
        inputMonto.value        = parseInt(iMonto);
        inputFormPago.value     = parseInt(iFormPago);
        inputTipoPago.value     = parseInt(iTipoPago);
        inputFechaPago.value    = sFechaPago.substring(6, 10) + "-" + sFechaPago.substring(3, 5) + "-" + sFechaPago.substring(0, 2);
    } else {
        // alert("Error al validar");
        toastTxt.innerHTML = "El c&oacute;digo pedorro no es v&aacute;lido";
        toast.show();
    }
};

export const fusionarCod = async () => {

    if (validarFusionar()) {
        
        const iConvenio     = inputConvenio.value.padStart(3, "0");
        const iRut          = inputRut.value.padStart(9, "0");
        const iNumPer       = inputNumPer.value;
        const iTipoPer      = inputTipoPer.value;
        const iAnio         = inputAnio.value.substring(2, 4);
        const iCodCarr      = inputCodCarr.value.padStart(3, "0");
        const iNumCoutas    = inputNumCoutas.value.padStart(2, "0");
        const iMonto        = inputMonto.value.padStart(7, "0");
        const iFormPago     = inputFormPago.value;
        const iTipoPago     = inputTipoPago.value;
        const dFechaPago    = inputFechaPago.value;

        const sDia          = dFechaPago.substring(8, 10).padStart(2, "0");
        const sMes          = dFechaPago.substring(5, 7).padStart(2, "0");
        const sAnio         = dFechaPago.substring(0, 4).padStart(4, "0");
        const sFechaPago    = sDia + "-" + sMes + "-" + sAnio;

        const sCodUnido = iConvenio + iRut + iNumPer+ iTipoPer + iAnio + iCodCarr 
                        + iNumCoutas + iMonto + iFormPago + iTipoPago + sFechaPago;

        inputCodigo.value = sCodUnido;

    } else {
        // alert("Error al validar");
        toastTxt.innerHTML = "Los datos de fusi&oacute;n no son v&aacute;lidos";
        toast.show();
    }
};
// /*  */