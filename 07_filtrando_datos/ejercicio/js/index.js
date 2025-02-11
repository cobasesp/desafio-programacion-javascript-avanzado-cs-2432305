
// Implementar un buscador de datos, donde los resultados se muestren tan
// pronto el usuario escriba texto en el input disponible

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');


function generarElemento(info) {
    const span = document.createElement('span');
    span.innerHTML = `<b>id:</b> ${info.id}<br>
    <b>nombre:</b> ${info.nombre}<br>
    <b>compañia:</b> ${info.compania}<br>
    <b>fecha de nacimiento:</b> ${info.fdn}<br>
    <b>dirección:</b> ${info.direccion}<br>
    <b>acerca:</b> ${info.acerca}`;

    return span;
}

input.addEventListener('keyup', (e) => {
    const inputText = e.target.value.toLowerCase();
    console.log(inputText);

    // Vacio la lista de busqueda al meter un input nuevo
    resultados.innerHTML = '';

    if (inputText == '') {
        resultados.innerHTML = '';
        return;
    } 

    DATOS.filter((d) => {
        if (d.nombre.toLowerCase().indexOf(inputText) >= 0) {
            resultados.appendChild(generarElemento(d));
            return;
        }
        if (d.compania.toLowerCase().indexOf(inputText) >= 0) {
            resultados.appendChild(generarElemento(d));
            return;
        }
        if (d.direccion.toLowerCase().indexOf(inputText) >= 0) {
            resultados.appendChild(generarElemento(d));
            return;
        }
        if (d.fdn.toLowerCase().indexOf(inputText) >= 0) {
            resultados.appendChild(generarElemento(d));
            return;
        }
        if (d.acerca.toLowerCase().indexOf(inputText) >= 0) {
            resultados.appendChild(generarElemento(d));
            return;
        }
        if (d.id == inputText) {
            resultados.appendChild(generarElemento(d));
            return;
        }
    })

    
})