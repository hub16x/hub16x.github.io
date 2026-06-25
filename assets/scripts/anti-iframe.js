(function () {
    // 1. Verificar si la página está dentro de un iframe
    if (window.self !== window.top) {
        try {
            // Obtener la URL de la página que contiene el iframe
            const parentUrl = window.top.location.href;
            const hostname = window.top.location.hostname;

            // 2. Definir las excepciones
            // Comprueba si es localhost (127.0.0.1) o si el host empieza por "hub16x."
            const isLocalhost = hostname === '127.0.0.1';
            const isOfficialHub = hostname.startsWith('hub16x.');

            // 3. Si NO cumple las excepciones, bloquear y mostrar la pantalla
            if (!isLocalhost && !isOfficialHub) {
                mostrarPantallaError();
            }
        } catch (e) {
            // Si ocurre un error de Origen Cruzado (CORS), significa que el iframe 
            // está en un dominio totalmente diferente y no podemos leer 'window.top.location'.
            // Por lo tanto, definitivamente NO está en una URL oficial.
            mostrarPantallaError();
        }
    }

    // Función para renderizar el mensaje de error
    function mostrarPantallaError() {
        // Modificamos el HTML del cuerpo para mostrar el mensaje de bloqueo
        document.documentElement.innerHTML = `
<style>
  body {
    background-color: #111;
    color: #fff;
    font-family: Inter-SemiBold, monospace, "Segoe UI", -system-ui, sans-seirf;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .container {
    max-width: 500px;
    padding: 30px;
    border-radius: 8px;
    background: #222;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  }

  h1 {
    color: #ffffffff;
    margin-top: 0;
  }

  p {
    line-height: 1.6;
    font-size: 1.1em;
    color: #ffffffff;
  }

  a {
    color: #ffffffff;
    text-decoration: none;
    font-weight: bold;
  }
</style>
<div class="container">
  <h1>Oops, wrong address!</h1>
  <p>It looks like you are accessing Hub 16x via a non-official URL. <br><br>
    <a href="https://hub16x.github.io" target="_parent">Click here to play!</a>
  </p>
</div>
        `;
    }
})();