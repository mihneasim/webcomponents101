export class Question extends HTMLElement {
  constructor() {
    super();
    this.myAnswers = {};

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <slot name="actual-question"></slot>
      <slot></slot>
    `;
    console.log(this.querySelectorAll('answer-option'));
  }

  connectedCallback() {
    this.addEventListener('answer-option', x => {
      console.log(`I received this event: ${x.detail.value} - ${x.detail.selected}`);

      this.myAnswers = { ...this.myAnswers, [x.detail.value]: x.detail.selected };
      console.log(`The answers the question knows about are `);
      console.dir(this.myAnswers);
    });
  }

  getAnswers() {
    return [];
  }
}

customElements.define('question-mark', Question);
