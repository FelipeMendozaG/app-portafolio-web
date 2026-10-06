# AGENTS.md - Directrices para Agentes de Inteligencia Artificial

Este documento establece las instrucciones, estándares técnicos, arquitectura y protocolos operativos para cualquier **agente de IA** (Antigravity, Copilot, Cursor, Windsurf, Claude Code, etc.) que colabore en el desarrollo y mantenimiento del repositorio **`app-portafolio-web`** (Chepita Apps / Felipe Mendoza).

---

## 1. Visión General del Proyecto

- **Nombre del Proyecto**: Portafolio Web y Ecosistema Chepita Apps
- **Autor / Titular**: Felipe Mendoza Gutiérrez (Chepita Apps © 2025-2026)
- **Tipo de Aplicación**: Single Page Application (SPA) moderna, responsiva y de alto impacto visual
- **Ecosistema**: Portafolio profesional de ingeniería de software y vitrina para aplicaciones móviles/web como *Chepita Afinador (Afinador CHP)*.

---

## 2. Stack Tecnológico Principal

| Capa | Tecnología / Herramienta | Versión / Detalle |
| :--- | :--- | :--- |
| **Runtime & Build** | Node.js + Vite | `vite ^4.4.5`, `@vitejs/plugin-react-swc` |
| **Framework UI** | React.js | `react ^18.2.0`, `react-dom ^18.2.0` |
| **Enrutamiento** | React Router DOM | `react-router-dom ^6.14.2` |
| **Estilos & CSS** | Tailwind CSS + Vanilla CSS | `tailwindcss ^3.3.3`, `@tailwind base/components/utilities` |
| **Animaciones** | Framer Motion | `framer-motion ^13.4.1` |
| **Estado Global** | Zustand | `zustand ^4.4.4` (i18n / idioma con `useLangProject`) |
| **Iconografía** | FontAwesome & Heroicons | `@fortawesome/react-fontawesome`, `@heroicons/react` |
| **Efectos & UI** | Typewriter & Swiper | `typewriter-effect`, `react-type-animation`, `swiper` |

---

## 3. Estructura de Directorios

```text
app-portafolio-web/
├── public/                     # Recursos estáticos servidos directamente
├── src/
│   ├── app/                    # Store global Zustand (store-zustand.js)
│   ├── assets/                 # Imágenes, logos de tecnologías, fotos y assets
│   ├── components/             # Componentes reutilizables (MyNavBar, MyFooter, etc.)
│   ├── data/                   # Archivos JSON de contenido y navegación (nav.js, footer.json, etc.)
│   ├── pages/                  # Vistas/Rutas de la aplicación
│   │   ├── Home/
│   │   ├── AboutMe/
│   │   ├── Proyects/
│   │   └── TerminosYCondiciones/ # Términos legales (Portafolio y Chepita Afinador)
│   ├── App.css                 # Estilos específicos del layout principal
│   ├── App.jsx                 # Configuración del BrowserRouter y declaración de rutas
│   ├── index.css               # Capa base de Tailwind, tipografías y clases utilitarias (.glass, .eyebrow)
│   └── main.jsx                # Punto de entrada de la aplicación React
├── index.html                  # HTML base con enlaces a fuentes externas
├── tailwind.config.js          # Configuración de tokens de diseño, fuentes y paleta
└── vite.config.js              # Configuración de plugins y servidor de desarrollo
```

---

## 4. Filosofía de Diseño y UI System

### 4.1. Paleta de Colores Corporativa
Cualquier interfaz debe adherirse a los esquemas de color configurados en `tailwind.config.js`:
- **`ink` (`#080B12`)**: Fondo maestro de alto contraste.
- **`panel` (`#111722`)**: Fondo para tarjetas, modales y contenedores elevados.
- **`line` (`#263041`)**: Bordes sutiles y divisores.
- **`cyan` (`#67E8F9`)**: Acento principal de marca y enlaces interactivos.
- **`emerald` (`#6EE7B7`)**: Estados de éxito y validaciones.
- **`violet` (`#A78BFA`)**: Acentos secundarios y gradientes técnicos.

