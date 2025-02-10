
// Crear una clase que cargue una imágen y que se muestre en la página.

const rutaImagen = '../../imagenes/finally_over.png';

class LoadImage {
    url;

    constructor(ruta){
        this.url = ruta;
    }

    load() {
        var newImg = document.createElement('img');
        newImg.src = this.url;
        document.body.appendChild(newImg);
    }


}

const loadImage = new LoadImage(rutaImagen);
loadImage.load();
