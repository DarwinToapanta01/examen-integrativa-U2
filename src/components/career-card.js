import { LitElement, html, css } from 'lit';
import { themes } from '../styles/themes.js';

export class CareerCard extends LitElement {
    static properties = {
        career: { type: Object },
        theme: { type: Object },
    };

    constructor() {
        super();
        this.career = null;
        this.theme = themes.green;
    }

    static styles = css`
    .card {
      border: 2px solid var(--border-color);
      border-radius: 10px;
      max-width: 400px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    .header {
      background-color: var(--header-bg);
      color: var(--text-color);
      padding: 1rem;
      font-size: 1.2rem;
    }
    .content {
      padding: 1rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  `;

    updated() {
        if (this.theme) {
            this.style.setProperty('--border-color', this.theme.border);
            this.style.setProperty('--header-bg', this.theme.headerBg);
            this.style.setProperty('--text-color', this.theme.textColor);
        }
    }

    render() {
        if (!this.career) {
            return html`<div>Selecciona una carrera para ver los detalles.</div>`;
        }

        return html`
      <div class="card">
        <div class="header">${this.career.nombre}</div>
        <img src=${this.career.imagen} alt="Imagen de ${this.career.nombre}" />
        <div class="content">
          <strong>Facultad:</strong> ${this.career.facultad}<br />
          <p>${this.career.descripcion}</p>
        </div>
      </div>
    `;
    }
}

customElements.define('career-card', CareerCard);
