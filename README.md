# Nexus — Web del proyecto + QR de acceso

Sitio estático (React + Vite + Tailwind) pensado para un proyecto universitario:
presenta el trabajo, el equipo y genera el **código QR** que abre la web desde el móvil.

Todo el contenido editable está en **`src/content.ts`**.

---

## 1. Ejecutar en tu PC

```bash
npm install      # solo la primera vez
npm run dev      # http://localhost:5173
```

Para comprobar el build de producción:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # sirve dist/ en http://localhost:4173
```

## 2. Qué puedes tocar

| Quiero cambiar…            | Archivo                        |
| -------------------------- | ------------------------------ |
| Nombre, textos, enlaces    | `src/content.ts`               |
| Colores, tipografías       | `src/index.css` (bloque `@theme`) |
| Secciones y orden          | `src/App.tsx`                  |
| Estilos de una sección     | `src/components/*.tsx`         |

## 3. El QR: cómo funciona

El QR **no** está escrito a mano: se genera en el navegador con la librería `qrcode`
a partir de la URL que aparece en el panel de la sección “Acceso con QR”.

- **En la web publicada** se rellena solo con la dirección actual. Pulsa
  *Descargar SVG* (mejor para imprimir) o *PNG*.
- **En local** (`localhost`) esa URL no sirve para el móvil, así que el panel te
  deja escribir la URL publicada y la guarda para la próxima vez.
- Tamaño recomendado de impresión: **mínimo 4 × 4 cm**, con margen blanco
  alrededor (el QR ya lo incluye) y buen contraste. No lo pongas sobre una foto.

> Si el póster lleva el QR impreso, **no uses un acortador** (is.gd, TinyURL…):
> si el acortador cae, el póster queda muerto. Mejor la URL final directa.

## 4. Publicar gratis (sin tarjeta, para siempre)

### Opción A — Cloudflare Pages (recomendada)

Ancho de banda ilimitado en sitios estáticos, sin tarjeta y sin pausas mensuales.

1. Crea una cuenta en <https://dash.cloudflare.com> → **Workers & Pages** → *Create* → *Pages*.
2. **La forma más rápida:** pestaña *Upload assets*, arrastra la carpeta `dist/`
   (después de `npm run build`). Te da una URL tipo `https://tu-proyecto.pages.dev`.
3. **La forma automática:** conecta el repositorio de GitHub, y configura:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework preset: *Vite*
   Cada `git push` a `main` vuelve a publicar.

### Opción B — GitHub Pages (si el código ya está en GitHub)

El workflow ya está incluido en `.github/workflows/deploy.yml`:

1. Sube el proyecto a un repositorio **público**.
2. En GitHub: *Settings → Pages → Source* = **GitHub Actions**.
3. Haz push a `main` y espera la acción. URL: `https://TU-USUARIO.github.io/TU-REPO/`.
4. La primera vez que abras el QR, pega esa URL en el panel (se guarda).

El proyecto usa `base: './'`, así que funciona tanto en la raíz del dominio
como en una subcarpeta de GitHub Pages.

### Opción C — Vercel / Netlify

También gratis y sin tarjeta (`vercel` o arrastrar `dist/`). Válidas, pero Netlify
pausa el sitio si agotas sus créditos mensuales y Vercel Hobby es solo para uso
no comercial: para un QR impreso, Cloudflare o GitHub son más seguras.

### ¿Y Railway?

No hace falta. Railway es para backends con servidor y base de datos: su plan
gratuito es un crédito de prueba y después pasa a pago. Un sitio estático como
este no necesita servidor: se sirve desde CDN y cuesta 0 €.

## 5. Estructura

```
src/
├─ content.ts          ← textos, equipo, enlaces (edita aquí)
├─ App.tsx             ← composición de la página
├─ index.css           ← tema, colores, utilidades, animaciones
├─ lib/qr.ts           ← generación y descarga del QR
├─ hooks/useQR.ts
└─ components/
   ├─ Nav.tsx  Hero.tsx  QRCard.tsx
   ├─ Features.tsx  QRGuide.tsx  Team.tsx  Footer.tsx
   └─ Reveal.tsx       ← animaciones al hacer scroll
```

## 6. Antes de entregar

- [ ] Reemplazar los textos de ejemplo en `src/content.ts` (nombres, materia, URL del repo).
- [ ] Añadir el logo/colores de la universidad si lo piden.
- [ ] Publicar y **probar el QR impreso con dos teléfonos distintos**.
- [ ] Verificar que la URL del QR abre sin login ni avisos intermedios.
- [ ] Revisar contraste y navegación con teclado (`Tab`) en el aula.
