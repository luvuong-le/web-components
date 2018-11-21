export const html = (id, classes, content) => {
    let template = document.createElement('template');
    template.id = id;
    template.classList = classes;
    template.innerHTML = `${content}`
    return template;
}

export const props = (attributes) => {
    const props = {};

    for (const prop of attributes) {
        props[prop.name] = prop;
    }

    return props;
}

export const Register = (tag, component) => {
    customElements.define(tag, component({ html, props }));
}