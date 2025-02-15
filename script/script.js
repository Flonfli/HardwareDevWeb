// Esta función añade o quita la clase "no-scroll" en <body>
// dependiendo de si el hash incluye "img" (por ejemplo #img1, #img2, etc.)
function toggleBodyScroll() {
    if (window.location.hash.includes("img")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
  
  // Al cargar la ventana, revisamos si ya existe un hash #img en la URL
  window.addEventListener("load", toggleBodyScroll);
  
  // Cada vez que cambie el hash (#img1 -> #img2, o #img1 -> #imagenes), se vuelve a comprobar
  window.addEventListener("hashchange", toggleBodyScroll);
  
  /************************************************************/
/* 1) BLOQUEO DE SCROLL EN OVERLAY (Como lo tenías antes)   */
/************************************************************/
function toggleBodyScroll() {
    if (window.location.hash.includes("img")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
  
  window.addEventListener("load", toggleBodyScroll);
  window.addEventListener("hashchange", toggleBodyScroll);
  
  /************************************************************/
  /* 2) CAMBIAR IMAGEN ALEATORIA AL CARGAR LA PÁGINA          */
  /************************************************************/
  window.addEventListener("load", function() {
    // Lista de rutas de imágenes posibles
    const bitImages = [
      "img/bit1.png",
      "img/bit2.png",
      "img/bit3.png",
      "img/bit4.png",
      "img/bit5.png"
    ];
    
    // Genera un índice aleatorio entre 0 y (bitImages.length - 1)
    const randomIndex = Math.floor(Math.random() * bitImages.length);
  
    // Selecciona la imagen del DOM con id="bitImage"
    const bitElement = document.getElementById("bitImage");
  
    // Cambia el src a la imagen aleatoria
    // (asegúrate de que los nombres y rutas coincidan con tus archivos)
    if (bitElement) {
      bitElement.src = bitImages[randomIndex];
    }
  });
  
  