### 4.2. Tema Especial: "Dark Acústica" (Chepita Afinador)
Para pantallas o módulos relacionados con aplicaciones de audio/DSP:
- **Verde Esmeralda Neón (`#00E676`)**: Indicador de afinación exacta (*in-tune*) y acciones principales.
- **Ámbar (`#FFB300` / `#F59E0B`)**: Desviaciones leves y advertencias.
- **Rojo Coral (`#FF5252`)**: Desafinación crítica y cláusulas de responsabilidad.
- **Fondo Carbón Acústico (`#070A0F`)**: Oscuro profundo simulando consolas de estudio.

### 4.3. Clases de Utilidad Globales
- `.glass`: Aplica `backdrop-blur-xl`, fondo translúcido blanco al 4% y borde sutil.
- `.eyebrow`: Fuente mono, tamaño xs, mayúsculas y espaciado expandido para subtítulos técnicos.
- `.section-shell`: Contenedor estándar centrado con `max-w-6xl` y padding responsivo.

---

## 5. Reglas de Código y Buenas Prácticas para Agentes

1. **Internacionalización (i18n)**:
   - Respetar el store global `useLangProject`.
   - Cuando se agreguen secciones de texto visibles para el usuario, proveer siempre las versiones en **Español (`es`)** e **Inglés (`en`)**.

2. **Componentes Limpios y Responsivos**:
   - Priorizar diseño *Mobile-First*.
   - Usar `framer-motion` para transiciones sutiles sin sobrecargar el hilo principal.
   - Todo elemento interactivo (botones, inputs, enlaces) debe tener estados `:hover`, `:focus-visible` y `aria-label` descriptivos.

3. **Audio y DSP (Contexto Chepita Apps)**:
   - Respetar estrictamente la política de privacidad: el audio capturado por el micrófono (`RECORD_AUDIO` / `NSMicrophoneUsageDescription`) se procesa **únicamente de forma local en tiempo real** en buffer PCM (44.1 kHz).
   - **NUNCA** introducir librerías o código que envíe flujos de audio a servidores externos o registre audios sin consentimiento explícito.

4. **Preservación y Compatibilidad**:
   - Nunca eliminar comentarios ni refactorizar código fuera del alcance de la tarea solicitada sin autorización.
   - No introducir Tailwind v4 ni configuraciones incompatibles; la versión actual del proyecto es **Tailwind CSS v3**.

---

## 6. Flujo de Trabajo y Validación

Antes de dar por concluida cualquier intervención:

1. **Validación de Sintaxis y Build**:
   ```powershell
   npm run build
   ```
   *El build debe completarse con código 0 y sin errores de bundling.*

2. **Inspección de Dependencias**:
   - Evitar instalar librerías pesadas si la funcionalidad puede resolverse con el ecosistema actual (`framer-motion`, `@heroicons/react`, `@fortawesome/react-fontawesome`, `zustand`).

3. **Commits y Control de Versiones**:
   - Usar *Conventional Commits*:
     - `feat(...)`: Nueva funcionalidad o componente.
     - `fix(...)`: Corrección de errores.
     - `style(...)`: Ajustes de diseño o Tailwind.
     - `docs(...)`: Documentación y archivos markdown.
     - `refactor(...)`: Reestructuración sin cambios visuales.

---

## 7. Instrucciones para la Interacción Humano-Agente

- **Claridad y Síntesis**: Explicar los cambios realizados de forma concisa indicando los archivos modificados con enlaces relativos o absolutos.
- **Proactividad Segura**: Proponer soluciones de arquitectura escalable, consultando al usuario antes de aplicar cambios estructurales mayores en la navegación o en las dependencias raíz.
