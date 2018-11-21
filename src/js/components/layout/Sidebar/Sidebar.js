// Autonomous custom elements
// Does not inherit from any HTML Elements

export default ({ html, props }) => {
    return class Sidebar extends HTMLElement {
        constructor() {
            super();
            this.render(this.template);
        }

        get props() {
            return props(this.attributes);
        }

        get hidden() {
            return this.hasAttribute('closed');
        }

        set hidden(isHidden) {
            if (isHidden) {
                this.setAttribute('closed', '');
            } else {
                this.removeAttribute('closed');
            }
            return isHidden ? this.setAttribute('closed', '') : this.removeAttribute('closed');
        }

        static get observedAttributes() {
            return ['closed']
        }

        attributeChangedCallback(name, oldValue, newValue) {
            // console.log(`${name} prop changed | old: ${oldValue} | new: ${newValue}`);
        }

        get template() {
            return html('template', 'nav', /*html*/ `
                <style>
                    :host {
                        position: fixed;
                        top: 5%;
                        height: 100vh;
                        width: 250px;
                        transition: transform .5s ease;
                        transform: translateX(-100%);
                    }
                    nav {
                        position: fixed;
                        height: 100vh;
                        width: 100%;
                        display: flex;
                        background: #000;
                        box-shadow: 0px 1px 1px #000;
                        z-index: 99;
                    }

                    @media screen and (min-width: 768px) {
                        :host {
                            display: none;
                        }
                    }
                </style>
                <nav>
                    <slot name="navbar-nav"></slot>
                </nav>
            `);
        }

        toggle() {
            if (this.hidden) {
                this.hidden = false;
                this.style.transform = 'translateX(0%)';
            } else {
                this.hidden = true;
                this.style.transform = 'translateX(-100%)';
            }
        }

        render() {
            return this
                .attachShadow({ mode: 'open' })
                .appendChild(this.template.content.cloneNode(true));
        }
    }
}