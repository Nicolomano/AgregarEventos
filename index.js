const boton = document.getElementById("boton")

let homero = document.createElement("div");
homero.innerHTML= `<img src="http://estaticos.muyinteresante.es/rcs/articles/2712/gen-simpson.jpg" alt="">;`

boton.addEventListener("click", ()=> document.body.append(homero))
