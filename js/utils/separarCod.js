const toastLive     = document.querySelector("#liveToast");
const toast         = new bootstrap.Toast(toastLive);
const toastTxt      = document.querySelector("#toastTxt");
const toastImg      = document.querySelector("#toastImg");
const toastTitle    = document.querySelector("#toastTitle");


const validarSeparar = () => {
    if (inputCodigo.value == "") {
        inputCodigo.classList.add("is-invalid");
        notificar(1, "Falta el c&oacute;digo pedorro");
        return false;
    }
    if (inputCodigo.value.length != 40) {
        inputCodigo.classList.add("is-invalid");
        notificar(1, "El c&oacute;digo pedorro no cumple el largo v&aacute;lido");
        return false;
    }; //40

    
    return true;
};

const validarFusionar = () => {

    let bValido = true, aMensajes = [], iContador = 0, sMensaje = "";

    if (inputConvenio.value == "" ) {
        inputConvenio.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el Convenio");
        bValido     = false;
    } 
    if (inputRut.value == "" ) {
        inputRut.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el Rut");
        bValido     = false;
    }
    if (inputNumPer.value == "" ) {
        inputNumPer.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el N&uacute;mero Periodo");
        bValido     = false;
    }
    if (inputTipoPer.value == "" ) {
        inputTipoPer.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el Tipo de Periodo");
        bValido     = false;
    }
    if (inputAnio.value == "" ) {
        inputAnio.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el A&ntilde;o");
        bValido     = false;
    }
    if (inputCodCarr.value == "" ) {
        inputCodCarr.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el C&oacute;digo de Carrera");
        bValido     = false;
    }
    if (inputNumCuotas.value == "" ) {
        inputNumCuotas.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el N&uacute; de Cuotas");
        bValido     = false;
    }
    if (inputMonto.value == "" ) {
        inputMonto.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el Monto");
        bValido     = false;
    }
    if (inputFormPago.value == "" ) {
        inputFormPago.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala la Forma de Pago");
        bValido     = false;
    }
    if (inputTipoPago.value == "" ) {
        inputTipoPago.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala el Tipo de Pago");
        bValido     = false;
    }
    if (inputFechaPago.value == "" ) {
        inputFechaPago.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador   = aMensajes.push("Fala la Fecha de Pago");
        bValido     = false;
    }

    if (!bValido) {
        aMensajes.forEach((mensaje) => {
            sMensaje += mensaje;
        });

        notificar(1, sMensaje);
        return bValido;
    }
  

    if (inputConvenio.value.length > 3) {
        inputConvenio.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El Convenio no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputRut.value.length > 9) {
        inputRut.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El Rut no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputNumPer.value.length > 1) {
        inputNumPer.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El N&uacute;mero Periodo no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputTipoPer.value.length > 1) {
        inputTipoPer.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El Tipo de Periodo no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputAnio.value.length > 4) {
        inputAnio.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El A&ntilde;o no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputCodCarr.value.length > 3) {
        inputCodCarr.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El C&oacute;digo de Carrera no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputNumCuotas.value.length > 2) {
        inputNumCuotas.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El N&uacute; de Cuotas no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputMonto.value.length > 7) {
        inputMonto.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El Monto no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputFormPago.value.length > 1) {
        inputFormPago.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("La Forma de Pago no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputTipoPago.value.length > 1) {
        inputTipoPago.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("El Tipo de Pago no cumple el largo v&aacute;lido");
        bValido = false;
    }
    if (inputFechaPago.value.length > 10) {
        inputFechaPago.classList.add("is-invalid");
        if (iContador != 0) aMensajes.push("<br>");
        iContador = aMensajes.push("La Fecha de Pago no cumple el largo v&aacute;lido");
        bValido = false;
    }

    if (!bValido) {
        aMensajes.forEach((mensaje) => {
            sMensaje += mensaje;
        });

        notificar(1, sMensaje);
        return bValido;
    }

    return bValido;
};

const limpiarErroresFusionar = () => {

    inputConvenio.classList.remove("is-invalid");
    inputRut.classList.remove("is-invalid");
    inputNumPer.classList.remove("is-invalid");
    inputTipoPer.classList.remove("is-invalid");
    inputAnio.classList.remove("is-invalid");
    inputCodCarr.classList.remove("is-invalid");
    inputNumCuotas.classList.remove("is-invalid");
    inputMonto.classList.remove("is-invalid");
    inputFormPago.classList.remove("is-invalid");
    inputTipoPago.classList.remove("is-invalid");
    inputFechaPago.classList.remove("is-invalid");
};

const notificar = (iTipoNotificacion, sMensaje) => {

    let sImgURL, sTitle;

    switch (iTipoNotificacion) {
        case 1:
            sImgURL = "https://pbs.twimg.com/profile_images/986618670666350592/CRxcpOzi_400x400.png";
            sTitle  = "Error"
            break;
        case 2:
            sImgURL = "https://cdn-icons-png.flaticon.com/512/9320/9320504.png";
            sTitle  = "Informaci&oacute;n"
            break;
        default:
            sImgURL = "https://cdn-icons-png.flaticon.com/512/2538/2538026.png";
            sTitle  = "Informaci&oacute;n";
            break;
    }

    toastImg.src            = sImgURL;
    toastTitle.innerHTML    = sTitle;
    toastTxt.innerHTML      = sMensaje;
    toast.show();
};

export const separarCod = async () => {
    const codigoFull = inputCodigo.value;
    inputCodigo.classList.remove("is-invalid");
    if (validarSeparar()) {
        
        const iConvenio     = codigoFull.substring( 0,  3);
        const iRut          = codigoFull.substring( 3, 12);
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
        inputNumCuotas.value    = parseInt(iNumCouta);
        inputMonto.value        = parseInt(iMonto);
        inputFormPago.value     = parseInt(iFormPago);
        inputTipoPago.value     = parseInt(iTipoPago);
        inputFechaPago.value    = sFechaPago.substring(6, 10) + "-" + sFechaPago.substring(3, 5) + "-" + sFechaPago.substring(0, 2);
    } 
};

export const fusionarCod = async () => {

    limpiarErroresFusionar();

    if (validarFusionar()) {
        
        const iConvenio     = inputConvenio.value.padStart(3, "0");
        const iRut          = inputRut.value.padStart(9, "0");
        const iNumPer       = inputNumPer.value;
        const iTipoPer      = inputTipoPer.value;
        const iAnio         = inputAnio.value.substring(2, 4);
        const iCodCarr      = inputCodCarr.value.padStart(3, "0");
        const iNumCoutas    = inputNumCuotas.value.padStart(2, "0");
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

    } 
};

const copyToClipboard = async  (textToCopy) => {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
    } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy != '' ? textToCopy : " ";

        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }
};

export const copiarYNotificar = async (sTextoACopiar) => {
    // console.log(sTextoACopiar);
    // //navigator.clipboard.writeText(sTextoACopiar);
    // console.log(navigator.clipboard); 

    copyToClipboard(sTextoACopiar)

    notificar(2, "Copiado!");
};
