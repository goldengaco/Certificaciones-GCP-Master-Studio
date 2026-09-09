# Guía Técnica 02: Modernización Frontend, UI/UX y Accesibilidad WCAG 2.2

**Ruta de Frontend:** `plataforma_entrenamiento_master/`  
**Archivos Afectados:** `index.html`, `css/styles.css`, `js/ui_exam.js`, `js/ui_study.js`, `js/ui_charts.js`, `js/ui_drill.js`  

---

## 1. Migración a Estándares Modernos de HTML5 (Baseline 2025/2026)

Actualmente la plataforma gestiona ventanas modales, menús de confirmación y tooltips mediante clases CSS manuales (`.active`, `.hidden`) y listeners complejos de JavaScript. 

### 1.1 Sustitución de Modales por `<dialog>` Nativo con `closedby="any"`
* **Archivos:** `index.html`, `js/app.js`, `js/ui_exam.js`.
* **Beneficio:** Focus trap automático por el motor del navegador, bloqueo de scroll en el fondo nativo, soporte nativo de la tecla `Escape` y accesibilidad para lectores de pantalla.
* **Implementación:**
```html
<!-- Modal de Revisión Previa al Envío del Examen -->
<dialog id="modal-exam-review" class="modern-dialog" closedby="any">
  <div class="dialog-header">
    <h3>Revisión de Examen antes de Enviar</h3>
    <button type="button" class="btn-icon-close" command="close" commandfor="modal-exam-review" aria-label="Cerrar modal">&times;</button>
  </div>
  <div class="dialog-body" id="exam-review-modal-body">
    <!-- Grid de 50 preguntas y estado -->
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn-secondary" command="close" commandfor="modal-exam-review">Volver al Examen</button>
    <button type="button" class="btn-danger" id="btn-review-confirm-grade">Confirmar y Calificar</button>
  </div>
</dialog>
```

### 1.2 Implementación de la Popover API para Tooltips y Cheat Sheets
* **Beneficio:** Permite desplegar tarjetas de atajos de teclado, glosarios de términos GCP y menús de opciones sin alterar el flujo del DOM y sin necesidad de librerías externas.
* **Implementación:**
```html
<!-- Botón activador y panel Popover -->
<button type="button" class="btn-ghost" popovertarget="popover-shortcuts" aria-haspopup="true">
  ⌨️ Atajos de Teclado
</button>

<div id="popover-shortcuts" popover class="modern-popover">
  <h4>Atajos de Teclado en Modo Simulación</h4>
  <ul>
    <li><kbd>A</kbd> - <kbd>D</kbd> / <kbd>1</kbd> - <kbd>4</kbd>: Seleccionar opción</li>
    <li><kbd>F</kbd>: Marcar / Desmarcar pregunta</li>
    <li><kbd>→</kbd> / <kbd>←</kbd>: Pregunta siguiente / anterior</li>
    <li><kbd>Space</kbd>: Confirmar en modo drill</li>
  </ul>
</div>
```

---

## 2. Modernización de Estilos CSS (`css/styles.css`)

### 2.1 CSS Container Queries (`@container`) en el Split-Panel de Casos de Estudio
El visor de Casos de Estudio de PCA divide la pantalla en 2 paneles: el caso de estudio a la izquierda y la pregunta a la derecha. 
* **Problema:** Con Media Queries tradicionales (`@media`), el contenido de los paneles se desborda cuando el usuario redimensiona la ventana o usa pantallas estrechas.
* **Solución:** Definir el contenedor del caso de estudio como un contexto de contenedor (`container-type: inline-size; container-name: cs-panel`).
```css
/* Contenedor del Split Panel */
.split-panel-layout {
  display: grid;
  grid-template-columns: minmax(320px, 45%) 1fr;
  gap: 1.5rem;
  container-type: inline-size;
}

.case-study-viewer {
  container-type: inline-size;
  container-name: cs-viewer;
  background: var(--surface-secondary);
  border-radius: 12px;
  padding: 1.25rem;
}

/* Reglas reactivas basadas en el ancho del panel, no de la pantalla */
@container cs-viewer (max-width: 420px) {
  .cs-tab-nav {
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .cs-tab-btn {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
  .cs-content-block {
    font-size: 0.9rem;
    line-height: 1.4;
  }
}
```

### 2.2 Transiciones Suaves con `@starting-style`
Eliminar parpadeos y animar la entrada y salida de diálogos, notificaciones toast y tarjetas de feedback:
```css
/* Animación fluida de entrada para diálogos nativos */
dialog.modern-dialog {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out, display 0.25s allow-discrete;
}

@starting-style {
  dialog.modern-dialog[open] {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
}

dialog.modern-dialog::backdrop {
  background-color: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  transition: opacity 0.25s ease-out, display 0.25s allow-discrete;
}

@starting-style {
  dialog.modern-dialog[open]::backdrop {
    opacity: 0;
  }
}
```

---

## 3. Accesibilidad Universal y Estándar WCAG 2.2 AA

### 3.1 Soporte Integral para Lectores de Pantalla
* **Opciones de Pregunta:** Cada opción debe estructurarse con `role="radiogroup"` (o `role="group"` para multi-select), con etiquetas `aria-checked` sincronizadas en tiempo real.
* **Anuncios Dinámicos:** Utilizar un elemento con `aria-live="polite"` (`id="a11y-status-announcer"`) para anunciar cambios de pregunta, tiempo restante (a los 15 min, 5 min y 1 min) y resultado de corrección en modo estudio.

### 3.2 Navegación 100% por Teclado
* Asegurar que el indicador de foco (`:focus-visible`) sea visible con un outline contrastado (`2px solid var(--accent-color)`) con un radio de contraste superior a **4.5:1** contra el fondo.
* Prohibir el uso de `outline: none` sin un reemplazo visual explícito.
