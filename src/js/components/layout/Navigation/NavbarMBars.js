export default ({ html, props }) => {
  return class NavbarMBars extends HTMLElement {
    constructor() {
      super();
      this.setListeners();
      this.render(this.template);
    }

    get props() {
      return props(this.attributes);
    }

    get template() {
      return html('template', '', /*html*/ `
            <style>
              :host {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                color: #fff;
                height: 100%;
                width: 60%;
              }

              :host > div {
                margin: 0 20px;
                font-size: 30px;
                cursor: pointer;
              }

              @media screen and (max-width: 768px) {
                  :host {
                      width: 20%;
                  }
              }

              @media screen and (min-width: 768px) {
                  :host {
                     display: none;
                  }
              }
            </style>
            <div>
              <slot />
            </div>
            `);
    }

    setListeners() {
      this.addEventListener('click', e => {
        document.querySelector('side-nav').toggle();
      })
    }

    render() {
      return this.attachShadow({ mode: 'open' }).appendChild(
        this.template.content.cloneNode(true)
      );
    }
  };
};
