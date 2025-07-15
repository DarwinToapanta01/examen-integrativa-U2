import { LitElement, html, css } from 'lit';

export class CareerSelector extends LitElement {
    static styles = css`
  `;

    static properties = {
        carreras: { type: Array }
    };

    constructor() {
        super();
        this.carreras = [];
    }

   async connectedCallback() {
    super.connectedCallback();
    try {

        const jsonUrl = new URL('../data/carreras.json', import.meta.url);
        const response = await fetch(jsonUrl);

        if (response.ok) {
            this.carreras = await response.json(); 
        } else {
            console.error('No se pudo cargar careers.json');
        }
    } catch (e) {
        console.error('Error al cargar careers.json', e);
    }
}


    seleccionarCarrera(carrera) {
        this.dispatchEvent(new CustomEvent('career-selected', {
            detail: carrera,
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <ul>
        ${this.carreras.map(carrera => html`
          <li @click=${() => this.seleccionarCarrera(carrera)}>
            ${carrera.nombre}
          </li>
        `)}
      </ul>
    `;
    }
}

customElements.define('career-selector', CareerSelector);
