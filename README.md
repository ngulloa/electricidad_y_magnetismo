# Compendio de Electricidad y Magnetismo

Incluye 11 unidades, 35 entradas de formulario y 22 problemas originales con pistas y soluciones. El temario sigue la guía FIS1533 de Nicolás Ulloa Gatica y cada unidad indica la sección pertinente del Sears y Zemansky.

## Vista previa y edición

- Abre **vista-previa.html** para recorrer el contenido en un navegador. Esta vista autónoma usa MathJax desde un CDN y necesita conexión para mostrar las fórmulas.
- Instala [Quarto](https://quarto.org/docs/download/) y ejecuta **quarto preview** desde esta carpeta para revisar el sitio del repositorio. **quarto render** escribe la versión para publicar en **_site**. El flujo está configurado con Quarto 1.11.9.
- Edita **contenidos/**, **ejercicios/** y **formulas.qmd**. Las ecuaciones se escriben en LaTeX y Quarto las convierte a MathML. El estilo está en **assets/sitio.css**. Incorpora futuras simulaciones en **interacciones.qmd**.
- Al sumar un tema, agrega el contenido y sus ejercicios, sus enlaces a ambos índices, las fórmulas con sus anclas y la opción en **consultas.qmd**.

## Contacto

Completa **destinatario** en **assets/contacto-config.js**. Esa dirección y el teléfono serán visibles en el sitio público. El formulario comprueba que el correo escrito corresponda a **@puc.cl**, **@uc.cl** o un subdominio de **uc.cl**. El visitante elige su cuenta UC al enviar el borrador desde su aplicación de correo. El borrador puede copiarse y el enlace a WhatsApp funciona de forma independiente.

- [Subdominios de la UC](https://www.uc.cl/noticias/uc-implementa-nuevos-subdominios-de-correo-electronico/)
- [Dominios que reconoce Mi Cuenta UC](https://micuenta.uc.cl/habilitar_correo_personal.html)

## Git y GitHub Pages

Desde esta carpeta:

~~~bash
git init -b main
git add .
git commit -m "Crear compendio de electricidad y magnetismo"
~~~

Crea un repositorio público y vacío en GitHub para usar Pages con GitHub Free. Ve a **Settings → Pages → Source → GitHub Actions**. Vincula y sube el repositorio:

~~~bash
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
~~~

Si la opción Pages aparece sólo tras el primer push, actívala entonces y usa **Actions → Publicar en GitHub Pages → Run workflow**. El flujo en **.github/workflows/pages.yml** renderiza y publica **_site**, que queda fuera de Git. La URL estará en **Settings → Pages**. También puedes usar **PROMPT-CODEX.md**.

- [Documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
