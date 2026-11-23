(() => {
  const form = document.querySelector("#consulta");
  if (!form) return;

  const campo = id => form.querySelector("#" + id);
  const tema = campo("tema");
  const nombre = campo("nombre");
  const correo = campo("correo");
  const pregunta = campo("pregunta");
  const estado = campo("estado");
  const vista = campo("vista");
  const borrador = campo("borrador");

  const unidad = new URLSearchParams(location.search).get("tema");
  if (Array.from(tema.options).some(opcion => opcion.value === unidad)) tema.value = unidad;
  form.querySelector('button[type="submit"]').disabled = false;

  function avisar(mensaje) {
    estado.hidden = false;
    estado.textContent = mensaje;
  }

  function validar() {
    const dominio = correo.value.trim().split("@").at(-1).toLowerCase();
    const uc = dominio === "uc.cl" || dominio === "puc.cl" || dominio.endsWith(".uc.cl");
    correo.setCustomValidity(correo.value && !uc ? "Ingresa una dirección institucional UC." : "");
    nombre.setCustomValidity(nombre.value.trim() ? "" : "Ingresa tu nombre.");
    pregunta.setCustomValidity(pregunta.value.trim() ? "" : "Escribe tu pregunta.");
  }

  form.addEventListener("input", () => {
    validar();
    estado.hidden = true;
    vista.hidden = true;
  });

  form.addEventListener("submit", evento => {
    evento.preventDefault();
    validar();
    if (!form.reportValidity()) return;
    const asunto = "[" + tema.selectedOptions[0].textContent + "]";
    const cuerpo = ["Nombre: " + nombre.value.trim(), "Correo: " + correo.value.trim(), "", "Pregunta:", pregunta.value.trim()].join("\r\n");
    borrador.value = "Asunto: " + asunto + "\r\n\r\n" + cuerpo;
    vista.hidden = false;
    const destino = window.contacto?.destinatario?.trim();
    if (!destino) {
      avisar("El correo de destino está pendiente de configuración. Puedes copiar el borrador o consultar por WhatsApp.");
      return;
    }
    avisar("Borrador listo. Puedes copiarlo si tu aplicación de correo no se abre.");
    location.href = "mailto:" + encodeURIComponent(destino).replace("%40", "@") +
      "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
  });

  campo("copiar").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(borrador.value);
      avisar("Borrador copiado.");
    } catch {
      borrador.focus();
      borrador.select();
      avisar("Borrador seleccionado para copiar.");
    }
  });
})();
