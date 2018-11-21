export default ({ html, props }) => {
    return class NavbarBrand extends HTMLElement {
        constructor() {
            super();
            this.render(this.template)
        }

        get props() {
            return props(this.attributes);
        }

        get template() {
            return html('template', 'nav', /*html*/ `
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Raleway');

                    :host {
                        width: 40%;
                        display: flex;
                        align-content: center;
                        align-items: center;
                    }
                    
                    a {
                        display: flex;
                        align-content: center;
                        color: #fff;
                        text-decoration: none;
                        font-weight: bold;
                        margin: 0 20px;
                        font-size: 20px;
                        font-family: 'Raleway', sans-serif;
                        padding: 1.5rem .5rem;
                        transition: .5s ease;
                    }

                    a:hover {
                        opacity: 0.8;
                        color: #fff;
                    }

                    @media screen and (max-width: 768px) {
                        :host {
                            width: 80%;
                        }
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