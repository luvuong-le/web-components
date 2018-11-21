export default ({ html, props }) => {
    return class NavbarItem extends HTMLElement {
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
                    a {
                        display: flex;
                        align-content: center;
                        color: #fff;
                        text-decoration: none;
                        text-transform: capitalize;
                        margin: 0 10px;
                        padding: 1.5rem .5rem;
                        transition: 0.5s ease;
                    }

                    a:hover {
                        opacity: 0.7;
                        color: #fff;
                    }
                </style>

                <a href=${this.props.to.value}><slot /></a>
            `);
        }

        render() {
            return this
                .attachShadow({ mode: 'open' })
                .appendChild(this.template.content.cloneNode(true));
        }
    }
}