export default ({ html, props}) => {
    return class Card extends HTMLElement {
        connectedCallback() {
            // console.log('Props', this.props);
        }

        // Define attributes to watch
        static get observedAttributes() {
            return ['test']
        }

        attributeChangedCallback(name, oldVal, newVal) {
            console.log(`${name} prop changed | old: ${oldVal} | new: ${newVal}`);
        }

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
                .card {
                    margin: 0 25px;
                }

                .card-img {
                    font-size: 70px;
                }

                @media screen and (max-width: 768px) {
                    .card {
                        margin: 15px 25px;
                        text-align: left;
                    }
                }
            </style>
            <div class="card">
                <div class="card-img">
                    <slot name="card-img"></slot>
                </div>
                <div class="card-content">
                    <slot name="card-content"></slot>
                </div>
            </div>
        `);
        }

        render() {
            return this
                .attachShadow({ mode: 'open' })
                .appendChild(this.template.content.cloneNode(true));
        }
    }
}
