// Autonomous custom elements
// Does not inherit from any HTML Elements

export default ({ html, props }) => {
    return class SidebarList extends HTMLElement {
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
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        justify-content: flex-start;
                        justify-items: flex-start;
                    }

                    ul {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-flow: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        justify-items: flex-start;
                        list-style: none;
                        color: #fff;
                        margin: 15px 0px;
                    }
                </style>
                <ul>
                    <slot />
                </ul>
            `);
        }

        render() {
            return this
                .attachShadow({ mode: 'open' })
                .appendChild(this.template.content.cloneNode(true));
        }
    }
}