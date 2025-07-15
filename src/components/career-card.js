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
  `;

    updated() {
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
