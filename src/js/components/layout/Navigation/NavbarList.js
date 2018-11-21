export default ({ html, props}) => {
    return class NavbarList extends HTMLElement {
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
                        width: 60%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        justify-items: flex-end;
                    }

                    ul {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        justify-items: flex-end;
                        list-style: none;
                        text-align: right;
                        color: #fff;
                        margin: 0 20px;
                    }

                    @media screen and (max-width: 768px) {
                        :host {
                            display: none;
                        }

                        :host ul {
                            display: none;
                        }
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