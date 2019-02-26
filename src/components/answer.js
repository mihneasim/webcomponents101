export class AnswerOption extends HTMLElement {
  constructor() {
    super();

    this.selected = false;
    const styles = `
      :host {
        display: inline-block;
        cursor: pointer;
      }

      .main {
        margin: 2px;
        background-color: #f0f0f0;
        color: black;
        border-radius: 4px;
        padding: 4px;
      }

      .main:hover {
        background-color: #999;
      }
      .main.selected {
        background-color: #333;
        color: white;
      }
    `;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.value = this.getAttribute('value');
    console.log(`My value is ${this.value}`);
    shadowRoot.innerHTML = `
    <style>
    ${styles}
    </style>
    <div class="main"><slot></slot></div>`;
    this.mainDiv = shadowRoot.querySelector('.main');
    this.mainDiv.addEventListener('click', this.toggle.bind(this));
  }

  adoptedCallback() {
    this.selected = true;
    this.toggle();
  }

  toggle() {
    const state = this.selected ? this.deselect() : this.select();
    console.log(`I am firing this event: ${this.value} is ${this.selected}`);
    this.dispatchEvent(
      new CustomEvent('answer-option', {
        detail: {
          value: this.value,
          selected: state
        },
        bubbles: true
      })
    );
    return state;
  }

  deselect() {
    this.mainDiv.classList.remove('selected');
    return (this.selected = false);
  }

  select() {
    this.mainDiv.classList.add('selected');
    return (this.selected = true);
  }
}

customElements.define('answer-option', AnswerOption);
