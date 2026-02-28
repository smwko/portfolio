# Portfolio — Junjie Wu

Portfolio personal de **Junjie Wu**, Data Engineer & AI Specialist. Web estática construida con HTML, CSS y JavaScript vanilla, diseñada con estética moderna, animaciones fluidas y diseño responsive.

🔗 **[junjiewu.com](https://junjiewu.com)**

---

## 📂 Estructura del proyecto

```
portfolio/
├── index.html              # Página principal
├── styles.css              # Estilos (variables, layout, componentes, animaciones, responsive)
├── script.js               # Interactividad (scroll reveal, carrusel, tilt, duraciones)
├── assets/
│   └── img/
│       ├── graph-hero.png  # Imagen hero (gráfico 3D)
│       ├── profile.png     # Foto de perfil
│       ├── sdggroup.png    # Logo SDG Group
│       ├── palantir.png    # Logo Palantir
│       └── databricks.png  # Logo Databricks
├── aviso-legal.html        # Página legal
├── privacidad.html         # Política de privacidad
├── cookies.html            # Política de cookies
├── terminos.html           # Términos de uso
├── .gitignore
└── README.md
```

## 🧩 Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Presentación con claim, enlaces sociales y gráfico 3D flotante |
| **Proyectos** | Showcase alternado con links a demos y colaboradores |
| **Capacidades** | Grid de habilidades (Análisis/BI, Ingeniería, Ciencia de datos) |
| **Experiencia** | Timeline vertical con roles en SDG Group |
| **Reconocimientos** | Cards de premios (SDG Star, Talent Race, Oracle Enseña 2.0) |
| **Stack Tecnológico** | Grid de iconos de tecnologías |
| **Sobre mí** | Biografía personal con foto |
| **En los medios** | Carrusel horizontal de Instagram Reels con auto-scroll |
| **Contacto** | Email, LinkedIn & WhatsApp |

## 🎨 Diseño

- **Tema oscuro** con fondo `#0a0e1a` y acentos cyan/azul
- **Tipografía**: Inter (Google Fonts)
- **Animaciones**: float, pulse, shimmer, glow, scroll-reveal con stagger
- **Responsive**: Desktop, tablet y mobile (breakpoints: 768px, 480px)

## 🚀 Desarrollo local

```bash
# Opción 1 — Python
python -m http.server 8080

# Opción 2 — Node
npx serve .

# Opción 3 — VS Code
# Extensión "Live Server" → clic en "Go Live"
```

Abrir **http://localhost:8080**

## 🌐 Despliegue (Vercel)

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Desplegar
vercel --prod
```

También funciona con GitHub Pages y Netlify.

> **Nota**: Los embeds de Instagram requieren un dominio real (no funcionan en `localhost`).

## 📝 Licencia

[![CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Este proyecto está bajo la licencia [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/).

© 2025 Junjie Wu. Todos los derechos reservados.
