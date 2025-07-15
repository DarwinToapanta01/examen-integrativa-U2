import { LitElement, html, css } from 'lit';

export class CareerSelector extends LitElement {
    static styles = css`
     ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    padding: 16px;
    background: #ffffff;
    border: 1px solid #ccc;
    border-left: 8px solid #4caf50;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li:hover {
    transform: translateX(5px);
    background-color: #b9e5fa9b;
    border-left-color: #88d9ff;
    cursor: pointer;
  }

  li::before {
    content: '🎓';
    font-size: 1.2rem;
  }
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
