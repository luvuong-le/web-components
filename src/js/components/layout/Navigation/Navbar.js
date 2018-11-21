// Autonomous custom elements
// Does not inherit from any HTML Elements
export default ({ html, props }) => {
    return class Navbar extends HTMLElement {
        constructor() {
            super();
            this.render(this.template);
        }

        get props() {
            return props(this.attributes);
        }

        get template() {
            return html('template', 'nav', /*html*/ `
                <style>
                    :host {
                        position: fixed;
                        top: 0;
                        width: 100%;
                        z-index: 999;
                        display: flex;
                    }
        
                    nav {
                        width: 100%;
                        display: flex;
                        background: #000;
                        box-shadow: 0px 1px 1px #000;
                    }
                </style>
                <nav>
                    <slot name="navbar-brand"></slot>
                    <slot name="navbar-mbars"></slot>
                    <slot name="navbar-nav"></slot>
                </nav>
            `);
        }

        // Attach a shadow DOM 
        // Hide implementation of the component
        render() {
            return this
                .attachShadow({ mode: 'open' })
                .appendChild(this.template.content.cloneNode(true));
        }
    }
}