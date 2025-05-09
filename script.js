// Función para abrir/cerrar mensaje
function toggleTexto(card) {
    card.classList.toggle("open");
  }
  
  // Función para copiar texto al portapapeles
  function copiar(event, id) {
    event.stopPropagation(); // Evita que también se abra el desplegable
    const texto = document.getElementById(id).innerText;
    navigator.clipboard.writeText(texto)
      .then(() => mostrarToast("✅ Copiado"))
      .catch(() => mostrarToast("❌ Error al copiar"));
  }
  
  // Función para mostrar toast flotante
  function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");
    toast.innerText = mensaje;
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
  
  // Modo oscuro manual
  const toggleBtn = document.getElementById("toggle-dark-mode");
  const body = document.body;
  
  function aplicarModo(modo) {
    if (modo === "oscuro") {
      body.classList.add("dark-mode");
      toggleBtn.innerText = "☀️";
    } else {
      body.classList.remove("dark-mode");
      toggleBtn.innerText = "🌙";
    }
  }
  
  const modoGuardado = localStorage.getItem("modo");
  aplicarModo(modoGuardado || "claro");
  
  toggleBtn.addEventListener("click", () => {
    const esOscuro = body.classList.toggle("dark-mode");
    const nuevoModo = esOscuro ? "oscuro" : "claro";
    localStorage.setItem("modo", nuevoModo);
    aplicarModo(nuevoModo);
  });
  